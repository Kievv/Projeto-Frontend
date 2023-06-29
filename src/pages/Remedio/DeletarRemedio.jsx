import { Link } from 'react-router-dom';

import Botao from '../../components/Botao';
import TabelaDeleteRemedio from '../../components/remedios/TabelaDeletar';

const DeletarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Faça a exclusão dos seus remédios</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e clicar em "DELETAR"</h3>
        <TabelaDeleteRemedio />

        <div className="btn-holder">
          <Link to={'/remedios'}>
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
          <Link to={'/remedios/delete'}>
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-remedios"></div>
      </div>
    </>
  );
};

export default DeletarRemedio;
