import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import bootstrap from '../img/bootstrap.png';
import bulma from '../img/bulma.png';
import css from '../img/css.png';
import express from '../img/express.png';
import git from '../img/git.png';
import heroku from '../img/heroku.png';
import html from '../img/html.png';
import js from '../img/javascript.png';
import jest from '../img/jest.png';
import linux from '../img/linux.png';
import mocha from '../img/mocha.png';
import mongodb from '../img/mongodb.png';
import mysql from '../img/mysql.png';
import node from '../img/node.png';
import python from '../img/python.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import rtl from '../img/rtl.png';
import '../styles/Global.css';

function Skills() {

  useEffect(() => {
    Aos.init({duration: 1700});
  }, [])

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Some learned technologies</span>
      <div className="skills__container container grid">
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="10" src={ react } alt="react" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="10" src={ js } alt="javascript" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="10" src={ html } alt="html" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="70" src={ css } alt="css" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="70" src={ git } alt="git" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="70"  src={ linux } alt="linux" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="125"  src={ redux } alt="redux" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="125"  src={ rtl } alt="rtl" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="125"  src={ jest } alt="jest" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="180"  src={ bootstrap } alt="react" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="180"  src={ bulma } alt="react" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="180"  src={ node } alt="node" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="185"  src={ mysql } alt="mysql" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="185"  src={ mongodb } alt="mongodb" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="185"  src={ express } alt="express" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="190"  src={ mocha } alt="mocha" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="190"  src={ heroku } alt="heroku" />
        </div>
        <div className="skills__img">
          <img data-aos="fade-right" data-aos-once="true" data-aos-delay="190"  src={ python } alt="python" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
