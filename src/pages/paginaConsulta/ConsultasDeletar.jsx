import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaDeleteConsulta from '../../components/consultas/TabelaDeletar';

const ConsultasDeletar = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1>Faça a exclusão de consultas</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e apertar o botão "DELETAR"</h3>
        <TabelaDeleteConsulta />
        <div className="btn-holder">
          <Link to="/consultas">
            <Botao botao="VOLTAR" classe="voltar" />
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

export default ConsultasDeletar;
