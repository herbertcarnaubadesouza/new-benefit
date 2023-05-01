import Carrosel from "./components/carrosel/carrosel";
import Banner from "../pages/components/banners/banners";
import CashBack from "../pages/components/cashback/cashback";
import Cliente from "../pages/components/cliente/cliente";
import Footer from "../pages/components/footer/footer";
import Header from "../pages/components/header/header";
import SectionApp from "../pages/components/sectionApp/sectionApp";
import SectionCalculadora from "../pages/components/sectionCalculadora/sectionCalculadora";
import CarroselBanner from "./components/CarroselBanner/Index";
import CarrroselMobile from "../pages/components/CarrroselMobile/Index";
import HeaderMobile from "../pages/components/headerMobile/Index";
export default function Home() {
  return (
    <div className="global">
      <section>
        <HeaderMobile />
        <CarroselBanner />
        <CarrroselMobile />
        <Cliente />
        <CashBack />
        <SectionCalculadora />
        <SectionApp />
        <Footer />
      </section>
    </div>
  );
}
