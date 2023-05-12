import axios from "axios";
import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logoClara.svg";
import Password from "../../components/InputPassword/Index";

function CadastroLogin() {
  // REQUISIÇÃO BLOQUEADA POR ERRO DE POLÍTICA DE CORS
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/token", {
        method: "POST",
      });

      const data = await response.json();
      const accessToken = data.dado.access_token;

      console.log(response);

      console.log("Access Token:", accessToken);

      const nome = (document.getElementById("name") as HTMLInputElement).value;
      const cpf = (document.getElementById("cpf") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const telefone = (document.getElementById("telefone") as HTMLInputElement)
        .value;

      const encryptedNome = await encryptData(nome);
      const encryptedCpf = await encryptData(cpf);
      const encryptedEmail = await encryptData(email);
      const encryptedTelefone = await encryptData(telefone);

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

      console.log(response);

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
      const response = await fetch('/api/login', {
        method: 'POST',
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

      console.log(response)

      if (response.ok) {
        const data = await response.json();
        if (data && data.link) {
          window.location.replace(data.link);
        } else {
          console.error("A resposta não contém o link necessário");
        }
      } else {
        console.error("Erro ao realizar login:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  }

  return (
    <div className="container-cadastroLogin">
      <div className="cadastro-login-img">
        <div className="cadastro-img"></div>
        <div className="cadastro-clube">
          <div className="cadastro-form">
            <div className="logo-slogan">
              <Image className="logo-benefit" src={Logo} alt="Logo-BeneFit" />
              <h2>Cadastre-se para acessar o clube de benefícios</h2>
            </div>
            <div className="cadastro-input">
              <form onSubmit={handleSubmit}>
                <div className="inf-input">
                  <label>
                    <p>Nome</p>
                    <input id="name" type="text" />
                  </label>
                  <label>
                    <p>CPF</p>
                    <input id="cpf" type="text" />
                  </label>

                  <label>
                    <p>Telefone</p>
                    <input id="telefone" type="tel" name="telefone" />
                  </label>

                  <label>
                    <p>Email</p>
                    <input id="email" type="email" name="email" />
                  </label>
                  <label>
                    <p>Senha</p>
                    <Password />
                  </label>
                  <button>Cadastrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroLogin;
