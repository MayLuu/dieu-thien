import "@/styles/swiper3d.css";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
        // autoplay={{ delay: 2000 }}
        autoplay={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        pagination={{
          el: ".swiper3d-pagination",
          // type: 'bullets',
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        slidesPerGroup={1}
        spaceBetween={-450}


      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.image} alt={item.alt} width={0} height={0} />
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
