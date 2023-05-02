import React from "react";
import Carrosel from "../components/carrosel/carrosel";
import Banner from "../components/banners/banners";
import CashBack from "../components/cashback/cashback";
import Cliente from "../components/cliente/cliente";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SectionApp from "../components/sectionApp/sectionApp";
import SectionCalculadora from "../components/sectionCalculadora/sectionCalculadora";
import CarroselBanner from "../components/CarroselBanner/Index";
import CarrroselMobile from "../components/CarrroselMobile/Index";
import HeaderMobile from "../components/headerMobile/Index";
function Home() {
  return (
    <div>
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

export default Home;
