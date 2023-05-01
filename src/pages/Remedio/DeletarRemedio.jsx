import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import TabelaRemedio from '../../components/TabelaRemedio';
import './Remedio.css';

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
          <Link to="/remedios">
            <Button botao="VOLTAR" classe="voltar" />
          </Link>
          <Link to="/remedios/deletar">
            <Button botao="DELETAR" classe="deletar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeletarRemedio;
