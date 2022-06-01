import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import envioValidator from '../../validators/envioValidator';
import EnvioService from '../../services/gestor/EnvioService';
import { mask } from 'remask';
import Firulas from '../../components/Firulas';

const Envios = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const reference = {register, errors, validator: envioValidator, setValue};

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
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome do Cliente: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", envioValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="produto">
          <Form.Label>Nome do produto: </Form.Label>
          <Form.Control isInvalid={errors.produto} type="text" {...register("produto", envioValidator.produto)} />
          {errors.produto && <span>{errors.produto.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="fornecedor">
          <Form.Label>Nome do fornecedor: </Form.Label>
          <Form.Control isInvalid={errors.fornecedor} type="text" {...register("fornecedor", envioValidator.fornecedor)} />
          {errors.fornecedor && <span>{errors.fornecedor.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="lojas">
          <Form.Label>Nome da Lojas: </Form.Label>
          <Form.Control isInvalid={errors.lojas} type="text" {...register("lojas", envioValidator.lojas)} />
          {errors.lojas && <span>{errors.lojas.message}</span>}
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