import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";
import Link from "next/link";

import { useState, useEffect } from 'react';


const Header = () => {
  const [link, setLink] = useState<string | null>(null);

  // Monitorar mudanças no localStorage
  useEffect(() => {
    const currentLink = localStorage.getItem('link');
    if (currentLink) {
      setLink(currentLink);
    }
  }, []);

  return (
    <section className="container-header">
      <div className="content-header-desktop">
        <Link href="/">
          <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
        </Link>
        <div className="nav-items-desktop">
          <a id="item" href="#inicio">
            Início
          </a>
          <a id="item" href="#cliente">
            Seja Cliente
          </a>
          <a id="item" href="#contato">
            Contato
          </a>
          <Link href="/loginTrue">

            <p
              id="item"
            >
              Fazer login
            </p>
          </Link>
          {link ? (
            <Link href={link}>
              <button className="Login">Acessar clube</button>
            </Link>
          ) : (
            <Link href="/Checkout">
              <button className="Login">Obter acesso</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
