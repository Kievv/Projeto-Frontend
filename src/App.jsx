import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Erro404 from './pages/Erro404';
import Consultas from './pages/paginaConsulta/Consultas';
import Remedios from './pages/Remedio/Remedios';
import ConsultasDeletar from './pages/paginaConsulta/ConsultasDeletar';
import DeletarRemedio from './pages/Remedio/DeletarRemedio';
import CadastrarRemedio from './pages/Remedio/CadastrarRemedio';
import ConsultasCadastrar from './pages/paginaConsulta/ConsultasCadastrar';
import Exames from './pages/Exames/Exames';
import DeletarExames from './pages/Exames/DeletarExames';
import CadastrarExames from './pages/Exames/CadastrarExames';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/remedios" element={<Remedios />} />
          <Route path="/remedios/deletar" element={<DeletarRemedio />} />
          <Route path="/remedios/cadastro" element={<CadastrarRemedio />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/consultas/deletar" element={<ConsultasDeletar />} />
          <Route path="/consultas/cadastro" element={<ConsultasCadastrar />} />
          <Route path="/exames" element={<Exames />} />
          <Route path="/exames/deletar" element={<DeletarExames />} />
          <Route path="/exames/cadastro" element={<CadastrarExames />} />
        </Route>
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
