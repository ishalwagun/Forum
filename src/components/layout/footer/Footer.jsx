import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
function Footer() {
  const scrollToMeetups = () => {
    const barElement = document.getElementById("bar");
    if (barElement) {
      const yOffset = -100;
      const y =
        barElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const scrollToPodcasts = () => {
    const podcastElement = document.getElementById("podcasts");
    if (podcastElement) {
      const yOffset = -100;
      const y =
        podcastElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="  fixed right-0 mt-auto bottom-0 lg:hidden bg-[#262D34]  w-[100%] px-[1.69rem] py-[0.88rem] flex items-center justify-between  ">
      <Link href="/dashboard">
        <div>
          <button className="icons p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] ">
            <Image
              className="w-[20px] h-[20px]"
              src="/icon/home.png"
              alt=""
              width={1.3}
              height={1.3}
            />
          </button>
        </div>
      </Link>

      <button
        className="icons  p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] 
      "
        onClick={scrollToMeetups}
      >
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
      <button
        className="icons  p-[0.62rem]  hover:bg-[#ff571a] rounded-[0.4375rem] "
        onClick={scrollToPodcasts}
      >
        <Image
          className="w-[20px] h-[20px]"
          src="/icon/mic.png"
          alt=""
          width={1.3}
          height={1.3}
        />
      </button>
    </div>
  );
}

export default Footer;
