import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/HI-TECH - Copy.png";
import profilePic2 from "../../img/BARUNESWAR.png";
import profilePic3 from "../../img/MAINDA.png";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "(10-12th class) was done in Hi-tech +2 Science College,Kuakhia,Jajpur,Odisha,now i am pursuing my b.tech degree under the domain of cse in Giet university .",
    },
    {
      img: profilePic2,
      review:
        "(7-10th class) was done in Baruneswar High School , Arei,Jajpur,Odisha.",
    },
    {
      img: profilePic3,
      review:
        " (0-7 class)  From the starting I was learn in Mainda UGME School,Mainda,Lenkasahi,Jajpur,Odiha ",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My </span>
        <span>Education Background</span>
        <span>  Details</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
