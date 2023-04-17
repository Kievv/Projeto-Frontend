import companyLogo from '../assets/Remedie-1.png';

const Navbar = (props) => {
  return (
    <div className="container" style={styles.container}>
      <nav className="nav" style={styles.nav}>
        <a href="#" className="nav_brand" style={styles.logo}>
          <img src={companyLogo} alt="Remedie logo" style={styles.imageLogo}></img>
        </a>

        <ul className="nav_links" style={styles.ul}>
          {props.itens.map((item) => (
            <li key={item} style={styles.li} className="nav_item">
              <a href={'#' + item} style={styles.links}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '5em',
    display: 'flex',
    backgroundColor: 'white',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    width: 'inherit',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ul: {
    listStyleType: 'none',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
    margin: 0,
    padding: 0,
    borderRight: '0.5px solid black',
  },
  li: {
    width: '25%',
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: '0.5px solid black',
    fontSize: '1em',
  },
  links: {
    height: '100%',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: 'inherit',
  },
};

export default Navbar;
