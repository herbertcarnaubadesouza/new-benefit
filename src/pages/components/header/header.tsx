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

  // CANCELAR PAGAMENTO

  // Obter o paymentId do localStorage ou de onde você armazenou
  const paymentId =
    typeof window !== "undefined"
      ? localStorage.getItem("paymentId") || ""
      : "";

  // if (!paymentId) {
  //   console.log("Payment ID não encontrado.");
  //   return;
  // }

  const cancelSubscription = () => {
    const userConfirmed = window.confirm(
      "Tem certeza que deseja cancelar o plano?"
    );

    if (userConfirmed) {
      // O código de cancelamento do plano que você já tem vai aqui
      const paymentId =
        typeof window !== "undefined"
          ? localStorage.getItem("paymentId") || ""
          : "";

      if (!paymentId) {
        console.error("Payment ID não encontrado.");
        return;
      }

      fetch("/api/cancel_payment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erro ao cancelar o pagamento.");
          }
          return res.json();
        })
        .then((data) => {
          alert(`Assinatura cancelada com sucesso: ${data.message}`);
        })
        .catch((error) => {
          alert(`Erro ao cancelar a assinatura: ${error}`);
        });
    }
  };

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

          {isLoggedIn ? (
            <a id="item" href="#contato">
              Contato
            </a>
          ) : (
            <a id="item" href="#cliente">
              Faça parte
            </a>
          )}
          {isLoggedIn ? (
            <p id="item" onClick={cancelSubscription}>
              Cancelar plano
            </p>
          ) : (
            <a id="item" href="#contato">
              Contato
            </a>
          )}
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
      </div>
    </section>
  );
};

export default Header;
