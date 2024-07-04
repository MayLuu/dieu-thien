import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/swiper3d.css";

interface Swiper3DProps {
  data: {
    image: string;
    alt: string;
  }[];
}

const Swiper3D = (props: Swiper3DProps) => {
  const { data } = props;
  return (
    <div className="swiper3d-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 1500 }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        pagination={{ el: ".swiper3d-pagination", clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>
        ))}

        <div className="swiper3d-controler">
          <div className="swiper3d-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Swiper3D;