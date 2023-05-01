import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Remedio.css';
import FormsRemedio from '../../components/FormsRemedio';

const CadastrarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre seus remédios no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <FormsRemedio />

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

export default CadastrarRemedio;
