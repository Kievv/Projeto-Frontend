import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import Tabela from '../../components/consultas/Tabela';

const ConsultasDeletar = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1>Faça a exclusão de consultas</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e apertar o botão "DELETAR"</h3>
        <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50" exibirCheckbox={true} />
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
