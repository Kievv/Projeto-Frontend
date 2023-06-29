import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Botao from '../../components/Botao';
import UserContext from '../../contexts/UserContext';
import './Home.css';

const Home = () => {
  const handleLogout = useContext(UserContext);
  return (
    <>
      <div className="content">
        <h1>REMEDIE</h1>
        <div className="content-holder">
          <div className="column">
            <img src="/banner.jpg" alt="Imagem 0" className="image" />
            <div className="column-content">
              <h2>REMEDIE</h2>
              <p>Bem-vindo ao REMEDIE, a sua solução abrangente para manter seu bem-estar em dia!
                Criamos este site com o objetivo de oferecer uma agenda completa para o gerenciamento de remédios,
                consultas médicas e exames, garantindo que você nunca mais esqueça nenhuma data importante.</p>
            </div>
          </div>
          <div className="column">
            <img src="/remedie-image1.jpg" alt="Imagem 1" className="image" />
            <div className="column-content">
              <h2>Recursos de Gerenciamento</h2>
              <p>Com o REMEDIE, você terá acesso a recursos para manter todas as informações de saúde essenciais em um só lugar. 
                Nossa agenda de remédios diária permite que você defina lembretes para cada medicamento, 
                ajudando a garantir que você tome suas doses corretamente e no momento certo. </p>
            </div>
          </div>
          <div className="column">
            <img src="/remedie-image2.jpg" alt="Imagem 2" className="image" />
            <div className="column-content">
              <h2>Agenda de Consultas Médicas e Exames</h2>
              <p>Além do gerenciamento de remédios, o REMEDIE também permite que você agende e acompanhe suas consultas médicas e 
                exames de forma conveniente. Mantenha-se atualizado com seus compromissos de saúde, e nunca mais se esqueça de uma 
                consulta importante.</p>
            </div>
          </div>
          <div className="column">
            <img src="/remedie-image4.jpg" alt="Imagem 4" className="image" />
            <div className="column-content">
              <h2>Interface Intuitiva e Personalizada</h2>
              <p>Nossa interface intuitiva e de fácil navegação torna o uso do REMEDIE uma experiência agradável. 
                Adicione suas informações de saúde e obtenha uma visão clara e organizada de todas 
                as suas datas importantes. Estamos comprometidos em fornecer uma plataforma que seja acessível e fácil de usar 
                para todos os usuários.</p>
            </div>
          </div>
          <Botao handleClick={handleLogout} classe="btn btn-primary" botao="SAIR" />
        </div>

        <div className="btn-home">
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
