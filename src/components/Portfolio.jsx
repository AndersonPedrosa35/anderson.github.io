import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import MiniEcommerce from '../projects/MiniEcommerce';
import GrandRecipe from '../projects/GrandRecipe';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Global.css';

function Portfolio() {

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            cssMode={true}
            navigation
            pagination
            className="mySwiper"
          >

            <SwiperSlide>
              <MiniEcommerce />
            </SwiperSlide>

            <SwiperSlide>
              <GrandRecipe />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
