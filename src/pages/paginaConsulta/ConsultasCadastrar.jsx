import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import Formulario from '../../components/consultas/Formulario';

const CadastrarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre suas consultas no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <Formulario />

        <div className="btn-holder">
          <Link to="/consultas">
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
          <Link to="/remedios/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-consultas"></div>
      </div>
    </>
  );
};

export default CadastrarRemedio;
