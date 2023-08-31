"use client";
import React from "react";
import Header from "../dashboard/Header/Header";
import LeftSidebar from "../dashboard/Main/LeftSidebar/LeftSidebar";
import MainBar from "../dashboard/Main/MainBar/MainBar";
import Bar from "../dashboard/Main/RightSideBar/Bar";
import Image from "next/image";
const Dashboard = () => {
  return (
    <>
      <div className="pt-[100px]">
        <Header />
        <div className=" flex  ">
          {<LeftSidebar />}

          <div className=" flex-col pr-[35px] lg:flex lg:flex-row ">
            {<MainBar />}
            {<Bar />}
          </div>
        </div>

        <div className=" fixed bottom-0 lg:hidden bg-[#262D34] w-[100%]  px-[1.69rem] py-[0.88rem] flex items-center justify-between  ">
          <button className="icons p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] ">
            <Image
              className="w-[20px] h-[20px]"
              src="/icon/home.png"
              alt=""
              width={1.3}
              height={1.3}
            />
          </button>
          <button className="icons  p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] ">
            <Image
              className="w-[20px] h-[20px]"
              src="/icon/calendar.png"
              alt=""
              width={1.3}
              height={1.3}
            />
          </button>

          <button className="icons  p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] ">
            <Image
              className="w-[20px] h-[20px]"
              src="/icon/groups.png"
              alt=""
              width={1.3}
              height={1.3}
            />
          </button>

          <button className="icons  p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] ">
            <Image
              className="w-[20px] h-[20px]"
              src="/icon/audio.png"
              alt=""
              width={1.3}
              height={1.3}
            />
          </button>
          <button className="icons  p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] ">
            <Image
              className="w-[20px] h-[20px]"
              src="/icon/mic.png"
              alt=""
              width={1.3}
              height={1.3}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
