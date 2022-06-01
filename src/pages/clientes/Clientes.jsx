import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import ClienteService from '../../services/gestor/ClienteService';
import clienteValidator from '../../validators/clienteValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import Firulas from '../../components/Firulas';

const Clientes = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const reference = {register, errors, validator: clienteValidator, setValue}
  
  useEffect(() => {
    if (params.id) {
      const cliente = ClienteService.get(params.id)

      for (let campo in cliente) {
        setValue(campo, cliente[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ClienteService.update(params.id, dados)
    } else {
      ClienteService.create(dados)
    }

    navigate('/clientes')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1><p class="text-center">Cadastro de Clientes:</p></h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome do cliente: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", clienteValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF do cliente: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text"
            {...register("cpf", clienteValidator.cpf)}
            mask="999.999.999-99" onChange={handleChange}
          />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email do cliente: </Form.Label>
          <Form.Control isInvalid={errors.email} type="text" {...register("email", clienteValidator.email)} />
          {errors.email && <span>Campo Obrigatório</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
        <Firulas name="data" label="Data de Nascimento" isInvalid={errors.data} type="date" reference={reference} {...register("data", clienteValidator.data)} />

        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Clientes