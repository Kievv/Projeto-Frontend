import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import '../Remedio/Remedio.css';
import FormsConsulta from '../../components/FormsConsultas/ConsultasForm';

const CadastrarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre suas consultas no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <FormsConsulta />

        <div className="btn-holder">
          <Link to="/consultas">
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
