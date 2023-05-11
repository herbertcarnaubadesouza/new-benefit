import React from "react";
import Image from "next/image";
import Password from "../InputPassword/Index";
import Logo from "../../../../public/logoClara.svg";
import axios from "axios";
import NodeRSA from 'node-rsa';


function CadastroLogin() {

  function encryptData(data: string, publicKey: string): string {
    const key = new NodeRSA();
    key.importKey(publicKey, 'pkcs1-public-pem');
    const encrypted = key.encrypt(data, 'base64');
    return encrypted;
  }

  // REQUISIÇÃO BLOQUEADA POR ERRO DE POLÍTICA DE CORS
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new URLSearchParams();
    data.append('client_id', '5483038437-7e5PxK3L0dYgLCuF!xfb4jp8v%Ud3g#u56ZquehsGtut$adT5HyAMdW$5VJQbXpb8S1!Y*R3E.benefit.com.br');
    data.append('secret_id', '82500-AAJaz0z04HIDT0B4bR4S1JckG9QR1J388Z6Ztb*qz6AhQ2pqeX2UO4cn$Sgcbb60ieuXVm374C');
    data.append('audience', 'web');
    data.append('grant_type', 'client_credentials');
    data.append('scope', 'login:api');

    try {
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://apiv4homologacao.marktclub.net.br/token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log(response);

      const accessToken = response.data.access_token;
      console.log('Access Token:', accessToken);

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

      const nome = (document.getElementById('name') as HTMLInputElement).value;
      const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const telefone = (document.getElementById('telefone') as HTMLInputElement).value;

      const encryptedNome = encryptData(nome, publicKey);
      const encryptedCpf = encryptData(cpf, publicKey);
      const encryptedEmail = encryptData(email, publicKey);
      const encryptedTelefone = encryptData(telefone, publicKey);

      await loginApi(accessToken, encryptedNome, encryptedCpf, encryptedEmail, encryptedTelefone);
      // Aqui você pode armazenar o access_token conforme sua necessidade
    } catch (error) {
      console.error('Erro ao obter o access token:', error);
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
        'https://apiv4homologacao.marktclub.net.br/login/api',
        {
          nome: nome,
          cpf: cpf,
          email_pessoal: email,
          telefone_pessoal: telefone,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);

      if (response.status === 200 && response.data.link) {
        const link = response.data.link;
        window.location.replace(link);
      } else {
        console.error('A resposta não contém o link necessário');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
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
                    <input id='name' type="text" />
                  </label>
                  <label>
                    <p>CPF</p>
                    <input id='cpf' type="text" />
                  </label>
                  <label>
                    <p>Gênero</p>
                    <select name="Gênero">
                      <option value="none"></option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                    </select>
                  </label>
                  <label>
                    <p>Estado Civil</p>
                    <select name="Estado Civil">
                      <option value="none"></option>
                      <option value="solteiro">Solteiro</option>
                      <option value="separado">Separado</option>
                      <option value="divorciado ">Divorciado</option>
                      <option value="viuvo">Viúvo</option>
                    </select>
                  </label>
                  <label>
                    <p>Data de nascimento</p>
                    <input type="date" />
                  </label>
                  <label>
                    <p>Telefone</p>
                    <input id='telefone' type="tel" name="telefone" />
                  </label>
                  <div className="city">
                    <label>
                      <p>UF</p>
                      <input type="text" name="uf" />
                    </label>
                    <label className="cidade">
                      <p>Cidade</p>
                      <input type="text" name="cidade" />
                    </label>
                  </div>
                  <label>
                    <p>Email</p>
                    <input id='email' type="email" name="email" />
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
