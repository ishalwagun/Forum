"use client";
import React, { useState, useEffect, useRef } from "react";
import profile from "public/icon/profile.png";
import settings from "public/icon/settings.png";
import logout from "public/icon/logout.png";
import next from "public/icon/next.png";
import Link from "next/link";
import Image from "next/image";
import { useFirebase } from "@/context/firebase";
import { useRouter } from "next/router";

function DropDown() {
  const { logOut } = useFirebase();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`absolute w-[90%] max-w-[350px] bg-[#2d333b] shadow-lg rounded overflow-hidden top-[100%] right-[3%] lg:right-[1%] text-white transition-[max-h]:0.3s ${
        isDropdownOpen ? "" : "hidden"
      }`}
      ref={dropdownRef}
    >
      <div className="p-5">
        <div className="bg-[#2d333b] shadow-[0_2px_12px_rgba(0,0,0,0.2)] rounded-lg p-2 ">
          <div className="flex gap-3 items-center hover:bg-[#384046]  hover:cursor-pointer py-3 px-1 rounded-lg ">
            <Image src={profile} alt="" width={40} height={35} />
            <div>
              <p className=" text-white text-[18px] font-semibold ">
                AR. Jakir
              </p>
            </div>
          </div>
          <hr className="border-0 h-[1px] bg-gray-700 my-[10px]" />
          <div className="p-2 hover:bg-[#384046]  hover:cursor-pointer py-3 px-3 rounded-lg">
            <Link href="/profile">View Your Profile</Link>
          </div>
        </div>
        <div className="flex mt-4 items-center py-3 px-1  hover:bg-[#384046]  hover:cursor-pointer rounded-lg">
          <div className="w-[40px] h-[40px] rounded-[20px] bg-[#384046] flex items-center justify-center mr-3 ">
            <Image
              className=""
              src={settings}
              alt="settings"
              width={20}
              height={20}
            />
          </div>
          <Link href="/settings">Settings</Link>
          <Image
            className=" ml-auto "
            src={next}
            alt="settings"
            width={24}
            height={24}
          />
        </div>
        <div className="flex  items-center  py-3 px-1  hover:bg-[#384046]  hover:cursor-pointer rounded-lg">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-[#384046] flex items-center justify-center mr-3 ">
            <Image
              className=" flex "
              src={logout}
              alt="settings"
              width={16}
              height={16}
            />
          </div>
          <button onClick={handleSignOut}>
            <p>Logout</p>
          </button>

          <Image
            className=" ml-auto "
            src={next}
            alt="settings"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default DropDown;
