// import Hero from '../components/Hero';
import Videos from '../components/Videos';
import Subscribe from '../components/Subscribe';
import MoviesList from '../components/MoviesList';
import NewsList from '../components/NewsList';
import { useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import Intro from '../components/Intro';

const Home = () => {
  const [show, setShow] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setShow(true);
    } else if (scrolled <= 1000) {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      {/* <Hero /> */}
      <Intro />
      <MoviesList />
      <Videos />
      <NewsList />
      <Subscribe />
      {show && (
        <button className='top' onClick={scrollToTop}>
          <BsArrowUpSquareFill />
        </button>
      )}
    </div>
  );
};
export default Home;
