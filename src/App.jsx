import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Erro404 from './pages/Erro404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Route path="*" element={<Erro404 />} />
    </BrowserRouter>
  );
}

export default App;
