import { ThemeProvider } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
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
