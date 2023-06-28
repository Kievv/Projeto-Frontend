import Botao from '../../components/Botao';
import { Link } from 'react-router-dom';
import TabelaRemedio from '../../components/remedios/Tabela';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';

const Remedios = () => {
  const { userId } = useContext(UserContext);
  return (
    <>
      <div className="layout-remedios">
        <h1>Seus Remédios do dia</h1>
        <TabelaRemedio userId={userId} />
        <div className="btn-holder">
          <Link to="/remedios/cadastro">
            <Botao botao="CADASTRAR" classe="cadastro" />
          </Link>
          <Link to="/remedios/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-remedios"></div>
      </div>
    </>
  );
};

export default Remedios;
