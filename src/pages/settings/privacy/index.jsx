import PrivacyComponent from "@/components/settings/privacy/PrivacyComponent";
import React from "react";
import SettingsLayout from "@/components/settings/layout";
import Image from "next/image";
import wallpaper from "/public/Assests/image/wallpaper.png";

export default function Privacy() {
  return (
    <SettingsLayout>
      <>
        <div className="  text-white   z-50 basis-[75%] bg-[#2d333b]  py-7 px-6 rounded-lg justify-center items-center">
          <div className="text-[20px] pl-4  font-normal ">Privacy Settings</div>

          <div className=" lg:flex lg:flex-row justify-between">
            <div className="basis-[80%]">
              <PrivacyComponent />
             
            </div>
            <div className="">
              <Image
                className=" hidden lg:block h-[250px] object-contain  "
                src={wallpaper}
              ></Image>
            </div>
          </div>
        </div>
      </>
    </SettingsLayout>
  );
}
