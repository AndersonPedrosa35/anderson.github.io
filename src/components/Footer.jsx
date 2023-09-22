import React from 'react';
import '../styles/Global.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title" id="anderson">Anderson</h1>
            <span className="footer__subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact me</a>
            </li>
          </ul>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/anderson-pedrosa-carlos/" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-linkedin-alt" />
            </a>
            <a href="https://github.com/AndersonPedrosa35" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-github-alt" />
            </a>
          </div>
        </div>
        <p className="footer__copy">Anderson Pedrosa &#169; - 2023. All rigths reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
