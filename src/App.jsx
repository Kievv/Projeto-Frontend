import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Erro404 from './pages/Erro404';
import Consultas from './pages/paginaConsulta/Consultas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/consultas" element={<Consultas />} />
        </Route>
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
