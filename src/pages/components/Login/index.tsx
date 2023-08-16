import Image from "next/image";
import React, { FormEvent, useEffect } from "react";
import Logo from "../../../../public/logoClara.svg";
import Password from "../InputPassword/Index";

import { useState } from "react";
import { useRouter } from "next/router";

import { db, addDoc, collection } from "../../../../firebase";
import { doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

interface Login {
  id: string;
  email: string;

  senha: string;

  link: string;
}


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter(); // Instância do roteador
  const [teste, setTeste] = useState<Login[]>([]);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      const dbCollection = collection(db, "Clients");
      const loginSnapshot = await getDocs(dbCollection);
      const loginList = loginSnapshot.docs.map((doc) => {
        const data = doc.data();
        const login: Login = {
          id: doc.id,
          email: data.email,
          senha: data.senha,
          link: data.link
        };
        return login;
      });
      setTeste(loginList);
    };
    fetchData();
  }, []);

  const [userId, setUserId] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("Handling login...");

    console.log(teste);

    const user = teste.find(
      (user) => user.email === email && user.senha === senha
    );

    if (user) {
      setUserId(user.id);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('link', user.link);
      console.log(user.link);
      console.log("foi");
      // router.push("/");
    } else {
      setError("Email ou senha incorretos");
      console.log("nao tem senha")
    }
  };


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
              <form onSubmit={handleLogin}>
                <div className="inf-input">


                  <label>
                    <p className="label-field">Email</p>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label>
                    <p className="label-field">Senha</p>
                    <input
                      id="senha"
                      type="password"
                      name="senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </label>

                  <button>Cadastrar</button>
                  {error && <div className="error-message">{error}</div>}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
