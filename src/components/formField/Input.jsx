import React from "react";
import Image from "next/image";

export default function Input(props) {
  return (
    <>
      <div className="  flex-col bg-[#2c353d] w-full rounded-lg border-[1px] border-gray-600 outline-none px-4 pt-[4px] pb-1">
        <label className="text-[12px] ">{props.label}</label>
        <div className="flex items-center gap-2 mt-1 w-full ">
          <Image src={props.icon} width={20} height={20} alt=""></Image>
          <input
            className="bg-[#2c353d] outline-none w-full py-2"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </>
  );
}
