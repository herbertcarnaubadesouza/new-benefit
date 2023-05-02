import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";

const HeaderLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar" id="headerLogin">
      <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#inicio" onClick={() => setIsOpen(!isOpen)}>
          Início
        </a>
        <a href="#cliente">Seja Cliente</a>
        <a href="#">Contato</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default HeaderLogin;
