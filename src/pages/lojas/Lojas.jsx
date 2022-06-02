import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import apiGestor from '../../services/apiGestor'
import { useForm } from 'react-hook-form'
import LojaValidator from '../../validators/LojaValidator';
import LojaService from '../../services/gestor/LojaService'
import { mask } from 'remask';

const Lojas = () => {

    const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (params.id) {
          const curso = LojaService.get(params.id)
    
          for (let campo in curso) {
            setValue(campo, curso[campo])
          }
        }
      }, [])
    
      function salvar(dados) {
    
        if (params.id) {
          LojaService.update(params.id, dados)
        } else {
          LojaService.create(dados)
        }
    
        navigate('/lojas')
      }
      function handleChange(event) {
        const reqcnpj = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, reqcnpj))
      }

    return (
        <div>
            <h1><p class="text-center">Cadastro de Lojas:</p></h1>
            <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome da loja: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" 
          {...register("nome", LojaValidator.nome)}/>
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Label>Cnpj: </Form.Label>
          <Form.Control isInvalid={errors.cnpj} type="text" {...register("cnpj", LojaValidator.cnpj)} mask="99.999.999/9999-99" onChange={handleChange} />
          {errors.cnpj && <span>{errors.cnpj.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="local">
        <Form.Label>Local: </Form.Label>
        <Form.Select {...register("local")} type="text" {...register("local", LojaValidator.local)}>
          <option disabled selected>Local</option>
          <option value="Planaltina">Planaltina</option>
          <option value="Samambaia">Samambaia</option>
          <option value="Águas Claras">Águas Claras</option>
          <option value="Riacho Fundo I">Riacho Fundo I</option>
          <option value="Riacho Fundo II">Riacho Fundo II</option>
          </Form.Select>
          {errors.local && <span>{errors.local.message}</span>}
          </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

        </div>
    )
}

export default Lojas