import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaExame from '../../components/exames/Tabela';
import './Exames.css'

const Exames = () => {
  return (
    <>
      <div className="layout-exames">
        <h1>Seu mural de Exames</h1>
        <div className='tabelas'>
          <TabelaExame />
        </div>
        <div className="btn-holder">
          <Link to="/exames/cadastro">
            <Botao botao="CADASTRAR" classe="cadastrar" />
          </Link>
          <Link to="/exames/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>

        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default Exames;
