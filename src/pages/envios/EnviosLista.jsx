import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EnvioService from '../../services/gestor/EnvioService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'

const SemestresLista = () => {

  const [envios, setEnvios] = useState([])

  useEffect(() => {

    setEnvios(EnvioService.getAll())

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
          EnvioService.delete(id),
      setEnvios(EnvioService.getAll())
      )
    }
  })
}
  return (
    <div>
      <h1><p class="text-center">Envios</p></h1>

      <p class="text-end"><Link className='btn btn-primary' to={'/envios/create'}><FaPlus /> Novo</Link></p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th class="text-center">Nome do Cliente</th>
            <th class="text-center">Nome do produto</th>
            <th class="text-center">Nome do fornecedor</th>
            <th class="text-center">Nome da Loja</th>
            <th class="text-center">Quantidades do produto</th>
            <th class="text-center">cep do Cliente</th>
            <th class="text-center">Data de Envio</th>
            <th class="text-center">Editar e Excluir</th>
            
          </tr>
        </thead>
        <tbody>
          {envios.map((item, i) => (
            <tr key={i}>
              <td class="text-center">{item.nome}</td>
              <td class="text-center">{item.produto}</td>
              <td class="text-center">{item.fornecedor}</td>
              <td class="text-center">{item.lojas}</td>
              <td class="text-center">{item.quantidade}</td>
              <td class="text-center">{item.cep}</td>
              <td class="text-center">{item.data}</td>
              <td class="text-center">
                <Link to={'/envios/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default SemestresLista