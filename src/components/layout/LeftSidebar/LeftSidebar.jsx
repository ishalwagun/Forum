import React from "react";
// import Top from "./sections/topSection/Top";
import Middle from "./sections/middleSection/Middle";
import Bottom from "./sections/bottomSection/Bottom";
import Top from "./sections/topSection/Top";
import DashboardLayout from "../layout";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <>
      <div className="   hidden lg:block lg:flex-col md:px-[25px] lg:gap-[1.25rem]  w-[100%] ">
        <div className="sticky top-[100px] lg:flex-col lg:flex lg:gap-[1.25rem]  ">
          <div className="  flex-col p-[0.62rem] bg-[#262D34] rounded-2xl flex-shrink-0 flex gap-[7px] ">
            <Top
              image="/icon/new.png"
              title="Newest and Recent"
              desc="Find the latest update lorem25  Find the latest update  "
            />

            {
              <Top
                image="/icon/popular.png"
                title="Popular of the day"
                desc="Shots featured today by curators"
              />
            }
            {
              <Top
                image="/icon/Follow.png"
                title="Following"
                desc="Explore from your favorite person"
              />
            }
          </div>

          <div className="flex-col bg-[#262D34] rounded-2xl flex-shrink-0 py-[1.25rem] pl-[1.25rem] pr-[1.56rem]">
            <div className=" mb-[1.25rem]">
              <p className="text-[1rem] leading-[1.5rem] font-semibold text-white ">
                Popular tags
              </p>
            </div>
            <div className="flex-col flex gap-[0.62rem]">
              {
                <Middle
                  image="/icon/javascript.png"
                  title="#javascript"
                  desc="82,645 Posted by this tag"
                />
              }

              {
                <Middle
                  image="/icon/bitcoin.png"
                  title="#bitcoin"
                  desc="65,523 Posted • Trending"
                />
              }
              {
                <Middle
                  image="/icon/Design.png"
                  title="#design"
                  desc="51,354 • Trending in Bangladesh"
                />
              }
              {
                <Middle
                  image="/icon/innovation.png"
                  title="#javascript"
                  desc="82,645 Posted by this tag"
                />
              }
              {
                <Middle
                  image="/icon/tutorial.png"
                  title="#innovation"
                  desc="48,029 Posted by this tag"
                />
              }
              {
                <Middle
                  image="/icon/seo.png"
                  title="#tutorial"
                  desc="51,354 • Trending in Bangladesh"
                />
              }
            </div>
          </div>
          <div className="flex-col bg-[#262D34] rounded-2xl flex-shrink-0 py-[1.25rem] pl-[1.25rem] pr-[1.56rem]">
            <Link href={"/dashboard/group"}>
              <div className="mb-[1.25rem] cursor-pointer">
                <p className="text-[1rem] leading-[1.5rem] font-semibold text-white">
                  Pinned Group &rarr;
                </p>
              </div>
            </Link>

            <div className="flex-col flex gap-[0.62rem] ">
              {
                <Bottom
                  image="/icon/jsIcon.png"
                  title="#javascript"
                  desc="82,645 Posted by this tag"
                />
              }

              {
                <Bottom
                  image="/icon/jsIcon.png"
                  title="#bitcoin"
                  desc="65,523 Posted • Trending"
                />
              }

              {
                <Bottom
                  image="/icon/jsIcon.png"
                  title="#design"
                  desc="51,354 • Trending in Bangladesh"
                />
              }
              {
                <Bottom
                  image="/icon/jsIcon.png"
                  title="#blogging"
                  desc="48,029 Posted by this tag"
                />
              }
              {
                <Bottom
                  image="/icon/jsIcon.png"
                  title="#javascript"
                  desc="82,645 Posted by this tag"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
