import React from "react";
import Image from "next/image";

// Criacao Slide

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Primeiro banner
import boaCompanhia from "../../../../public/boacompanhia.png";
import cardiogram from "../../../../public/cardiogram.png";
import metrica from "../../../../public/metrica.png";
import imgAbraco from "../../../../public/imgAbraço.png";
// Segundo banner
import logoEducacao from "../../../../public/logoEducacao.png";
import proInvesti from "../../../../public/proInvest.png";
import UniMais from "../../../../public/UniMais.png";
import terceiroAncar from "../../../../public/terceiroAncar.png";
import camColegio from "../../../../public/camColegio.png";

// Terceiro banner
import logoHouse from "../../../../public/logoHouse.png";
import brastemp from "../../../../public/brastemp.png";
import kitchen from "../../../../public/kitchen.png";
import polishop from "../../../../public/polisho.png";
import oster from "../../../../public/oster.png";

function carrosel() {
  return (
    <div className="container-carrosel">
      <div className="slide-carrosel">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
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
                  src={UniMais}
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
                  src={camColegio}
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

          {/* Segunda parte do slide carrosel  */}
          {/* Falta atualizar as informacoes e as logos  */}
          <SwiperSlide>
            <div className="carrosel-tecnologia">
              <Image className="frist-icon" src={logoHouse} alt="" />
              <h2>Tem Mais Tecnologia</h2>
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
                  alt=""
                />
                <Image className="segungo-logo-conforto" src={kitchen} alt="" />
              </div>
              <div className="carrosel-icon">
                <Image
                  className="terceiro-logo-conforto"
                  src={polishop}
                  alt=""
                />
                <Image className="quarto-logo-conforto" src={oster} alt="" />
              </div>
              <div>
                <button> ATÉ 40% DE DESCONTO </button>
              </div>
              <h4>*Consulte as condições no site.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carrosel-conforto">
              <Image className="frist-icon" src={logoHouse} alt="" />
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
                  alt=""
                />
                <Image className="segungo-logo-conforto" src={kitchen} alt="" />
              </div>
              <div className="carrosel-icon">
                <Image
                  className="terceiro-logo-conforto"
                  src={polishop}
                  alt=""
                />
                <Image className="quarto-logo-conforto" src={oster} alt="" />
              </div>
              <div>
                <button> ATÉ 40% DE DESCONTO </button>
              </div>
              <h4>*Consulte as condições no site.</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default carrosel;
