import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="warning" variant="light" className="mb-3">
        <Container>
          <Navbar.Brand href="/paginaInicial">EmpresaNew</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/lojas">Lojas</Link>
            <Link className="nav-link" to="/produtos">Produtos</Link>
            <Link className="nav-link" to="/envios">Envios</Link>
            <Link className="nav-link" to="/fornecedores">Fornecedor</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu