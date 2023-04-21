import React from "react";
import Image from "next/image";
import Notebook from "../../../../public/notebook.png";
import Logo from "../../../../public/silium.png";

const Cashback = () => {
  return (
    <section>
      <div className="baixe">
        <div className="container__descricao">
          <h2> Sistema de cashback</h2>
          <p>Compre e ganhe parte do seu dinheiro de volta com pontos Silium</p>
        </div>
        <div className="cashback__imagem">
          <Image src={Notebook} className="notebook" alt="Notebook" />
          <Image src={Logo} className="silium" alt="Logo da silium" />
        </div>
      </div>
    </section>
  );
};
export default Cashback;
