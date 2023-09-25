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

  let linkValue = "/";
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      linkValue = localStorage.getItem("link") || "/";
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }
  const validLink = linkValue;

  // LOGIN VIA API

  const nomeFromStorage =
    typeof window !== "undefined"
      ? localStorage.getItem("nomeCliente") || ""
      : "";
  const cpfFromStorage =
    typeof window !== "undefined" ? localStorage.getItem("cpf") || "" : "";
  const telefoneFromStorage =
    typeof window !== "undefined" ? localStorage.getItem("Telefone") || "" : "";
  const emailFromStorage =
    typeof window !== "undefined" ? localStorage.getItem("email") || "" : "";
  const senhaFromStorage =
    typeof window !== "undefined" ? localStorage.getItem("senha") || "" : "";

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/token", {
        method: "POST",
      });

      const data = await response.json();
      const accessToken = data.accessToken;

      const encryptedNome = await encryptData(nomeFromStorage);
      const encryptedCpf = await encryptData(cpfFromStorage);
      const encryptedEmail = await encryptData(emailFromStorage);
      const encryptedTelefone = await encryptData(telefoneFromStorage);

      await loginApi(
        accessToken,
        encryptedNome,
        encryptedCpf,
        encryptedEmail,
        encryptedTelefone
      );
    } catch (error) {
      console.error("Erro ao obter o access token:", error);
    }
  }

  async function encryptData(data: string) {
    try {
      const response = await fetch("/api/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const { encrypted } = await response.json();

      return encrypted;
    } catch (error) {
      console.error("Erro ao encriptar os dados:", error);
    }
  }

  async function loginApi(
    accessToken: string,
    nome: string,
    cpf: string,
    email: string,
    telefone: string
  ) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken,
          nome,
          cpf,
          email,
          telefone,
        }),
      });

      const data = await response.json();

      console.log(data);
      console.log(data.link);

      if (!response.ok) {
        alert(data.error);
        return;
      }

      if (data && data.link && data.link.dado && data.link.dado.link) {
        const url = data.link.dado.link;

        window.location.href = url;
      } else {
        console.log(
          "URL de redirecionamento não encontrada na resposta do servidor"
        );
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  }

  return (
    <div className="Navbar">
      <Link href="/">
        <Image className="logo-benefit-header" src={Logo} alt="Logo-BeneFit" />
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link href="/">
          <p className="nav-item" onClick={() => setIsOpen(false)}>
            Início
          </p>
        </Link>
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
          <button className="Login" onClick={handleSubmit}>
            Acessar clube
          </button>
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
