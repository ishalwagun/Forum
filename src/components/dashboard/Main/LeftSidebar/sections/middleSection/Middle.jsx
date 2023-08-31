import Image from "next/image";
import React from "react";

const Middle = (props) => {
  return (
    <div className="flex gap-[0.62rem]">
      <div className="bg-[#5a4f43] p-[0.38rem] flex items-center rounded-[0.25rem]">
        <Image
          className="w-[1.25rem] h-[1.25rem] "
          src={props.image}
          width={1.25}
          height={1.25}
          alt=""
        />
      </div>

      <div className="">
        <p className="text-white text-[0.75rem] font-semibold  mb-[0.12rem]">
          {props.title}
        </p>
        <p className="text-[0.625rem] text-[#97989D] font-normal">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Middle;
