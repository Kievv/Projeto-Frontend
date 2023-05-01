import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Exames.css';
import FormsExames from '../../components/FormsExames';

const CadastrarExames = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre seus exames no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <FormsExames />

        <div className="btn-holder">
          <Link to="/exames">
            <Button botao="VOLTAR" classe="voltar" />
          </Link>
          <Link to="/exames/deletar">
            <Button botao="DELETAR" classe="deletar" />
          </Link>
        </div>
        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default CadastrarExames;
