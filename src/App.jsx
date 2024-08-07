import { useState, useEffect } from 'react';
import Nav from './Components/Nav/Nav'
import TopNav from './Components/TopNav/TopNav'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Swiper from './Components/Swiper/Swiper'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import arrowTopIcon from "./assets/Images/arrowTopIcon.png"

import './App.css'

function App() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <header>
        <TopNav />
        <Nav />
      </header>

      <main>
        <article id="experience">
          <Skills />
        </article>

        <section id="services">
          <Services />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="teams">
          <Swiper />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <button className={`btntop ${showButton ? 'show' : 'hide'}`} onClick={scrollToTop}>
          <img className='arrowTopIcon' src={arrowTopIcon} alt="zoombido" />
        </button>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
