import Banner from "../pages/components/banners/banners";
import Carrosel from "../pages/components/carrosel/carrosel";
import CashBack from "../pages/components/cashback/cashback";
import Cliente from "../pages/components/cliente/cliente";
import Footer from "../pages/components/footer/footer";
import Header from "../pages/components/header/header";
import SectionApp from "../pages/components/sectionApp/sectionApp";
import SectionCalculadora from "../pages/components/sectionCalculadora/sectionCalculadora";

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
