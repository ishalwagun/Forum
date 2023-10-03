import React from "react";
import Image from "next/image";
import ModalComment from "../modalComment";

export default function ReplyPost({ props }) {
  return (
    <div className="bg-[#262d34] mb-5 py-6  px-8  rounded-[16px] mx-[25px] ml-[95px] md:mr-0 lg:mr-[25px] ">
      <div className=" flex items-center ">
        <div className="bg-black w-9 h-9 rounded-full text-white flex items-center justify-center mr-6">
          <p>F</p>
        </div>
        <div className="text-white basis-[85%] md:basis-[87%] lg:basis-[90%]">
          <h1>Kevin</h1>
        </div>
        <div className="flex gap-2.5 items-center ">
          <Image
            src={"/icon/down-arrow.png"}
            width={16}
            height={16}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="pt-5 text-white text-[12px] pl-14"></div>
    </div>
  );
}
