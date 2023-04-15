import React from "react";
import Image from "next/image";

function banners() {
  return (
    <div className="Main-Banners">
      <div className="Container">
      <Image className="logo" src= alt="Logo-BeneFit" />
      <Image className="logo" src= alt="Logo-BeneFit" />
      <Image className="logo" src= alt="Logo-BeneFit" />
      </div>
    </div>
  );
}

export default banners;
