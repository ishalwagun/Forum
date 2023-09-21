import React from "react";

function Sidebar() {
  return (
    <div className="p-[12px]  lg:basis-1/4">
      <div className="bg-[#2C353D] py-[10px] px-[16px] rounded-t-lg border-b-[.5px] border-bg-[#e8e8e8]">
        <p className="text-[15px] text-[#FAFAFA] font-semibold">Studied at</p>
        <p className="text-[14.4px] text-[#a2a5b9] font-medium ">
          Georgetown University
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
