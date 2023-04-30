import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import TabelaRemedio from '../../components/TabelaRemedio';
import './Remedio.css';

const Remedios = () => {
  return (
    <>
      <div className="layout-remedio">
        <h1>Seus Remédios do dia</h1>
        <TabelaRemedio
          remedio="Diazepam"
          dose="2 comprimidos"
          miligramas="25mg"
          hor1="12:00"
          hor2="18:00"
          hor3="00:00"
        />
        <div className="btn-holder">
          <Link to="/remedios">
            <Button botao="CADASTRAR" classe="cadastrar" />
          </Link>
          <Link to="/remedios">
            <Button botao="DELETAR" classe="deletar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Remedios;
