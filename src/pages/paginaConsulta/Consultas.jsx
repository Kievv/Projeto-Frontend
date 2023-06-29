import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import Tabela from '../../components/consultas/Tabela';
import './Consultas.css'

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1 className='titulo'>Suas consultas do dia</h1>
        <div>
          <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50" />
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
