import './Exames.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import TabelaExame from '../../components/TabelaExame';

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
          <Link to="/exames/cadastrar">
            <Button botao="CADASTRAR" classe="cadastrar" />
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

export default Exames;
