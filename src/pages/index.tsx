import { Inter } from "next/font/google";
import Header from "../pages/components/header/header";
import Banner from "../pages/components/banners/banners";
import Footer from "../pages/components/footer/footer";
import Carrosel from "../pages/components/carrosel/carrosel";
import SectionApp from "../pages/components/sectionApp/sectionApp";
import CashBack from "../pages/components/cashback/cashback";
import SectionCalculadora from "../pages/components/sectionCalculadora/sectionCalculadora";
import Cliente from "../pages/components/cliente/cliente";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="global">
      <section>
        <Header />
        <Banner />
        <Carrosel />
        <Cliente />
        <CashBack />
        <SectionCalculadora />
        <SectionApp />
        <Footer />
      </section>
    </div>
  );
}
