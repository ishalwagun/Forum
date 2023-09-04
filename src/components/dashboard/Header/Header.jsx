import React from "react";
import dropdown from "./HeaderIcons/dropdown.png";

import fatan from "./HeaderIcons/fatan.png";
import message from "./HeaderIcons/message.png";
import notification from "./HeaderIcons/notification.png";
import search from "./HeaderIcons/search.png";
import profile from "./HeaderIcons/profile.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-[#262d34] flex justify-between py-[20px] px-[22px] items-center fixed top-0 w-full mr-[35px]">
        <div className="flex items-center ml-[14px] gap-[10px]">
          <div className="bg-white p-[4px] rounded-md flex-shrink-0">
            <Image
              className="w-[24px] h-[22px] object-fill"
              src={fatan}
              alt=""
            />
          </div>

          <h3 className=" hidden text-[14px] md:block md:text-[#ff571a] lg:text-4xl">
            Forum
          </h3>
          <button className="md:hidden ml-[20px]">
            <Image
              className="search-icon"
              src={search}
              alt=""
              width={20}
              height={21}
            />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-[20px] lg:ml-[84px] lg:flex-shrink-0">
          <button className="icons  ">
            <Image src="/icon/home.png" alt="" width={20} height={20} />
          </button>
          <button className="icons ">
            <Image src="/icon/calendar.png" alt="" width={20} height={20} />
          </button>

          <button className="icons">
            <Image src="/icon/groups.png" alt="" width={20} height={20} />
          </button>

          <button className="icons">
            <Image src="/icon/audio.png" alt="" width={20} height={20} />
          </button>
          <button className="icons">
            <Image src="/icon/mic.png" alt="" width={20} height={20} />
          </button>
        </div>

        <div className=" hidden md:flex md:flex-1 md:bg-[#2c353d] md:px-[20px] md:py-[9px] md:rounded-lg md:ml-[17px]">
          <input
            className="flex flex-1 bg-[#2c353d] border-none outline-none text-[14px] text-[#858ead]
              "
            type="text"
            placeholder="Type here to search..."
          />

          <button className="">
            <Image
              className="search-icon"
              src={search}
              alt=""
              width={20}
              height={21}
            />
          </button>
        </div>

        <div className="flex ml-[58px] flex-shrink-0">
          <div className=" flex gap-[25px]">
            <button className="p-[10px] bg-[#2c353d] rounded-[7px]">
              <Image className="message-icon" src={message} alt="" />
            </button>
            <button className="p-[10px] bg-[#2c353d] rounded-[7px]">
              <Image className="notification-icon" src={notification} alt="" />
            </button>
            <div className="mt-[3px]">
              <Image src={profile} alt="" width={1.3} height={1.3} />
            </div>
          </div>

          <div className=" hidden mr-[20px] md:flex md:items-center">
            <p className="text-white text-[16px] font-bold leading-6 ml-[16px] mr-[10px]">
              AR. Jakir
            </p>
            <Image src={dropdown} alt="" width={1.3} height={1.3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
