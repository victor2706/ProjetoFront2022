import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DisciplinaService from '../../services/gestor/DisciplinaService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const FornecedoresLista = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {

    setDisciplinas(DisciplinaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      DisciplinaService.delete(id)
      setDisciplinas(DisciplinaService.getAll())
    }
  }

  return (
    <div>
      <h1><p class="text-center">Fornecedores</p></h1>

      <Link className='btn btn-dark mb-3' to={'/fornecedores/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Matéria</th>
            <th>Curso</th>
            <th>Editar e Excluir</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
              <td>
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