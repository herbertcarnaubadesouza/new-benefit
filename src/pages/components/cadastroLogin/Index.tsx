import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logoClara.svg";

function CadastroLogin() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
                    <input type="text" />
                  </label>
                  <label>
                    <p>CPF</p>
                    <input type="text" />
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
                    <input type="tel" name="telefone" />
                  </label>
                  <div className="city">
                    <label>
                      <p>UF</p>
                      <input type="text" name="telefone" />
                    </label>
                    <label className="cidade">
                      <p>Cidade</p>
                      <input type="text" name="telefone" />
                    </label>
                  </div>
                  <label>
                    <p>Email</p>
                    <input type="email" name="email" />
                  </label>
                  <label>
                    <p>Senha</p>
                    <input type="password" name="senha" />
                  </label>
                  <button>Cadastar</button>
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
