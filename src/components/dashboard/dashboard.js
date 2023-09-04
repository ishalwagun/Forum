import React from "react";

import Image from "next/image";
import Header from "./Header/Header";
import LeftSidebar from "./Main/LeftSidebar/LeftSidebar";
import Bar from "./Main/RightSideBar/Bar";
import ContentPage from "./Main/main";
const Dashboard = () => {
  return (
    <>
      <div className="pt-[100px]">
        <Header />
        <div className=" flex m-[1.25] ">
          {<LeftSidebar />}

          <div className=" flex-col pr-[35px] lg:flex lg:flex-row ">
            {<ContentPage />}
          </div>
          {<Bar />}
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