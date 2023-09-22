import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import network1 from '../img/network1.png';
import network2 from '../img/network2.png';
import network3 from '../img/network3.png';
import network4 from '../img/network4.png'
import "swiper/css";
import 'swiper/css/pagination';
import '../styles/Global.css';

function Testimonial() {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My network saying</span>
      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper 
            modules={[Pagination]}
            pagination={{ "dynamicBullets": true }}
            breakpoints={{ 568: { slidesPerView: 2 } }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network1 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Renan Antunes</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">" In the last project for Trybe's back-end module I was lucky enough to fall into the same group as Anderson. Every day he demonstrated not only that he had extensive knowledge of the languages we were using, but also that he was eager to meet the requirements and persistent in the face of difficulties. I can safely say that without his help the project wouldn't have turned out as well as it did. "</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network2 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">André Arnoni</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">" Anderson is a very competent and dedicated person. He knows what he's doing, works clearly and works very well as part of a team. Success. "</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network3 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Carlos Margato</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">" I worked with Anderson on the Delivery App project, where I was amazed by his ability, speed and logical thinking in React.js. We were working together on the front end of the application and with his communicative and assertive skills we were able to develop the entire user interface so that the application was 100% functional. He was always helpful and his ability to quickly read his colleague's reasoning/code made it easy to solve any bugs. "</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={ network4 } alt="network" className="testimonial__img" />
                    <div>
                      <h3 className="testimonial__name">Matheus Schreiner</h3>
                      <span className="testimonial__classmate">LinkedIn network/Classmate</span>
                    </div>
                  </div>
                </div>
              <p className="testimonial__description">" Anderson is a very dedicated, focused and quick-thinking person when it comes to understanding the problem and transcribing it into code. He is an excellent person to work with, always willing to help and to build the project in the best possible way within the code's quality standards. "</p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
