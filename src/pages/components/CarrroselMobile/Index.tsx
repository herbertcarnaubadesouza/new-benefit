import Image from "next/image";

// Criacao Slide

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// Primeiro banner
import boaCompanhia from "../../../../public/boacompanhia.png";
import cardiogram from "../../../../public/cardiogram.png";
import imgAbraco from "../../../../public/imgAbraço.png";
import metrica from "../../../../public/metrica.png";
// Segundo banner
import UniMaisImage from "/public/UniMais.png";
import camColegioImage from "/public/camColegio.png";
import logoEducacao from "../../../../public/logoEducacao.png";
import proInvesti from "../../../../public/proInvest.png";
import terceiroAncar from "../../../../public/terceiroAncar.png";

// Terceiro banner
import brastemp from "../../../../public/brastemp.png";
import kitchen from "../../../../public/kitchen.png";
import logoHouse from "../../../../public/logoHouse.png";
import oster from "../../../../public/oster.png";
import polishop from "../../../../public/polisho.png";

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
            <div className="carrosel-saude">
              <Image
                className="frist-icon"
                src={cardiogram}
                alt="logo-cardiogram"
              />
              <h2>Tem Mais Saúde</h2>
              <p>
                Emita sua carteirinha digital e <br /> aproveite a maior rede de
                <br /> drogarias e farmácias por todo <br /> o Brasil.
              </p>
              <div className="carrosel-icon">
                <Image
                  className="primeiro-logo"
                  src={imgAbraco}
                  alt="logo-Abraco"
                />
                <Image
                  className="segungo-logo"
                  src={boaCompanhia}
                  alt="logo-boaCompanhia"
                />
              </div>
              <div className="carrosel-icon">
                <Image
                  className="terceiro-logo"
                  src={metrica}
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
              <Image
                className="frist-icon"
                src={logoEducacao}
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
                <Image
                  className="primeiro-logo-Educacao"
                  src={UniMaisImage}
                  alt="logo-UniMais"
                />
                <Image
                  className="segungo-logo-Educacao"
                  src={terceiroAncar}
                  alt="logo-terceiroAncar"
                />
              </div>
              <div className="carrosel-icon">
                <Image
                  className="terceiro-logo-Educacao"
                  src={camColegioImage}
                  alt="logo-camColegio"
                />
                <Image
                  className="quarto-logo-Educacao"
                  src={proInvesti}
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
              <Image className="frist-icon" src={logoHouse} alt="logo-House" />
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
                  src={brastemp}
                  alt="logo-brastemp"
                />
                <Image
                  className="segungo-logo-conforto"
                  src={kitchen}
                  alt="logo-kitchen"
                />
              </div>
              <div className="carrosel-icon">
                <Image
                  className="terceiro-logo-conforto"
                  src={polishop}
                  alt="logo-polishop"
                />
                <Image
                  className="quarto-logo-conforto"
                  src={oster}
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
