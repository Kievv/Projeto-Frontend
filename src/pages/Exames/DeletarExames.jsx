import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaDeleteExame from '../../components/exames/TabelaDeletar';

const DeletarExame = () => {
  return (
    <>
      <div className="layout-exames">
        <h1>Faça a exclusão dos seus exames</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e clicar em "DELETAR"</h3>
        <div className='tabelas-deletar'>
        <TabelaDeleteExame />
        </div>
        

        <div className="btn-holder">
          <Link to="/exames">
            <Botao botao="VOLTAR" classe="voltar" />
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

export default DeletarExame;
