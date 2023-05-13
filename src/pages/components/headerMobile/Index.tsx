import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../../public/logoClara.svg";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link href="/">
        <Image className="logo-benefit-header" src={Logo} alt="Logo-BeneFit" />
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a
          className="nav-item"
          href="#inicio"
          onClick={() => setIsOpen(!isOpen)}
        >
          Início
        </a>
        <a className="nav-item" href="#contato">
          Contato
        </a>
        <a className="nav-item" href="#cliente">
          Seja Cliente
        </a>
        <Link href="/login">
          <button className="Login">Fazer login</button>
        </Link>
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
