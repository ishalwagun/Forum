import React from "react";

import Link from "next/link";
import Image from "next/image";
import checkmark from "/public/icon/checkmark.png";

function BarComponent() {
  return (
    <div className=" fixed basis-[20%] flex-col hidden lg:block  top-0 bottom-0  text-white  bg-[#2d333b] mt-[80px]  px-[25px] ">
      <div className="flex flex-col items-center justify-center  mt-[20px] pt-[20px] mb-[20px] ">
        <div className="">
          <div className="relative">
            <Image
              className=" rounded-[50%] w-[100px] h-[100px]  object-cover "
              src="/icon/image.jpg"
              width={100}
              height={100}
              alt="profile"
            ></Image>

            <div className=" flex items-center justify-center absolute bottom-0 right-0 w-[30px] h-[30px] rounded-[15px] bg-[#1ce589]">
              <Image className="w-[24px]" src={checkmark} alt=""></Image>
            </div>
          </div>
        </div>
        <div className="mt-[8px] flex-col flex items-center ">
          <p className="text-[#FAFAFA] text-[16px] font-bold">Jeena Davis</p>
          <p className="text-[#A2A5B9] text-[13px] font-medium">
            Melbourne, AU
          </p>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-700"></div>

      <div className="  py-[20px] flex-col  flex items-center gap-5 ">
        <div
          className="flex pt-[14px]  w-full items-center justify-center px-8  mr-12 gap-6
         "
        >
          <Image
            src="/icon/settings.png"
            alt="settings"
            width={16}
            height={16}
          ></Image>
          <Link className="text-[15px] font-medium" href="/settings/general">
            General
          </Link>
        </div>
        <div
          className="flex pt-[14px]  w-full items-center justify-center px-8  mr-12 gap-6
         "
        >
          <Image
            src="/icon/settings.png"
            alt="settings"
            width={16}
            height={16}
          ></Image>
          <Link className="text-[15px] font-medium" href="/settings/security">
            Security
          </Link>
        </div>
        <div
          className="flex pt-[14px]  w-full items-center justify-center px-8  mr-12 gap-6
         "
        >
          <Image
            src="/icon/settings.png"
            alt="settings"
            width={16}
            height={16}
          ></Image>
          <Link className="text-[15px] font-medium" href="/settings/">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BarComponent;
