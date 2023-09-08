"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "@/components/modal";

const ContentPage = () => {
  return (
    <div className="w-[100%] p-[25px] pr-0  lg:p-[25px] rounded-[16px] ">
      <h1 className="text-white text-[25px] mb-[7px]">
        Which movie have you watched most recently?
      </h1>

      <div className="flex gap-8 items-center mb-[5px]">
        <div className="flex items-center gap-3">
          <div className="bg-[#3ebafa] h-2 w-2 rounded-[50%]  "></div>
          <Link className="text-[#8e9091] text-[16px] mr-[5px] " href="#">
            Exchange
          </Link>
        </div>

        <div className="flex gap-[6px]">
          <Link href="#" className="tags">
            Gaming
          </Link>
          <Link href="#" className="tags">
            Nature
          </Link>
          <Link href="#" className="tags">
            Entertainment
          </Link>
        </div>
      </div>

      <div className="bg-[#262d34] p-[20px] lg:p-[30px] mt-6 rounded-[16px]   gap-4 ">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://www.azyrusthemes.com/forum2/fonts/icons/avatars/B.svg"
            className="rounded-[50%] align-middle"
            width={40}
            height={40}
          />

          <div className="flex-col flex gap-1.5 lg:flex-row  flex-1 lg:justify-between  ">
            <p className="text-white text-[16px] font-semibold">Isha lwagun</p>
            <div className="flex gap-2.5 items-center ">
              <MdOutlineWatchLater size={18} color="#5b6166" />
              <p className="text-[#97989d] text-[14px] ">06 May, 2017</p>
            </div>
          </div>
        </div>
        <div className="lg:pl-[62px] mt-[10px] lg:mt-[30px] text-[16px] leading-7">
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            facilis provident consequatur pariatur beatae, repellendus
            doloremque consectetur, velit voluptatum non eum totam, similique
            eveniet! Ducimus quas cum pariatur atque quo. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Sequi facilis provident
            consequatur pariatur beatae, repellendus doloremque consectetur,
            velit voluptatum non eum totam, similique eveniet! Ducimus quas cum
            pariatur atque quo.
          </p>

          <p className="text-white mt-[18px] lg:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            obcaecati molestiae fugit expedita suscipit repudiandae est ducimus.
            Doloribus sit praesentium est possimus? Dicta veritatis eius in
            fugit molestias vero natus error deleniti, quas qui neque quod,
            quibusdam est soluta laudantium provident assumenda praesentium
            veniam optio voluptate animi, ipsum cupiditate tempore!
          </p>

          <Modal />
        </div>

        <div className="lg:pl-[62px] mt-[38px]">
          <div>
            <div className="w-[100%] h-[1px] bg-gray-700 "> </div>
            <div className="flex justify-between">
              <div className="flex items-center pt-[30px] gap-4">
                <button className="flex gap-2">
                  <Image
                    src="/icon/upaarow.png"
                    width={17}
                    height={20}
                    alt=""
                  />
                  <p className="text-[#8E9091] text-[14px]">201</p>
                </button>
                <button className="flex gap-2">
                  <Image
                    className="mt-[2px]"
                    src="/icon/downarrow.png"
                    width={17}
                    height={20}
                    alt=""
                  />
                  <p className="text-[#8E9091] text-[14px]">201</p>
                </button>
                <button className="flex gap-2">
                  <Image
                    src="/icon/btnheart.png"
                    width={22}
                    height={20}
                    alt=""
                  />
                  <p className="text-[#8E9091] text-[14px]">201</p>
                </button>
              </div>
              <div className="flex items-center pt-[30px] gap-5">
                <div className=" hidden md:block md:flex gap-5 ">
                  <button>
                    <Image src="/icon/link.png" width={17} height={17} />
                  </button>
                  <button>
                    <Image src="/icon/flag.png" width={17} height={17} />
                  </button>
                  <button>
                    <Image src="/icon/bookmark.png" width={12} height={10} />
                  </button>
                </div>
                <button className=" lg:hidden">
                  <Image src="/icon/menu.png" width={23} height={23} />
                </button>
                <button>
                  <Image src="/icon/share.png" width={22} height={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
