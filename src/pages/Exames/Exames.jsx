import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaExame from '../../components/exames/Tabela';

const Exames = () => {
  return (
    <>
      <div className="layout-exames">
        <h1>Seu mural de Exames</h1>
        <TabelaExame
          exame="Eletrocardiograma"
          clinica="Gastrolago"
          local="Hospital Daher"
          dia="02/05"
          horario="14:20"
        />
        <div className="btn-holder">
          <Link href="/exames/cadastro">
            <Botao botao="CADASTRAR" classe="cadastrar" />
          </Link>
          <Link href="/exames/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>

        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default Exames;
