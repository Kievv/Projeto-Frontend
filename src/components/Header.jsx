import Navbar from './Navbar';

const menu = ['HOME', 'REMÉDIOS', 'CONSULTAS', 'EXAMES'];

const Header = () => {
  return <Navbar itens={menu} />;
};

export default Header;
