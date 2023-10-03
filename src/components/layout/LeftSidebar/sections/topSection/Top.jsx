import Image from "next/image";
import React from "react";

const Top = (props) => {
  return (
    <div className="flex gap-[0.38rem] py-2 px-3 hover:bg-[#2C353D]  hover:cursor-pointer rounded-[0.375rem] w-[100%]">
      <div className="bg-[#2C353D] rounded-md px-2 py-0 flex items-center   justify-center object-contain">
        <Image
          className="flex object-cover items-center justify-center"
          src={props.image}
          alt=""
          width={25}
          height={25}
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
