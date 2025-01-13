import { Outlet } from 'react-router-dom';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
