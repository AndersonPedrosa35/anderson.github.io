import React from 'react';
import About from '../components/About';
import Blob from '../components/Blob';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';
import foto1 from '../img/foto1.png';
import '../styles/Global.css';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="https://www.linkedin.com/in/anderson-pedrosa-carlos/" target="_blank" rel="noreferrer" className="home__social-icon">
                  <i className="uil uil-linkedin-alt" />
                </a>
                <a href="https://github.com/AndersonPedrosa35" target="_blank" rel="noreferrer" className="home__social-icon">
                  <i className="uil uil-github-alt" />
                </a>
              </div>
              <Blob foto1={ foto1 } />
              <div className="home__data">
                <h1 className="home__title">Hi, I am Anderson!</h1>
                <h3 className="home__subtitle">Full Stack Developer</h3>
                <a href="#contact" className="button button--flex">
                  Contact me<i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse" />
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow" />
              </a>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home;
