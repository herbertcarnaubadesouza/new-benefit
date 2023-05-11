import Image from "next/image";

// Criacao Slid

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// Primeiro banner

function CarrroselMobile() {
  return (
    <div className="container-carrosel-mobile" id="inicio">
      <div className="slide-carrosel">
        <Swiper
          grabCursor={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
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
            <div className="carrosel-saude">
              <img
                className="frist-icon"
                src="./cardiogram.png"
                alt="logo-cardiogram"
              />
              <h2>Tem Mais Saúde</h2>
              <p>
                Emita sua carteirinha digital e <br /> aproveite a maior rede de
                <br /> drogarias e farmácias por todo <br /> o Brasil.
              </p>
              <div className="carrosel-icon">
                <img
                  className="primeiro-logo"
                  src="./imgAbraço.png"
                  alt="logo-Abraco"
                />
                <img
                  className="segungo-logo"
                  src="./boacompanhia.png"
                  alt="logo-boaCompanhia"
                />
              </div>
              <div className="carrosel-icon">
                <img
                  className="terceiro-logo"
                  src="./metrica.png"
                  alt="logo-metrica"
                />
              </div>
              <div>
                <button> ATÉ 45% DE DESCONTO </button>
              </div>
              <h4>*Consulte as condições no site.</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="carrosel-educacao">
              <img
                className="frist-icon"
                src="./logoEducacao.png"
                alt="logo-Educacao"
              />
              <h2>Tem mais Educação</h2>
              <p>
                Encontre creches, escolas,
                <br /> faculdade ou pós-graduação
                <br /> para você e seus dependentes.
                <br /> Seus filhos merecem o melhor!
              </p>
              <div className="carrosel-icon">
                <img
                  className="primeiro-logo-Educacao"
                  src="./UniMais.png"
                  alt="logo-UniMais"
                />
                <img
                  className="segungo-logo-Educacao"
                  src="./terceiroAncar.png"
                  alt="logo-terceiroAncar"
                />
              </div>
              <div className="carrosel-icon">
                <img
                  className="terceiro-logo-Educacao"
                  src="./camColegio.png"
                  alt="logo-camColegio"
                />
                <img
                  className="quarto-logo-Educacao"
                  src="./proInvest.png"
                  alt="logo-proInvesti"
                />
              </div>
              <div>
                <button> ATÉ 350,00 DE DESCONTO </button>
              </div>
              <h4>*Consulte as condições no site.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carrosel-conforto">
              <img className="frist-icon" src="./logoHouse.png" alt="logo-House" />
              <h2>Tem Mais Conforto</h2>
              <p>
                Na hora de renova sua casa,
                <br /> aqui você encontra os
                <br />
                melhores preços e opções!
              </p>
              <div className="carrosel-icon">
                <Image
                  className="primeiro-logo-conforto"
                  src="./brastemp.png"
                  alt="logo-brastemp"
                />
                <Image
                  className="segungo-logo-conforto"
                  src="./kitchen.png"
                  alt="logo-kitchen"
                />
              </div>
              <div className="carrosel-icon">
                <Image
                  className="terceiro-logo-conforto"
                  src="./polisho.png"
                  alt="logo-polishop"
                />
                <Image
                  className="quarto-logo-conforto"
                  src="./oster.png"
                  alt="logo-oster"
                />
              </div>
              <div>
                <button> ATÉ 40% DE DESCONTO </button>
              </div>
              <h4>*Consulte as condições no site.</h4>
            </div>
          </SwiperSlide>
          {/* Paginação*/}
          <div className="swiper-pagination"></div>
          {/* Paginação*/}
        </Swiper>
      </div>
    </div>
  );
}

export default CarrroselMobile;
