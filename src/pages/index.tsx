import { Inter } from "next/font/google";
import Header from "../pages/components/header/header";
import Banner from "../pages/components/banners/banners";
import Footer from "../pages/components/footer/footer";
import Carrosel from "../pages/components/carrosel/carrosel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="global">
      <section>
        <Header />
        <Banner />
        <Carrosel />
        <Footer />
      </section>
    </div>
  );
}
