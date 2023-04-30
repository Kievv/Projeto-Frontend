import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Ainda n tem</p>
      </footer>
    </>
  );
};

export default Layout;
