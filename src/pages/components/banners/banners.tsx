import React from "react";
import Image from "next/image";

import Banner1 from "../../../../public/banner01.png";
import Banner2 from "../../../../public/banner02.png";
import Banner3 from "../../../../public/banner03.png";

function banners() {
  return (
    <div className="container-banners">
      <div className="-main-banner1">
        <a href="#">
          <Image className="banner1" src={Banner1} alt="Banner-BeneFit" />
        </a>
      </div>
      <div className="main-banner2-3">
        <a href="#">
          <Image className="banner2" src={Banner2} alt="Banner-BeneFit" />
        </a>
        <a href="#">
          <Image className="banner3" src={Banner3} alt="Banner-BeneFit" />
        </a>
      </div>
    </div>
  );
}

export default banners;
