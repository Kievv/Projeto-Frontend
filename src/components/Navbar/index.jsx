import companyLogo from '../../assets/Remedie-1.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className="container">
      <nav className="nav">
        <a href="#" className="logo">
          <img src={companyLogo} alt="Remedie logo" className="image-Logo"></img>
        </a>

        <ul>
          {props.itens.map((item) => (
            <li key={item}>
              <NavLink to={'/' + item} className="links">
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
