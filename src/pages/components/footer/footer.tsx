import React from "react";
import Image from "next/image";
import LogoEscura from "../../../../public/logoEscura 2.png";
import Wpp from "../../../../public/Whatszaap.png";
import Email from "../../../../public/Email.png";
import Duvidas from "../../../../public/Duvidas.png";
import Celular from "../../../../public/Vector.png";

function footer() {
  return (
    <div className="Main-Footer">
      <div className="Logo-Footer">
        <Image className="Logo-Escura" src={LogoEscura} alt="Logo-Escura" />
        <p className="Slogan">
          Os Melhores benefícios <br />
          na palma da mão
        </p>
      </div>
      <div className="Contato-Footer">
        <h2>Contato</h2>
        <div className="Contato-FooterIcon">
          <Image className="Icon-Footer" src={Celular} alt="Celular" />
          <h3>(61) 99354-6881</h3>

          <Image className="Icon-Footer" src={Wpp} alt="Whatszaap" />
          <h3>(61) 99354-6881</h3>

          <Image className="Icon-Footer" src={Email} alt="Email" />
          <h3>atendimento@temmaisvantagens.com.br</h3>

          <Image className="Icon-Footer" src={Duvidas} alt="Duvidas" />
          <h3>Como Funciona</h3>
        </div>
      </div>
    </div>
  );
}

export default footer;
