import React from "react";

const Top = (props) => {
  return (
    <div className="flex mt-[20px]  ">
      <div className=" flex py-[0.25rem] px-[0.62rem] flex-col justify-center items-center rounded-[6px] bg-[#2c353d] border-1 border-[#262d34] shadow-[0px 6px 6px 2px rgba(71, 153, 235, 0.04)]">
        <p className=" flex items-center text-white text-[1.4rem] font-normal leading-[22px]">
          FEB
        </p>
        <p className="font-serif text-[#5d95e8] flex items-center text-[26px] font-bold">
          7
        </p>
      </div>

      <div className=" ml-[14px]">
        <p className=" text-white text-[16px] lg:text-xs font-normal leading-[22px] mb-[0.52rem] ">
          {props.title}
        </p>
        <p className=" text-[13px] lg:text-[10px] font-semibold leading-4 text-[#97989d]">
          {props.location}
        </p>
        <div className="flex mt-[10px]">
          <a href="#" className="tabs">
            {props.tab1}
          </a>
          <a href="#" className="tabs">
            {props.tab2}
          </a>
          <a href="#" className="tabs">
            {props.tab3}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
