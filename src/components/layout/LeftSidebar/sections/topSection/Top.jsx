import Image from "next/image";
import React from "react";

const Top = (props) => {
  return (
    <div className="flex gap-[0.38rem] py-[0.38rem] px-[0.31rem] hover:bg-[#2C353D]  hover:cursor-pointer rounded-[0.375rem]">
      <div className="bg-[#2C353D] rounded-md p-[0.25rem] flex items-center">
        <Image
          className="w-[1.25rem] h-[1.25rem] "
          src={props.image}
          alt=""
          width={1.25}
          height={1.25}
        />
      </div>

      <div className="flex-col ">
        <p className="text-[0.75rem] font-bold text-white mb-[0.12rem]">
          {props.title}
        </p>
        <p className="text-[0.5625rem] font-normal text-[#97989d]">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Top;
