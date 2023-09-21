import React from "react";

import bitcoin from "../Icons/bitcoin.jpg";
import Image from "next/image";
const Bottom = () => {
  return (
    <div className="flex mt-[20px] ">
      {<Image className="w-[58px] h-[58px] rounded" src={bitcoin} alt=""  />}

      <div className="flex  gap-[100px]  md:gap-[200px] lg:gap-0">
        <div className="ml-[14px]">
          <p className="text-[16px] lg:text-xs font-normal text-white">
            Selling a Business and Scaling Another Amidst Tragedy.
          </p>
          <p className="text-[13px] lg:text-[10px] font-normal text-[#97989d] mt-[6px]">
            by Michele Hansen
          </p>
        </div>
        <p className="  text-[#97989d] mt-[20px] ">&#8594;</p>
      </div>
    </div>
  );
};

export default Bottom;
