import Navbar from '../Navbar';

const menu = ['home', 'remedios', 'consultas', 'exames'];

const Header = () => {
  return <Navbar itens={menu} />;
};

export default Header;
