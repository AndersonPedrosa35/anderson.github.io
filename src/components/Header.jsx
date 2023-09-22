import React, { useState } from 'react';
import '../styles/Global.css';

function Header() {
  const [menu, setMenu] = useState(null);
  
  function navShowClick() {
    setMenu(!menu);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#anderson" className="nav__logo">Anderson</a>
        <div className={ menu ? "nav__menu show-menu" : "nav__menu" } id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={ navShowClick }>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={ navShowClick }>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={ navShowClick }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link" onClick={ navShowClick }>
                <i className="uil uil-rocket nav__icon"></i> Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={ navShowClick }>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={ navShowClick }>
                <i className="uil uil-message nav__icon" /> Contact me
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={ () => navShowClick() } />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle" onClick={ () => navShowClick() }>
            <i className="uil uil-apps" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
