import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProdutoService from '../../services/gestor/ProdutoService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'

const ProdutosLista = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {

    setProdutos(ProdutoService.getAll())

  }, [])

  function apagar(id) {
    Swal.fire({
      title: 'Você quer deletar certeza?',
      text: "Não tem mais volta viu Meu querido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado!',
          'O seu arquivo foi deletado.',
          'success',
          ProdutoService.delete(id),
      setProdutos(ProdutoService.getAll())
      )
    }
  })
}

  return (
    <div>
      <h1><p class="text-center">Produtos</p></h1>

      <p class="text-end"><Link className='btn btn-primary' to={'/produtos/create'}><FaPlus /> Novo</Link></p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th class="text-center">Nome do Produto</th>
            <th class="text-center">Codigo do produto</th>
            <th class="text-center">Valor do Produto</th>
            <th class="text-center">Quantidade no Estoque</th>
            <th class="text-center">Editar e Excluir</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, i) => (
            <tr key={i}>
              <td class="text-center">{item.nome}</td>
              <td class="text-center">{item.codigo}</td>
              <td class="text-center">{item.valor}</td>
              <td class="text-center">{item.estoque}</td>
              <td class="text-center">
                <Link to={'/produtos/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default ProdutosLista