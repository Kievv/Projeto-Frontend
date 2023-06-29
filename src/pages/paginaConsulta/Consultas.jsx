import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import './Consultas.css';
import TabelaConsulta from '../../components/consultas/Tabela';

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1 className="titulo">Suas consultas do dia</h1>
        <div className='tabelas'>
          <TabelaConsulta />
        </div>
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
