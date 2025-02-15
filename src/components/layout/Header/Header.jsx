import React, { useState } from "react";
import dropdown from "/public/icon/drop-down.png";
import fatan from "./HeaderIcons/fatan.png";
import message from "./HeaderIcons/message.png";
import notification from "./HeaderIcons/notification.png";
import search from "./HeaderIcons/search.png";
import profile from "./HeaderIcons/profile.png";
import Image from "next/image";
import DropDown from "@/components/menu/menu";
import { FirebaseProvider } from "@/context/firebase";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <>
      <FirebaseProvider>
        <div className="bg-[#262d34] flex justify-between py-[10px] px-[22px] items-center fixed top-0 w-full z-50">
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

          <div className="hidden lg:gap-[20px] lg:ml-[84px] lg:flex-shrink-0">
            <button className="icons  ">
              <Image src="./icon/home.png" alt="" width={20} height={20} />
            </button>
            <button className="icons ">
              <Image src="./icon/calendar.png" alt="" width={20} height={20} />
            </button>

            <button className="icons">
              <Image src="./icon/groups.png" alt="" width={20} height={20} />
            </button>

            <button className="icons">
              <Image src="./icon/audio.png" alt="" width={20} height={20} />
            </button>
            <button className="icons">
              <Image src="./icon/mic.png" alt="" width={20} height={20} />
            </button>
          </div>

          <div className=" hidden md:flex  md:bg-[#2c353d] md:px-[20px] md:py-[9px] md:rounded-lg md:ml-[17px]">
            <input
              className="flex lg:w-[400px] bg-[#2c353d] border-none outline-none text-[14px] text-[#858ead]
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
              {/* <button className="p-[10px] bg-[#2c353d] rounded-[7px]">
                <Image className="message-icon" src={message} alt="" />
              </button> */}
              <button className="p-[10px] bg-[#2c353d] rounded-[7px]">
                <Image
                  className="notification-icon"
                  src={notification}
                  alt=""
                />
              </button>
              <div
                onClick={() => setopenMenu((prev) => !prev)}
                className="  flex items-center cursor-pointer transition duration-300 ease-in-out"
              >
                <p className="text-white text-[16px] font-bold leading-6  mr-[4px]">
                  AR. Jakir
                </p>
                <Image src={dropdown} alt="" width={20} height={20} />
              </div>
              {openMenu && <DropDown />}
            </div>
          </div>
        </div>
      </FirebaseProvider>
    </>
  );
};

export default Header;
