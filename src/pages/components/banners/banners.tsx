import React from "react";
import Image from "next/image";
import Banner1 from "../../../../public/banner01.png";
import Banner2 from "../../../../public/banner02.png";
import Banner3 from "../../../../public/banner03.png";

function banners() {
  return (
    <div className="Main-Banners">
      <div className="-Main-Banner1">
        <Image className="Banner1" src={Banner1} alt="Banner-BeneFit" />
      </div>
      <div className="Main-Banner2-3">
        <Image className="Banner2" src={Banner2} alt="Banner-BeneFit" />
        <Image className="Banner3" src={Banner3} alt="Banner-BeneFit" />
      </div>
    </div>
  );
}

export default banners;
