import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import FormsConsulta from '../../components/consultas/Formulario';

const CadastrarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre suas consultas no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <FormsConsulta />

        <div className="btn-holder">
          <Link href="/consultas">
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
          <Link href="/remedios/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-consultas"></div>
      </div>
    </>
  );
};

export default CadastrarRemedio;
