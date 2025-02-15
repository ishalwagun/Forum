import SettingsLayout from "@/components/settings/layout";
import SecurityComponent from "@/components/settings/security/Security";
import Image from "next/image";
import wallpaper from "/public/Assests/image/wallpaper.png";
import React from "react";

function Security() {
  return (
    <SettingsLayout>
      <>
        <div className="  text-white   z-50 basis-[75%] bg-[#2d333b]  py-7 px-6 rounded-lg justify-center items-center">
          <div className="text-[20px] pl-4 font-normal mb-7">Security</div>

          <div className=" lg:flex lg:flex-row   justify-between">
            <div className="basis-[80%]">
              <SecurityComponent />
            </div>
            <div className="">
              <Image
                className=" hidden lg:block h-[250px] object-contain mt-20 "
                src={wallpaper}
              ></Image>
            </div>
          </div>
        </div>
      </>
    </SettingsLayout>
  );
}

export default Security;
