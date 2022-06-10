import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FornecedorService from '../../services/gestor/FornecedorService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'


const FornecedoresLista = () => {

  const [fornecedores, setFornecedores] = useState([])

  useEffect(() => {

    setFornecedores(FornecedorService.getAll())

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
          FornecedorService.delete(id),
          setFornecedores(FornecedorService.getAll())
      )
    }
  })
}

  return (
    <div>
      <h1><p class="text-center">Fornecedores</p></h1>

      <p class="text-end"><Link className='btn btn-primary mb-3' to={'/fornecedores/create'}><FaPlus /> Novo</Link></p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th class="text-center">Nome do Fornecedor</th>
            <th class="text-center">Cnpj</th>
            <th class="text-center">tipo de produto</th>
            <th class="text-center">Data de vencimento</th>
            <th class="text-center">Editar e Excluir</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((item, i) => (
            <tr key={i}>
              <td class="text-center">{item.nome}</td>
              <td class="text-center">{item.cnpj}</td>
              <td class="text-center">{item.produto}</td>
              <td class="text-center">{item.data}</td>
              <td class="text-center">
                <Link to={'/fornecedores/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default FornecedoresLista