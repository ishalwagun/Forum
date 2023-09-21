import React, { useState, useRef } from "react";
import profile from "/public/icon/profile.png";
import icon from "/public/icon/new.png";
import follow from "public/icon/Follow.png";
import popular from "/public/icon/popular.png";
import Image from "next/image";
import photo from "/public/icon/photoupload.png";
import ModalPost from "@/components/modalpost";

const MainBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <>
      <div className=" w-[100%]  ">
        <div className="lg:hidden flex  bg-[#262d34] items-center   rounded-[0.625rem] p-[0.62rem] justify-between mb-[1.25rem] ml-[25px] lg:ml-0 mr-[25px] md:mr-0">
          <div className="flex gap-[0.38rem] items-center p-[0.38rem] py-[0.31rem]  hover:bg-[#2C353D] hover:rounded-[0.375rem]">
            <div className="bg-[#2C353D] p-[0.25rem] rounded-[0.375rem] ">
              <Image src={icon} alt="" />
            </div>

            <p className="text-white text-[0.75rem] font-semibold">Newest</p>
          </div>
          <div className="flex gap-[0.38rem] items-center p-[0.38rem] py-[0.31rem]  hover:bg-[#2C353D] hover:rounded-[0.375rem]">
            <div className="bg-[#2C353D] p-[0.25rem] rounded-[0.375rem] ">
              <Image src={popular} alt="" />
            </div>

            <p className="text-white text-[0.75rem] font-semibold">Popular</p>
          </div>
          <div className="flex gap-[0.38rem] items-center p-[0.38rem] py-[0.31rem] hover:bg-[#2C353D] hover:rounded-[0.375rem]">
            <div className="bg-[#2C353D] p-[0.25rem] rounded-[0.375rem] ">
              <Image src={follow} alt="" />
            </div>

            <p className="text-white text-[0.75rem] font-semibold mr-[0.25rem]">
              Following
            </p>
            <div className="bg-[#FF6934] rounded-[0.125rem] py-[0.19rem] px-[0.38rem] text-[0.5625rem] text-white font-semibold leading-[0.875rem]">
              24
            </div>
          </div>
        </div>
        <div className=" bg-[#262d34] items-center  flex gap-[20px] rounded-[16px] justify-between  mb-[20px] p-[1.25rem] ml-[25px] lg:ml-0 mr-[25px] md:mr-0">
          <div className="contentImg">
            <Image
              className=" w-[2.45194rem]
h- [2.38594rem]"
              src={profile}
              alt=""
            />
          </div>

          <button
            className=" flex flex-1 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <input
              className=" bg-[#2c353d] border-none flex flex-1 rounded-[6px] p-[11px] text-[#858EAD] outline-none"
              type="text"
              placeholder="Let's share what going on your mind..."
            />
          </button>
          <ModalPost show={showModal} onClose={() => setShowModal(false)}>
            <div className=" w-[100%] pb-8 pt-2   ">
              <textarea
                rows="2"
                className=" w-[100%] p-2 mt-[16px] text-white text-3xl  bg-[#2d3238]  pr-[16px] pb-[40px] outline-none  placeholder:text-3xl flex flex-1 max-w-[550px]:break-words
            "
                placeholder="What's on your mind, Isha?"
              />
              {image ? (
                <Image
                  className=" mt-[16px] h-40 w-full object-contain items-center "
                  src={URL.createObjectURL(image)}
                  width={700}
                  height={30}
                  alt=""
                ></Image>
              ) : null}
            </div>
            <div className="flex items-center justify-between border border-gray-700  p-[10px]">
              <p className="text-[15px] font-semibold text-[#E4E6EB]">
                Add to your post
              </p>
              <div onClick={handleImageClick}>
                <Image src={photo} width={30} height={30} alt=""></Image>

                <input
                  className="hidden"
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  multiple
                />
              </div>
            </div>
          </ModalPost>

          {/* <div className="btn">
            <button className=" bg-[#ff6934] text-white border-none text-[13px] font-medium p-[10px] ml-[16px] flex-shrink-0 hover:cursor-pointer rounded-[6px] w-[100px]">
              Create Post
            </button>
          </div> */}
        </div>
        {/* content */}
      </div>
    </>
  );
};

export default MainBar;
