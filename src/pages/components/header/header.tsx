import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";

const Header = () => {
  return (
    <section className="container-header">
      <div className="content-header-desktop">
        <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
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
        </div>
      </div>
    </section>
  );
};

export default Header;
