import "../styles/globals.scss";

import "../styles/Home/banners.scss";
import "../styles/Home/carrosel.scss";
import "../styles/Home/footer.scss";
import "../styles/Home/header.scss";
import "../styles/Home/sectionCalculadora.scss";
import "../styles/Home/carroselBanner.scss";
import "../styles/Home/carroselMobile.scss";
import "../styles/Home/cliente.scss";
import "../styles/Home/cashback.scss";
import "../styles/Home/sectionApp.scss";
import "../styles/Home/sectionCalculadora.scss";
import "../styles/Home/headerMobile.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
