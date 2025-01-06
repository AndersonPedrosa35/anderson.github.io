import React from 'react';
import foto1 from '../img/foto1.jpg';
import '../styles/Global.css';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Who am I?</h2>
      <span className="section__subtitle">Just a little bit about me...</span>
      <div className="about__container container grid">
        <img className="about__img" src={ foto1 } alt="Anderson" />
        <div className="about__data">
          <p className="about__description">I'm from Brazil and currently living in SP city.</p>
          <p className="about__description">Technologist in System Analysis/Development and graduated in Web Development at Trybe school. Development is my love, that started in 2012, why buy my first computer. For me, to see interactions all in computer, it was same magic, I consider myself magical. I am Middle Full Stack developer at Deco.cx, I already worked in Decathlon, Trybe and BeightOne.</p>
          <p className="about__description about__description-last">Passionate for technology, learn new things (yes, I'm a "learner"), sports and music.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
