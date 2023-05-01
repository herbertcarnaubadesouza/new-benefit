import "../styles/banners.scss";
import "../styles/carrosel.scss";
import "../styles/footer.scss";
import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/sectionCalculadora.scss";
import "../styles/carroselBanner.scss";
import "../styles/carroselMobile.scss";
import "../styles/cliente.scss";
import "../styles/cashback.scss";
import "../styles/sectionApp.scss";
import "../styles/sectionCalculadora.scss";
import "../styles/headerMobile.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
