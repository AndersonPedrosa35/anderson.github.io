import React from 'react';
import foto1 from '../img/foto1.png';
import '../styles/Global.css';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Who am I?</h2>
      <span className="section__subtitle">Just a little bit about me...</span>
      <div className="about__container container grid">
        <img className="about__img" src={ foto1 } alt="Anderson" />
        <div className="about__data">
          <p className="about__description">I'm from Brazil and currently living in Piracicaba-SP city.</p>
          <p className="about__description">Technologist in System Analysis/Development and graduated in Web Development at Trybe school. Also graduated and post-graduated in Business Administration. I strongly believe that both professions, technology and business, are able to converge perfectly.</p>
          <p className="about__description about__description-last">Passionate for technology, learn new things (yes, I'm a "learner"), sports and music.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
