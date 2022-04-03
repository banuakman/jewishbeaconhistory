import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider({ sliderdata }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper-responsive"
    >
      {sliderdata.map((slider) => (
        <SwiperSlide key={slider.id} className="slide">
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
