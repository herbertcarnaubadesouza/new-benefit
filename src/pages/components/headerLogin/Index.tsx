import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../../public/logoClara.svg";

const HeaderLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar" id="headerLogin">
      <Link href="/">
        <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
      </Link>
      <div id="itemsDrawer" className={`nav-items ${isOpen && "open"}`}>
        <a id="item" href="#inicio" onClick={() => setIsOpen(!isOpen)}>
          Início
        </a>
        <a id="item" href="#cliente">
          Faça parte
        </a>
        <a id="item" href="#footer">
          Contato
        </a>
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
