import React, { useState } from "react";
import Image from "next/image";
import BarComponent from "../bar/BarComponent";

export default function SidebarToggle() {
  const [isBarVisible, setBarVisibility] = useState(false);

  const toggleBarVisibility = () => {
    setBarVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="lg:hidden" onClick={toggleBarVisibility}>
      <Image
        src="./icon/settings-menu.png"
        alt="menu"
        width={20}
        height={20}
      ></Image>
      {isBarVisible && <BarComponent />}
    </div>
  );
}
