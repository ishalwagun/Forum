import React from "react";
import Image from "next/image";

const Bottom = (props) => {
  return (
    <div className="flex gap-[0.62rem] ">
      <div className="bg-white p-[0.38rem] flex items-center rounded-[0.25rem]">
        <Image
          className="w-[38px] h-[38px] "
          src={props.image}
          alt=""
          width={1}
          height={1}
        />
      </div>
      <div className="bottom-section-info">
        <p className="text-white text-[0.75rem] font-semibold  mb-[0.62rem]">
          {props.title}
        </p>
        <p className="text-[0.625rem] text-[#97989D] font-normal">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Bottom;
