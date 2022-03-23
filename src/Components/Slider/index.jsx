import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

let sliderdata = [
  {
    id: 1,
    imglink: "/images/stop1_1.jpg",
    alt: "Today, Polhill Park",
    caption:
      "Today, Polhill Park is where Bank Square used to be Image: Frank Ritter, Frank Ritter Photography, February 28, 2022",
  },
  {
    id: 2,
    imglink: "/images/stop1_2.jpg",
    alt: "Five Corners of Bank Square",
    caption:
      "Postcard of the “Five Corners” of Bank Square Image: Beacon Historical Society, date?",
  },
  {
    id: 3,
    imglink: "/images/stop1_3.jpg",
    alt: "Bank Square with Fishkill National Bank",
    caption:
      "Postcard from 1892 of Bank Square with the Fishkill National Bank on left Image: Beacon Historical Society",
  },
  {
    id: 4,
    imglink: "/images/stop1_4.jpg",
    alt: "Postcard of Bank Square",
    caption: "Postcard of Bank Square c. 1913 Image: Beacon Historical Society",
  },
  {
    id: 5,
    imglink: "/images/stop1_5.jpg",
    alt: "Beskin's Department Store and Snidaman's Tailor Shop",
    caption:
      "Beskin's Department Store and Snidaman's Tailor Shop on Bank Square c. 1906 Image: Beacon Historical Society",
  },
];

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={({ clickable: true }, { dynamicBullets: true })}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderdata.map((slider) => (
        <SwiperSlide key={slider.id} className="slide">
          <div className="cuisine-item text-center">
            <img src={slider.imglink} className="mb-2" alt={slider.alt} />
            <p>{slider.caption}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Slider };
