import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaDeleteExame from '../../components/exames/TabelaDeletar';

const DeletarExame = () => {
  return (
    <>
      <div className="layout-exames">
        <h1>Faça a exclusão dos seus exames</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e clicar em "DELETAR"</h3>
        <TabelaDeleteExame />

        <div className="btn-holder">
          <Link href="/exames">
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
          <Link href="/exames/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default DeletarExame;
