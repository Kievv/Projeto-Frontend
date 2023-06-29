import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import Formulario from '../../components/exames/Formulario';


const CadastrarExames = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre seus exames no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <Formulario />

        <div className="btn-holder">
          <Link to="/exames">
<<<<<<< HEAD
            <Botao botao="VOLTAR" className="botao-voltar" />
=======
            <Botao botao="VOLTAR" classe="voltar" />
>>>>>>> 6fe7e460763996ba099ebbe350fac8bc19f05912
          </Link>
          <Link to="/exames/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default CadastrarExames;
