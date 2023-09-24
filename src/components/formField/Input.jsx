import React from "react";
import Image from "next/image";

export default function Input(props) {
  return (
    <>
      <div className=" flex-col bg-[#2c353d] w-full rounded-lg border-[1px] border-gray-600 outline-none px-3 pt-1 pb-2">
        <label className="text-[12px]">{props.label}</label>
        <div className="flex items-center gap-2 mt-1 ">
          <Image src={props.icon}width={16} height={16} alt=""></Image>
          <input
            className="bg-[#2c353d] outline-none"
            type={props.type}
            placeholder="isha lwagun"
          />
        </div>
      </div>
    </>
  );
}
