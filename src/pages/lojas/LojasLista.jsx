import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import apiGestor from '../../services/apiGestor'
import { BsPencilFill, BsTrash, BsArrowLeft } from 'react-icons/bs'
import LojaService from '../../services/gestor/LojaService'
import { FaPlus } from 'react-icons/fa'
import Swal from 'sweetalert2'

const LojasLista = () => {

    const [lojas, setLojas] = useState([])

    useEffect(() => {
  
      setLojas(LojaService.getAll())
  
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
            LojaService.delete(id),
            setLojas(LojaService.getAll())
        )
      }
    })
  }
    return (
      <div>
        <h1><p class="text-center">Lojas</p></h1>
  
        <p  class="text-end"><Link className='btn btn-primary' to={'/lojas/create'}><FaPlus /> Novo</Link></p>
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th class="text-center">Nome da loja</th>
              <th class="text-center">Cnpj</th>
              <th class="text-center">Local da Loja</th>
              <th class="text-center">Editar  e Excluir</th>
            </tr>
          </thead>
          <tbody>
            {lojas.map((item, i) => (
              <tr key={i}>
                <td class="text-center">{item.nome}</td>
                <td class="text-center">{item.cnpj}</td>
                <td class="text-center">{item.local}</td>
                <td class="text-center">
                  <Link to={'/lojas/' + i}><BsPencilFill /></Link>{' '}
                  <BsTrash onClick={() => apagar(i)} className='text-danger' />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  
  
  
      </div>
    )
  }

export default LojasLista