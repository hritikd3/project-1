import { useLayoutEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
