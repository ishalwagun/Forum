import React from "react";
import chain from "./Icons/chain.jpg";
import heart from "./Icons/heart.png";
import profile from "./Icons/profile.png";
import Image from "next/image";

const Contents = (props) => {
  return (
    <>
      <div className="bg-[#262d34] rounded-[16px] flex flex-row p-[20px] items-start justify-between mb-[1.25rem] ml-[25px] mr-[25px] lg:ml-0 md:mr-0 lg:mr-0 ">
        <div className="basis-2/12 mr-[20px]">
          <Image
            className=" rounded-[0.25rem] md:rounded-[16px] h-[2.5rem] w-[3.5rem] lg:h-[9.75rem] lg:w-[9.75rem] md:h-[6rem] md:w-[9rem] max-w-[100%] "
            src={chain}
            alt=""
          />
        </div>

        <div className="basis-9/12 items-start">
          <p className="text-white text-[1.125rem] font-normal mr-[30px]">
            {props.title}
          </p>
          <div className="mt-[10px]">
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

          <div className="flex mt-[30px] flex-1 pb-[10px] ">
            <div className="ContentImg">
              <Image
                className=" w-[2.45194rem]
                 h- [2.38594rem]"
                src={profile}
                alt=""
              />
            </div>

            <div className="flex w-[521px] justify-between items-center">
              <div className="ml-[0.62rem]">
                <p className="text-[14px] font-normal text-[#f4f6f8]">
                  {props.author}
                </p>
                <p className="duration text-x[11px] font-normal text-[#c5d0e6]">
                  {props.due}
                </p>
              </div>

              <div className="flex">
                <div className="views">
                  <p>651,324 Views</p>
                </div>

                <div className="views">
                  <p>651,324 Views</p>
                </div>

                <div className="views">
                  <p>651,324 Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/12">
          <button className=" bg-[#2c353d] border-none w-[24px] h-[22px] rounded-[12px] pt-[3px] pl-[5px]">
            <Image className=" w-[15px]" src={heart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Contents;
