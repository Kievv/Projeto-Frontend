import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaDeleteExame from '../../components/exames/TabelaDeletar';

const DeletarExame = () => {
  return (
    <>
      <div className="layout-exames">
        <h1>Faça a exclusão dos seus exames</h1>
        <h3>Basta clicar em "DELETAR EXAME"</h3>
        <div className="tabelas-deletar">
          <TabelaDeleteExame />
        </div>

        <div className="btn-holder">
          <Link to="/exames">
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
        </div>
        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default DeletarExame;
