import SettingsLayout from "@/components/settings/layout";

import Image from "next/image";
import wallpaper from "/public/Assests/image/wallpaper.png";
import React, { useState } from "react";
import HelpComponent from "@/components/settings/help/HelpComponent";

export default function Help() {
  const [open, setOpen] = useState(false);
  return (
    <SettingsLayout>
      <>
        <div className="  text-white   z-50 basis-[75%] bg-[#2d333b]  py-7 px-6 rounded-lg justify-center items-center">
          <div className="flex  items-center mb-7">
            <div>
              <Image
                className="lg:hidden"
                src="./Assests/svg/menu.svg"
                width={30}
                height={30}
                alt=""
              ></Image>
            </div>
            <div className="text-[20px] pl-4 font-normal ">Assistance</div>
          </div>

          <div className=" lg:flex lg:flex-row   justify-between">
            <div className="basis-[80%] ">
              <div className="lg:flex gap-9 w-full ">
                <div className="w-full">
                  <HelpComponent
                    title="User guide "
                    info="Learn more about the app."
                  />
                </div>
                <div className="w-full">
                  <HelpComponent
                    title="User guide "
                    info="Learn more about the app."
                  />
                </div>
                <div className="w-full">
                  <HelpComponent
                    title="User guide "
                    info="Learn more about the app."
                  />
                </div>
              </div>
              <div className="lg:flex gap-9 w-full">
                <div className="w-full">
                  <HelpComponent
                    title="User guide "
                    info="Learn more about the app."
                  />
                </div>
                <div className="w-full">
                  <HelpComponent
                    title="User guide "
                    info="Learn more about the app."
                  />
                </div>
                <div className="w-full">
                  <HelpComponent
                    title="User guide "
                    info="Learn more about the app."
                  />
                </div>
              </div>
            </div>

            {/* image */}
            <div className="">
              <Image
                className=" hidden lg:block h-[250px] object-contain "
                src={wallpaper}
              ></Image>
            </div>
          </div>
        </div>
      </>
    </SettingsLayout>
  );
}
