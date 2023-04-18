import React from "react";

import Image from "next/image";
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
    <div className="Carrosel">
      <div className="carrosel-saude">
        <Image className="frist-icon" src={cardiogram} alt="" />
        <h2>Tem Mais Saúde</h2>
        <p>
          Emita sua carteirinha digital e <br /> aproveite a maior rede de{" "}
          <br /> drogarias e farmácias por todo <br /> o Brasil.{" "}
        </p>
        <div className="carrosel-icon">
          <Image className="primeiro-logo" src={imgAbraco} alt="" />
          <Image className="segungo-logo" src={boaCompanhia} alt="" />
        </div>
        <div className="carrosel-icon">
          <Image className="terceiro-logo" src={metrica} alt="" />
        </div>
        <div>
          <button> ATÉ 45% DE DESCONTO </button>
        </div>
        <h4>*Consulte as condições no site.</h4>
      </div>
      <div className="carrosel-educacao">
        <Image className="frist-icon" src={logoEducacao} alt="" />
        <h2>Tem mais Educação</h2>
        <p>
          Encontre creches, escolas,
          <br /> faculdade ou pós-graduação
          <br /> para você e seus dependentes.
          <br /> Seus filhos merecem o melhor!
        </p>
        <div className="carrosel-icon">
          <Image className="primeiro-logo-Educacao" src={UniMais} alt="" />
          <Image className="segungo-logo-Educacao" src={terceiroAncar} alt="" />
        </div>
        <div className="carrosel-icon">
          <Image className="terceiro-logo-Educacao" src={camColegio} alt="" />
          <Image className="quarto-logo-Educacao" src={proInvesti} alt="" />
        </div>
        <div>
          <button> ATÉ 350,00 DE DESCONTO </button>
        </div>
        <h4>*Consulte as condições no site.</h4>
      </div>
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
          <Image className="primeiro-logo-conforto" src={brastemp} alt="" />
          <Image className="segungo-logo-conforto" src={kitchen} alt="" />
        </div>
        <div className="carrosel-icon">
          <Image className="terceiro-logo-conforto" src={polishop} alt="" />
          <Image className="quarto-logo-conforto" src={oster} alt="" />
        </div>
        <div>
          <button> ATÉ 40% DE DESCONTO </button>
        </div>
        <h4>*Consulte as condições no site.</h4>
      </div>
    </div>
  );
}

export default carrosel;
