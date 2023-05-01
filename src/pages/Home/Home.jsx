import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="content">
        <h1>REMEDIE</h1>
        <div className="content-holder">
          <h3 id="texto-home">
            Este site foi criado com o intuito de ser uma agenda de remédios diária, consultas médicas e exames para que
            você nunca mais esqueça nenhuma data.
          </h3>
          <div alt="remedios" className="imagem-home"></div>
        </div>

        <div className="btn-holder">
          <Link to="/remedios">
            <Button botao="REMEDIOS" classe="botaoHome" />
          </Link>
          <Link to="/consultas">
            <Button botao="CONSULTAS" classe="botaoHome" />
          </Link>
          <Link to="/exames">
            <Button botao="EXAMES" classe="botaoHome" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
