import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../../../public/logoClara.svg";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="Navbar">
      <Link href="/">
        <Image className="logo-benefit-header" src={Logo} alt="Logo-BeneFit" />
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a className="nav-item" href="#inicio" onClick={() => setIsOpen(false)}>
          Início
        </a>
        <a
          className="nav-item"
          href="#contato"
          onClick={() => setIsOpen(false)}
        >
          Contato
        </a>
        <a
          className="nav-item"
          href="#cliente"
          onClick={() => setIsOpen(false)}
        >
          Faça parte
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
