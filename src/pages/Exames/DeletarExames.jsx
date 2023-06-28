import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import TabelaExame from '../../components/exames/Tabela';

const DeletarExame = () => {
  return (
    <>
      <div className="layout-exames">
        <h1>Faça a exclusão dos seus exames</h1>
        <h3>Basta clicar nas caixas na lateral da tabela e clicar em "DELETAR"</h3>
        <TabelaExame
          exame="Eletrocardiograma"
          clinica="Gastrolago"
          local="Hospital Daher"
          dia="02/05"
          horario="14:20"
          exibirCheckbox={true}
        />

        <div className="btn-holder">
          <Link href="/exames">
            <Botao botao="VOLTAR" classe="voltar" />
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

export default DeletarExame;
