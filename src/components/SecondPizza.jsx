import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { pizzas } from "../data/data.js";
import arrow from "../images/arrowUp.png";

import "swiper/css";

import "./styles/second.scss";

const SecondPizza = ({ setGetSecondOrder }) => {
  return (
    <div className="wrapSlider2">
      <Swiper
        className="MySider2"
        modules={[Navigation]}
        direction={"vertical"}
        loop
        slidesPerView={1}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onSlideChange={(swiper) => setGetSecondOrder(pizzas[swiper.realIndex])}
      >
        {pizzas.map((item, index) => (
          <SwiperSlide className="myslide2" key={item.id}>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.size}</p>
            <p className="first-price">{item.price} руб.</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="innerButtons">
        <div className="prev">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="next">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default SecondPizza;
