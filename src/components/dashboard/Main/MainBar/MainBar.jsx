import React from "react";
import profile from "./Icons/profile.png";
import Contents from "./contents/Contents";
import icon from "/public/icon/new.png";
import follow from "public/icon/Follow.png";
import popular from "/public/icon/popular.png";
import Image from "next/image";

const MainBar = () => {
  return (
    <>
      <div className=" mx-[20px] w-[100%]">
        <div className="md:hidden flex  bg-[#262d34] items-center   rounded-[0.625rem] p-[0.62rem] justify-between mb-[1.25rem]">
          <div className="flex gap-[0.38rem] items-center p-[0.38rem] py-[0.31rem]  hover:bg-[#2C353D] hover:rounded-[0.375rem]">
            <div className="bg-[#2C353D] p-[0.25rem] rounded-[0.375rem] ">
              <Image src={icon} alt=""  />
            </div>

            <p className="text-white text-[0.75rem] font-semibold">Newest</p>
          </div>
          <div className="flex gap-[0.38rem] items-center p-[0.38rem] py-[0.31rem]  hover:bg-[#2C353D] hover:rounded-[0.375rem]">
            <div className="bg-[#2C353D] p-[0.25rem] rounded-[0.375rem] ">
              <Image src={popular} alt="" />
            </div>

            <p className="text-white text-[0.75rem] font-semibold">Popular</p>
          </div>
          <div className="flex gap-[0.38rem] items-center p-[0.38rem] py-[0.31rem] hover:bg-[#2C353D] hover:rounded-[0.375rem]">
            <div className="bg-[#2C353D] p-[0.25rem] rounded-[0.375rem] ">
              <Image src={follow} alt=""  />
            </div>

            <p className="text-white text-[0.75rem] font-semibold mr-[0.25rem]">
              Following
            </p>
            <div className="bg-[#FF6934] rounded-[0.125rem] py-[0.19rem] px-[0.38rem] text-[0.5625rem] text-white font-semibold leading-[0.875rem]">
              24
            </div>
          </div>
        </div>
        <div className=" bg-[#262d34] items-center  flex gap-[20px] rounded-[16px] justify-between  mb-[20px] p-[1.25rem] ">
          <div className="contentImg">
            <Image
              className=" w-[2.45194rem]
h- [2.38594rem]"
              src={profile}
              alt=""
             
            />
          </div>
          <div className=" flex flex-1">
            <input
              className=" bg-[#2c353d] border-none flex flex-1 rounded-[6px] p-[11px] text-[#858EAD] outline-none"
              type="text"
              placeholder="Let's share what going on your mind..."
            />
          </div>
          <div className="btn">
            <button className=" bg-[#ff6934] text-white border-none text-[13px] font-medium p-[10px] ml-[16px] flex-shrink-0 hover:cursor-pointer rounded-[6px] w-[100px]">
              Create Post
            </button>
          </div>
        </div>
        {
          <Contents
            title=" Blockchain developer best practices on innovationchain"
            tab1="finance"
            tab2="bitcoin"
            tab3="crypto"
            author="Pval Gavy"
            due="3 weeks ago"
          />
        }
        {
          <Contents
            title="The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about blogging and SEO..."
            tab1="seo"
            tab2="blogging"
            tab3="traffic"
            author="AK Jakir"
            due="3 days ago"
          />
        }
        {
          <Contents
            title="OnePay - Online Payment Processing Web App
          - Download from uihut.com"
            tab1="payment"
            tab2="webapp"
            tab3="ukit"
            author="Michal Malewicz"
            due="3 weeks ago"
          />
        }
      </div>
    </>
  );
};

export default MainBar;
