import { useContext } from 'react';
import UserContext from './contexts/UserContext';
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
import Login from './pages/Login/Login';
import Registrar from './pages/Login/Registrar';

function App() {
  const { logado } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/remedios" element={<Remedios />} />
            <Route path="/remedios/delete" element={<DeletarRemedio />} />
            <Route path="/remedios/cadastro" element={<CadastrarRemedio />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/consultas/delete" element={<ConsultasDeletar />} />
            <Route path="/consultas/cadastro" element={<ConsultasCadastrar />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/exames/delete" element={<DeletarExames />} />
            <Route path="/exames/cadastro" element={<CadastrarExames />} />
          </Route>
        ) : (
          <>
            <Route index element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </>
        )}

        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
