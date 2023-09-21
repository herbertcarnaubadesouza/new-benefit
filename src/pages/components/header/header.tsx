import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logoClara.svg";

import { useEffect, useState } from "react";

const Header = () => {
  const [link, setLink] = useState<string | null>(null);

  // Monitorar mudanças no localStorage
  useEffect(() => {
    const currentLink = localStorage.getItem("link");
    if (currentLink) {
      setLink(currentLink);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const linkValue = localStorage.getItem("link");
    if (linkValue) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const linkValue = localStorage.getItem("link");
  const validLink = linkValue ? linkValue : "/";

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
            Faça parte
          </a>
          <a id="item" href="#contato">
            Contato
          </a>
          {isLoggedIn ? (
            <p id="item" onClick={handleLogout}>
              Fazer logout
            </p>
          ) : (
            <Link href="/loginTrue">
              <p id="item">Fazer login</p>
            </Link>
          )}
          {isLoggedIn ? (
            <Link href={validLink}>
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
