import { Link } from 'react-router-dom';
import TabelaRemedio from '../../components/remedios/Tabela';

import Botao from '../../components/Botao';

const DeletarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Faça a exclusão dos seus remédios</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e clicar em "DELETAR"</h3>
        <TabelaRemedio
          remedio="Diazepam"
          dose="2 comprimidos"
          miligramas="25mg"
          hor1="12:00"
          hor2="18:00"
          hor3="00:00"
          exibirCheckbox={true}
        />

        <div className="btn-holder">
          <Link href={'/remedios'}>
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
          <Link href={'/remedios/delete'}>
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-remedios"></div>
      </div>
    </>
  );
};

export default DeletarRemedio;
