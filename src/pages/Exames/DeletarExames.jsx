import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Exames.css';
import TabelaExame from '../../components/TabelaExame';

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

export default DeletarExame;
