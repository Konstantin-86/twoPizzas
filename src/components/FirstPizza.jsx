import { useRef, useState } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { pizzas } from "../data/data.js";
import arrow from "../images/arrowUp.png";

import "swiper/css";

import "./styles/first.scss";

const FirstPizza = ({ setGetFirstOrder }) => {
  /* const handleSlideChange = (swiper) => {
    setGetFirstOrder(pizzas[swiper.realIndex]);
  }; */
  return (
    <div className="wrapSlider1">
      <Swiper
        className="MySider1"
        modules={[Navigation]}
        direction={"vertical"}
        loop
        slidesPerView={1}
        navigation={{
          prevEl: ".slider1-prev-button",
          nextEl: ".slider1-next-button",
        }}
        onSlideChange={(swiper) => setGetFirstOrder(pizzas[swiper.realIndex])}
      >
        {pizzas.map((item) => (
          <SwiperSlide className="myslide1" key={item.id}>
            <span className="hidden">{item.id}</span>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.size}</p>
            <p className="first-price">{item.price} руб.</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="innerButtons">
        <div className="slider1-prev-button">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="slider1-next-button">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default FirstPizza;
