import React from 'react';
import '../styles/Global.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Keep in touch</span>
      <div className="contact__container container grid">
        <div className="contact__information">
          <i className="uil uil-envelope contact__icon" />
          <div>
            <h3 className="contact__title">Email</h3>
            <span className="contact__subtitle">anderson.loiro222@gmail.com</span>
          </div>
        </div>
        <div className="contact__information">
          <i class="uil uil-comment-dots contact__icon" />
          <div>
            <h3 className="contact__title">Chat me</h3>
            <span className="contact__subtitle">(at LinkedIn or Instagram)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
