import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import produtoValidator from '../../validators/produtoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProdutoService from '../../services/gestor/ProdutoService';
import { mask } from 'remask';
const Produtos = () => {
  
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const produto = ProdutoService.get(params.id)

      for (let campo in produto) {
        setValue(campo, produto[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ProdutoService.update(params.id, dados)
    } else {
      ProdutoService.create(dados)
    }

    navigate('/produtos')
  }

  
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1><p class="text-center">Cadastro de Produtos: </p></h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome do produto: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", produtoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="codigo">
          <Form.Label>Codigo do produto(NCM): </Form.Label>
          <Form.Control isInvalid={errors.codigo} type="text"
            {...register("codigo", produtoValidator.codigo)}
            mask="9999.99.99" onChange={handleChange}
          />
          {errors.codigo && <span>{errors.codigo.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="valor">
          <Form.Label>Valor do Produto: </Form.Label>
          <Form.Control isInvalid={errors.valor} type="text" {...register("valor", produtoValidator.valor)} />
          {errors.valor && <span>{errors.valor.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="estoque">
          <Form.Label>Quantidade no Estoque: </Form.Label>
          <Form.Control isInvalid={errors.estoque} type="number" {...register("estoque", produtoValidator.estoque)} />
          {errors.estoque && <span>{errors.estoque.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Produtos