import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className={'container'}>
      <nav className={'nav'}>
        <Link className={'links'} to="/">
          REMEDIE
        </Link>
        <ul className={'ul'}>
          <div className={'botaoNavbar'}>
            <li className={'li'}>
              <Link to="/">Home</Link>
            </li>
          </div>

          <div className={'botaoNavbar'}>
            <li className={'li'}>
              <Link to="/consultas">Consultas</Link>
            </li>
          </div>

          <div className={'botaoNavbar'}>
            <li className={'li'}>
              <Link to="/exames">Exames</Link>
            </li>
          </div>

          <div className={'botaoNavbar'}>
            <li className={'li'}>
              <Link to="/remedios">Remédios</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
