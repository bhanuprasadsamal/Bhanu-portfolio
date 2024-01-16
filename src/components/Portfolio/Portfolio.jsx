import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Healthweb from "../../img/health-website.png";
import Healthapp from "../../img/health-app.png";
import Food from "../../img/food-delivery.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Made By Me</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide onClick={() => window.location.href = "https://docs.google.com/presentation/d/1c7g9lxzPeDnQ_JXbXyCdhVlrkn0cs1A3/edit?usp=sharing&ouid=116109311538678054272&rtpof=true&sd=true"}>
          <img src={Healthweb} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => window.location.href = "https://docs.google.com/presentation/d/1_RXxaAB4p-IbZH7wb8rbB5tzMBxo7Yy3/edit?usp=sharing&ouid=116109311538678054272&rtpof=true&sd=true"}>
          <img src={Healthapp} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => window.location.href = "https://docs.google.com/presentation/d/1jBwvJH7ZRDSSUodeV3k8iOUZBlrlU3tv/edit?usp=sharing&ouid=116109311538678054272&rtpof=true&sd=true"}>
       
          <img src={Food} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
