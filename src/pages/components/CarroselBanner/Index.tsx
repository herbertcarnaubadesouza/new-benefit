import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../../../public/banner01.png";
import Banner2 from "../../../../public/banner02.png";
import Banner3 from "../../../../public/banner03.png";
import Image from "next/image";

function CarroselBanner() {
  return (
    <div className="container-carroselBanner">
      <div className="main-carroselBanner">
        <Swiper
          grabCursor={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          loopedSlides={5}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="div-slide">
              <a href="#">
                <Image
                  className="img-slide"
                  src={Banner1}
                  alt="Banner-BeneFit"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-slide">
              <a href="#">
                <Image className="banner1" src={Banner2} alt="Banner-BeneFit" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-slide">
              <a href="#">
                <Image className="banner1" src={Banner3} alt="Banner-BeneFit" />
              </a>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default CarroselBanner;
