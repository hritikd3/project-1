import { ThemeProvider } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Movies from './components/Movies';
import News from './components/News';
import Subscribe from './components/Subscribe';
import Videos from './components/Videos';

const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Header />
      <Hero />
      <Movies />
      <Videos />
      <News />
      <Subscribe />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
