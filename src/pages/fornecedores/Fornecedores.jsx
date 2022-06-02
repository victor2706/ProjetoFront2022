import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import FornecedorService from '../../services/gestor/FornecedorService';
import fornecedorValidator from '../../validators/fornecedorValidator';
import ProdutoService from '../../services/gestor/ProdutoService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import Firulas from '../../components/Firulas';

const Fornecedores = () => {
  
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const reference = {register, errors, validator: fornecedorValidator, setValue};
  const produto = ProdutoService.getAll()

  useEffect(() => {
    if (params.id) {
      const disciplina = FornecedorService.get(params.id)

      for (let campo in disciplina) {
        setValue(campo, disciplina[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      FornecedorService.update(params.id, dados)
    } else {
      FornecedorService.create(dados)
    }

    navigate('/fornecedores')
  }
  function handleChange(event) {
    const reqcnpj = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, reqcnpj))
  }

  return (
    <div>
      <h1><p class="text-center">Cadastro de Fornecedores:</p></h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome do Fornecedor: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", fornecedorValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Label>Cnpj: </Form.Label>
          <Form.Control isInvalid={errors.cnpj} type="text" {...register("cnpj", fornecedorValidator.cnpj)} mask="99.999.999/9999-99" onChange={handleChange}/>
          {errors.cnpj && <span>{errors.cnpj.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="produto">
          <Form.Label>Nome do produto: </Form.Label>
          <Form.Select {...register("produto", fornecedorValidator.produto)}>
            <option>Selecione</option>
            {produto.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
        <Firulas name="data" label="Data de vencimento do produto" isInvalid={errors.data} type="date" reference={reference} {...register("data", fornecedorValidator.data)} />

        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Fornecedores