import CadastroLogin from "./components/CadastroLogin/Index";
import Header from "./components/header/header";
import HeaderMobile from "./components/headerMobile/Index";

function Login() {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <CadastroLogin />
    </div>
  );
}

export default Login;
