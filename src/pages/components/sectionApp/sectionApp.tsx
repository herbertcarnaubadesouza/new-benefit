import React from "react";
import Image from "next/image";
import Apple from "../../../../public/apple.jpg";
import Google from "../../../../public/google.jpg";
import Celular from "../../../../public/celular.png";

const Baixe = () => {
  return (
    <section>
      <div className="baixe">
        <div className="container__descricao">
          <h2> Baixe também o nosso App</h2>
          <p>e tenha todos os benefícios na palma da mão</p>
          <div>
            <Image src={Apple} className="botao" alt="apple" />
            <Image src={Google} className="botao" alt="google" />
          </div>
        </div>
        <div className="container__imagem">
          <Image src={Celular} className="celular" alt="Celular" />
        </div>
      </div>
    </section>
  );
};
export default Baixe;
