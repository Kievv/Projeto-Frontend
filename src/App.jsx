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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/remedios" element={<Remedios />} />
          <Route path="/remedios/deletar" element={<DeletarRemedio />} />
          <Route path="/remedios/cadastrar" element={<CadastrarRemedio />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/consultas/deletar" element={<ConsultasDeletar />} />
        </Route>
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
