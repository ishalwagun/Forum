import ContentPage from "@/pages/dashboard/content";
import React from "react";

function Main() {
  return (
    <div className=" p-[12px] lg:basis-9/12">
      <div className="text-white flex items-center justify-between  bg-[#2C353D] p-2 rounded-lg">
        <div className="text-[17px] text-[#FAFAFA] font-semibold p-[6px]">
          Posts
        </div>
        <div className="flex gap-2">
          <div className="bg-[#262D34] py-[10px] px-[22px] rounded-xl  hover:cursor-pointer hover:border hover:border-[#5596e6] hover:text-[#5596e6]">
            Recents
          </div>
          <div className="bg-[#262D34] py-[10px] px-[22px] rounded-xl  hover:cursor-pointer hover:border hover:border-[#5596e6] hover:text-[#5596e6]">
            Popular
          </div>
        </div>
      </div>
      <ContentPage />
    </div>
  );
}

export default Main;
