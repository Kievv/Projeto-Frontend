import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Home.css';

const Home = () => {
  const handleLogout = useContext(UserContext);
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
          <Button handleClick={handleLogout} classe="btn btn-primary" botao="SAIR" />
        </div>

        <div className="btn-holder">
          <Link to="/remedios">
            <Botao botao="REMEDIOS" classe="botaoHome" />
          </Link>
          <Link to="/consultas">
            <Botao botao="CONSULTAS" classe="botaoHome" />
          </Link>
          <Link to="/exames">
            <Botao botao="EXAMES" classe="botaoHome" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
