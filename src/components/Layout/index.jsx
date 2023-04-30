import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright 2023.</p>
      </footer>
    </>
  );
};

export default Layout;
