import Banner from "../pages/components/banners/banners";
import CashBack from "../pages/components/cashback/cashback";
import Cliente from "../pages/components/cliente/cliente";
import Footer from "../pages/components/footer/footer";
import Header from "../pages/components/header/header";
import SectionApp from "../pages/components/sectionApp/sectionApp";
import SectionCalculadora from "../pages/components/sectionCalculadora/sectionCalculadora";
import CarroselBanner from "./components/CarroselBanner/Index";
import CarrroselMobile from "./components/CarrroselMobile/Index";
import Carrosel from "./components/carrosel/carrosel";

export default function Home() {
  return (
    <div className="global">
      <section>
        <Header />
        <Banner />
        <CarroselBanner/>
        <CarrroselMobile/>
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
