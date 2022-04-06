import React, { useEffect, useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLocation } from "react-router-dom";

function Slider({ sliderdata }) {

  
  const [swiper,setSwiper] = useState(null)
  
  let location = useLocation();
  useEffect(() => {
    if(swiper)
      swiper.slideTo(0)
  }, [location]);


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      onSwiper={(swiper) => setSwiper(swiper)}
      // scrollbar={{ draggable: true }}
      className="swiper-responsive"
    >
      {sliderdata.map((slider,index) => (
        <SwiperSlide key={index} className="slide">
          <div className="cuisine-item text-center">
            <img src={slider.imglink} alt={slider.alt} />
            <p className="swipercaption">{slider.caption}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Slider };
