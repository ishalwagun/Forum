import React, { useState, useRef } from "react";
import Image from "next/image";
import coverPhoto from "/public/1.jpg";
import camera from "/public/icon/camera.png";
import profile from "/public/icon/image.jpg";
import plus from "/public/icon/plus.png";

function Timeline() {
  const [image, setImage] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(event.target.files[0]);
  };

  return (
    <>
      <div className="relative">
        {image ? (
          <Image
            className=" w-[100%]  h-[380px] md:h-[430px] object-cover rounded-md hover:opacity-70"
            src={URL.createObjectURL(image)}
            width={50}
            height={50}
            alt="cover"
          ></Image>
        ) : (
          <Image
            className=" w-[100%]  h-[380px] md:h-[430px] object-cover rounded-md hover:opacity-70"
            src={coverPhoto}
            alt
          ></Image>
        )}

        <div className="absolute top-2 left-3 flex  hover:cursor-pointer">
          <Image onClick={handleImageClick} src={camera} alt="camera"></Image>
          <input
            className="hidden"
            type="file"
            ref={inputRef}
            onChange={handleCoverImageChange}
          />
        </div>

        <div className=" flex items-center justify-center relative ">
          {profileImage ? (
            <Image
              className="  rounded-[50%] w-[110px] h-[110px] object-cover absolute"
              src={URL.createObjectURL(profileImage)}
              alt=""
              width={110}
              height={110}
            ></Image>
          ) : (
            <Image
              className="  rounded-[50%] w-[110px] h-[110px] object-cover absolute"
              src={profile}
              alt=""
              width={110}
              height={110}
            ></Image>
          )}
          <div
            onClick={handleImageClick}
            className=" flex items-center justify-center absolute left-[51.8%] bottom-[-55px] w-[30px] h-[30px] rounded-[15px] bg-[#3D70B2]"
          >
            <Image src={plus} alt="" width={16}></Image>
          </div>
          <input
            className="hidden"
            type="file"
            ref={inputRef}
            onChange={handleProfileImageChange}
          />
        </div>
      </div>
      <div className=" hidden  lg:flex  justify-between text-white font-semibold text-[14.4px] pt-[8px]">
        <div className="lg:flex gap-2.5 ">
          <div className="bg-[#262D34] px-[22px] py-[8px] flex items-center justify-center rounded-md">
            Timeline
          </div>
          <div className="bg-[#262D34] px-[22px] py-[8px] flex items-center justify-center rounded-md">
            About
          </div>
        </div>

        <div className="lg:flex  gap-2.5">
          <div className="bg-[#262D34] px-[22px] py-[8px] flex items-center justify-center rounded-md">
            Friends
          </div>
          <div className="bg-[#262D34] px-[22px] py-[8px] flex items-center justify-center rounded-md">
            Photos
          </div>
        </div>
      </div>
      <div className="items-center flex-col flex justify-center">
        <p className="text-[#FAFAFA] text-[22.4px] font-semibold mt-[60px] lg:mt-[10px]">
          Isha Lwagun
        </p>
        <p className="text-[#a2a5b9] text-[14.4px] font-medium">
          Media Influencer
        </p>
      </div>
    </>
  );
}

export default Timeline;
