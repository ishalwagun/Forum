import Image from "next/image";
import React from "react";
import Button from "../loadingButton/button";

export default function Categories({ onGoBack }) {
  return (
    <>
      <div className="flex flex-col ">
        <div className="px-5 pt-6 relative mb-10">
          {/* header */}
          <div
            className="w-[45px] h-[45px] rounded-[50%] bg-[#53595e] flex items-center justify-center hover:opacity-90 p-2 "
            onClick={onGoBack}
          >
            <button>
              <Image
                src={"/icon/leftarrow.png"}
                width={24}
                height={29}
                alt=""
              ></Image>
            </button>
          </div>
          <div className="w-[100%]  h-[1px] my-4 bg-gray-700"></div>
          {/* header */}

          <div className="h-[45vh] overflow-y-auto overflow-x-hidden">
            <p className="text-white font-medium text-[22px]">
              Who can see your post?
            </p>
            <p className="text-[18px] text-gray-400 mt-2 mb-5">
              Your post will appear in Feed, on your profile and in search
              results.
            </p>
            <p className="text-[18px] text-gray-400">
              Your default audience is set to Only me, but you can change the
              audience of this specific post.
            </p>
            <div className="flex gap-5 items-center mt-4 hover:bg-[#2C353D] px-2 py-4 rounded-lg">
              <div className="bg-[#53595e] flex items-center justify-center hover:opacity-90 rounded-[50%] p-3">
                <Image
                  src={"/icon/user.png"}
                  width={30}
                  height={30}
                  alt=""
                ></Image>
              </div>
              <div className=" leading-none w-[80%]">
                <p className="text-white font-medium text-xl">Public</p>
                <p className=" mt-[6px] text-[18px] text-gray-400">
                  Anyone on or off facebook
                </p>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioOptions"
                  className="rounded-[50%] w-6 h-6 mt-[4px] appearance-none bg-transparent  border border-gray-500 border-solid cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-5 items-center mt-4 hover:bg-[#2C353D] px-2 py-4 rounded-lg">
              <div className="bg-[#53595e] flex items-center justify-center hover:opacity-90 rounded-[50%] p-3">
                <Image
                  src={"/icon/user.png"}
                  width={30}
                  height={30}
                  alt=""
                ></Image>
              </div>
              <div className=" leading-none w-[80%]">
                <p className="text-white font-medium text-xl">Public</p>
                <p className=" mt-[6px] text-[18px] text-gray-400">
                  Anyone on or off facebook
                </p>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioOptions"
                  className="rounded-[50%] w-6 h-6 mt-[4px] appearance-none bg-transparent  border border-gray-500 border-solid cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-5 items-center mt-4 hover:bg-[#2C353D] px-2 py-4 rounded-lg">
              <div className="bg-[#53595e] flex items-center justify-center hover:opacity-90 rounded-[50%] p-3">
                <Image
                  src={"/icon/user.png"}
                  width={30}
                  height={30}
                  alt=""
                ></Image>
              </div>
              <div className=" leading-none w-[80%]">
                <p className="text-white font-medium text-xl">Public</p>
                <p className=" mt-[6px] text-[18px] text-gray-400">
                  Anyone on or off facebook
                </p>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioOptions"
                  className="rounded-[50%] w-6 h-6 mt-[4px] appearance-none bg-transparent  border border-gray-500 border-solid cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-5 items-center mt-4 hover:bg-[#2C353D] px-2 py-4 rounded-lg">
              <div className="bg-[#53595e] flex items-center justify-center hover:opacity-90 rounded-[50%] p-3">
                <Image
                  src={"/icon/user.png"}
                  width={30}
                  height={30}
                  alt=""
                ></Image>
              </div>
              <div className=" leading-none w-[80%]">
                <p className="text-white font-medium text-xl">Public</p>
                <p className=" mt-[6px] text-[18px] text-gray-400">
                  Anyone on or off facebook
                </p>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioOptions"
                  className="rounded-[50%] w-6 h-6 mt-[4px] appearance-none bg-transparent  border border-gray-500 border-solid cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* footer*/}
        <div className=" absolute  bg-[#2d3238] shadow-sm pb-3  px-3 bottom-0 left-0 right-0 ">
          <div className="flex gap-2 pt-3 items-center  ">
            <input type="checkbox" className="w-5 h-5 rounded-md" />
            <p className="text-[19px] text-gray-400 font-medium">
              Set as default audience
            </p>
          </div>
          <div className="flex items-center ml-96 gap-3">
            <button
              className="w-full justify-center text-blue-500 font-medium rounded-lg text-[14px]  text-center  px-5 py-3.5 hover:bg-[#2C353D] mt-8"
              onClick={onGoBack}
            >
              Cancel
            </button>
            <Button className=" w-[20%] " title={"Done"} />
          </div>
        </div>
        {/* footer*/}
      </div>
    </>
  );
}
