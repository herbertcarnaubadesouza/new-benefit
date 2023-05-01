import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";

const Header = () => {
  return (
    <div className="container-header">
      <div className="header" id="inicio">
        <div>
          <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
        </div>
        <div className="links-header">
          <a href="#inicio">Início</a>
          <a href="#">Seja Cliente</a>
          <a href="#">Contato</a>
          <button className="Login">Fazer login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
