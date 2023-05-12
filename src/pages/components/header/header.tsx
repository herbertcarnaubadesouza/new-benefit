import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";
import Link from "next/link";

const Header = () => {
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
          <a id="item" href="#">
            Contato
          </a>
          <Link href="/login">
            <button className="Login">Fazer login</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
