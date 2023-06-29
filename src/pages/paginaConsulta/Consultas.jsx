import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
<<<<<<< HEAD

import TabelaConsulta from '../../components/consultas/Tabela';
=======
import Tabela from '../../components/consultas/Tabela';
import './Consultas.css'
>>>>>>> deef7512f0d20635abda7db09853cd1491abb9ee

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
<<<<<<< HEAD
        <h1>Suas consultas do dia</h1>
        <TabelaConsulta />
=======
        <h1 className='titulo'>Suas consultas do dia</h1>
        <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50" />
>>>>>>> deef7512f0d20635abda7db09853cd1491abb9ee
        <div className="btn-holder">
          <Link to="/consultas/cadastro">
            <Botao botao="CADASTRAR" classe="cadastro" />
          </Link>
          <Link to="/consultas/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-consultas"></div>
      </div>
    </>
  );
};

export default Consultas;
