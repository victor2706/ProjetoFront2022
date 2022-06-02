import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ClienteService from '../../services/gestor/ClienteService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'

const ClientesLista = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {

    setClientes(ClienteService.getAll())

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
          ClienteService.delete(id),
          setClientes(ClienteService.getAll()),
      )
    }
  })
}

console.log(clientes);
  return (
    <div>
      <h1>
        <p class="text-center">Clientes</p>
      </h1>
      <p class="text-end" ><Link className='btn btn-primary'  to={'/clientes/create'}><FaPlus /> Novo</Link></p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th class="text-center">Nome do cliente</th>
            <th class="text-center">CPF do Cliente</th>
            <th class="text-center">Email do cliente</th>
            <th class="text-center">Data de Nascimento</th>
            <th class="text-center">Editar e Excluir</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item, i) => (
            <tr key={i}>
              <td class="text-center">{item.nome}</td>
              <td class="text-center">{item.cpf}</td>
              <td class="text-center">{item.email}</td>
              <td class="text-center">{item.data}</td>
              <td class="text-center">
                <Link to={'/clientes/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default ClientesLista