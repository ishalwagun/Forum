import React from "react";
import Image from "next/image";
import Input from "@/components/formField/Input";

import Switch from "@/components/switch/Switch";

export default function AccountComponent() {
  return (
    <div className=" flex-col flex gap-6">
      <div>
        {/* <div className="lg:flex  gap-9"> */}
        <div className="w-full mb-6 ">
          <div className="bg-[#323941] p-4 rounded-md">
            <div className="bg-[#424f58] rounded-full w-[40px] h-[38px] flex items-center justify-center border border-gray-500 mb-3">
              <Image src="/icon/user.png" width={24} height={24} alt=""></Image>
            </div>
            <div className="flex-col ">
              <p className="font-semibold">Personal info</p>
              <p className="text-[13px]">Access your Personal info.</p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}
