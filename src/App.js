import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Clientes from "./pages/clientes/Clientes";
import ClientesLista from "./pages/clientes/ClientesLista";
import ProdutosLista from "./pages/produtos/ProdutosLista";
import Produtos from "./pages/produtos/Produtos";
import Envios from "./pages/envios/Envios";
import EnviosLista from "./pages/envios/EnviosLista";
import Lojas from "./pages/lojas/Lojas";
import LojasLista from "./pages/lojas/LojasLista";
import Fornecedores from "./pages/disciplinas/Fornecedores";
import FornecedoresLista from "./pages/disciplinas/FornecedorLista";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Lojas />} />

            <Route path="/clientes" element={<ClientesLista />} />
            <Route path="/clientes/create" element={<Clientes />} />
            <Route path="/clientes/:id" element={<Clientes />} />
            <Route path="/Lojas" element={<LojasLista />} />
            <Route path="/Lojas/create" element={<Lojas />} />
            <Route path="/Lojas/:id" element={<Lojas />} />
            <Route path="/produtos" element={<ProdutosLista />} />
            <Route path="/produtos/:id" element={<Produtos />} />
            <Route path="/produtos/create" element={<Produtos />} />
            <Route path="/envios" element={<EnviosLista />} />
            <Route path="/envios/create" element={<Envios />} />
            <Route path="/envios/:id" element={<Envios />} />
            <Route path="/fornecedores/create" element={<Fornecedores />} />
            <Route path="/fornecedores/:id" element={<Fornecedores />} />
            <Route path="/fornecedores" element={<FornecedoresLista />} />
            
            
            
            
            
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
