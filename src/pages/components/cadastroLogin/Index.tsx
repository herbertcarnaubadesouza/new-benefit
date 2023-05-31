import axios from "axios";
import Image from "next/image";
import NodeRSA from "node-rsa";
import React from "react";
import Logo from "../../../../public/logoClara.svg";
import Password from "../InputPassword/Index";

function CadastroLogin() {
  function encryptData(data: string, publicKey: string): string {
    const key = new NodeRSA();
    key.importKey(publicKey, "pkcs1-public-pem");
    const encrypted = key.encrypt(data, "base64");
    return encrypted;
  }

  // REQUISIÇÃO BLOQUEADA POR ERRO DE POLÍTICA DE CORS
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
      });

      const data = await response.json();
      const accessToken = data.access_token;

      console.log(response);

      console.log("Access Token:", accessToken);

      const publicKey = `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAus5uZwjciomLuvoyqQ4D
      i07st9ZiFXkw/fO+kZbQX77ix0fa+UVpfr8hhbLreXaaCgfbHaTN+3mmXVENS6Fa
      k6S/UI8xGqEo8iKts6DwvfnG5EL1ITdoDZSJhTLT9qTrXDYLedZ3kg1PFwjrFSCg
      nnmbKQogyXSHjba1YjYfULHaUotRhRMRgkuQ9bnuTJecQ3+JfkyQViK6bl0iP9JJ
      Xp2iJ9YO171EDFuGpCWDFtQObGkFdkNiAEIb5fDI0AlZw+IFTQraJKc2dLgNFXBG
      n6zHBIzjBweWHqp0UpoexWV56FfqvW1FNoBQD2MON9KDftB2nVNFQXzaSxGQ8gJJ
      kwIDAQAB
      -----END PUBLIC KEY-----
      `;

      const nome = (document.getElementById("name") as HTMLInputElement).value;
      const cpf = (document.getElementById("cpf") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const telefone = (document.getElementById("telefone") as HTMLInputElement)
        .value;

      const encryptedNome = encryptData(nome, publicKey);
      const encryptedCpf = encryptData(cpf, publicKey);
      const encryptedEmail = encryptData(email, publicKey);
      const encryptedTelefone = encryptData(telefone, publicKey);

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

  async function loginApi(
    accessToken: string,
    nome: string,
    cpf: string,
    email: string,
    telefone: string
  ) {
    try {
      const response = await axios.post(
        "https://apiv4.marktclub.net.br/login/api",
        {
          nome: nome,
          cpf: cpf,
          email_pessoal: email,
          telefone_pessoal: telefone,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);

      if (response.status === 200 && response.data.link) {
        const link = response.data.link;
        window.location.replace(link);
      } else {
        console.error("A resposta não contém o link necessário");
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
              <h2 className="sub">Cadastre-se para acessar o clube de benefícios</h2>
            </div>
            <div className="cadastro-input">
              <form onSubmit={handleSubmit}>
                <div className="inf-input">
                  <label>
                    <p className="label-field">Nome</p>
                    <input id="name" type="text" />
                  </label>
                  <label>
                    <p className="label-field">CPF</p>
                    <input id="cpf" type="text" />
                  </label>

                  <label>
                    <p className="label-field">Telefone</p>
                    <input id="telefone" type="tel" name="telefone" />
                  </label>

                  <label>
                    <p className="label-field">Email</p>
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
