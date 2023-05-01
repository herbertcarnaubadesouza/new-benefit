import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#inicio" onClick={() => setIsOpen(!isOpen)}>
          Início
        </a>
        <a href="#cliente">Seja Cliente</a>
        <a href="#">Contato</a>
        <button className="Login">Fazer login</button>
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

export default HeaderMobile;
