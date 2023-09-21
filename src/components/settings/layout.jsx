import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/footer/Footer";
import BarComponent from "./bar/BarComponent";
import General from "@/pages/settings/general";

export default function SettingsLayout({ children }) {
  return (
    <>
      <Header />

      <BarComponent />

      <div className=" m-7 lg:ml-[330px] lg:mr-[60px] lg:pt-[85px]">
        {children}
      </div>

      <Footer />
    </>
  );
}
