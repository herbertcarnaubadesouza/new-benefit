import CarrroselMobile from "../pages/components/CarrroselMobile/Index";
import CashBack from "../pages/components/cashback/cashback";
import Cliente from "../pages/components/cliente/cliente";
import Footer from "../pages/components/footer/footer";
import Header from "../pages/components/header/header";
import HeaderMobile from "../pages/components/headerMobile/Index";
import SectionApp from "../pages/components/sectionApp/sectionApp";
import SectionCalculadora from "../pages/components/sectionCalculadora/sectionCalculadora";
import CarroselBanner from "./components/CarroselBanner/Index";
import Banner from "./components/banners/banners";
import Carrossel from "./components/carrosel/carrosel";
export default function Home() {
  return (
    <div className="global">
      <section>
        <HeaderMobile />
        <Header />
        <CarroselBanner />
        <Banner/>
        <CarrroselMobile />
        <Carrossel/>
        <Cliente />
        <CashBack />
        <SectionCalculadora />
        <SectionApp />
        <Footer />
      </section>
    </div>
  );
}
