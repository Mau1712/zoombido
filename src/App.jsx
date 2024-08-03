
import './App.css'
import Nav from './Components/Nav/Nav'
import TopNav from './Components/TopNav/TopNav'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Swiper from './Components/Swiper/Swiper'
import Contact from './Components/Contact/Contact'


function App() {

  return (
    <>

      <header>
        <TopNav />
        <Nav />
      </header>

      <main>
        <article>
          <Skills />
        </article>

        <section>
          <Services />
        </section>

        <section>
          <Portfolio />
        </section>

        <section>
          <About />
        </section>

        <section>
          <Swiper />
        </section>

        <section>
          <Contact />
        </section>
      </main>

    </>
  )
}

export default App
