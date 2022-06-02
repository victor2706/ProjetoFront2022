import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import envioValidator from '../../validators/envioValidator';
import EnvioService from '../../services/gestor/EnvioService';
import ClienteService from '../../services/gestor/ClienteService';
import ProdutoService from '../../services/gestor/ProdutoService';
import FornecedorService from '../../services/gestor/FornecedorService';
import LojaService from '../../services/gestor/LojaService';
import { mask } from 'remask';
import Firulas from '../../components/Firulas';

const Envios = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const reference = {register, errors, validator: envioValidator, setValue};
  const cliente = ClienteService.getAll()
  const produto = ProdutoService.getAll()
  const fornecedor = FornecedorService.getAll()
  const loja = LojaService.getAll()
  useEffect(() => {
    if (params.id) {
      const envio = EnvioService.get(params.id)

      for (let campo in envio) {
        setValue(campo, envio[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      EnvioService.update(params.id, dados)
    } else {
      EnvioService.create(dados)
    }

    navigate('/envios')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1><p class="text-center">Cadastro de Envios:</p></h1>

      <Form >
      <Form.Group className="mb-3" controlId="cliente">
          <Form.Label>Nome do cliente: </Form.Label>
          <Form.Select {...register("cliente", envioValidator.cliente)}>
            <option>Selecione</option>
            {cliente.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="produto">
          <Form.Label>Nome do produto: </Form.Label>
          <Form.Select {...register("produto", envioValidator.produto)}>
            <option>Selecione</option>
            {produto.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="fornecedor">
          <Form.Label>Nome do fornecedor: </Form.Label>
          <Form.Select {...register("fornecedor", envioValidator.fornecedor)}>
            <option>Selecione</option>
            {fornecedor.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="loja">
          <Form.Label>Nome da loja: </Form.Label>
          <Form.Select {...register("loja", envioValidator.loja)}>
            <option>Selecione</option>
            {loja.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.loja && <span>{errors.loja.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantidade">
          <Form.Label>Quantidades do produto: </Form.Label>
          <Form.Control isInvalid={errors.quantidade} type="number" {...register("quantidade", envioValidator.quantidade)} />
          {errors.quantidade && <span>{errors.quantidade.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep do Cliente: </Form.Label>
          <Form.Control isInvalid={errors.cep} type="text"
            {...register("cep", envioValidator.cep)}
            mask="99999-999" onChange={handleChange}
          />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
        <Firulas name="data" label="Data de Envio" isInvalid={errors.data} type="date" reference={reference} {...register("data", envioValidator.data)} />

        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Envios