import React from "react";
import SettingsLayout from "@/components/settings/layout";
import Image from "next/image";
import wallpaper from "/public/Assests/image/wallpaper.png";
import { useForm } from "react-hook-form";

import GeneralComponent from "@/components/settings/general/General";

export default function General() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="  text-white   z-50 basis-[75%] bg-[#2d333b]  py-7 px-6 rounded-lg justify-center items-center">
        <div className="text-[20px] pl-4 font-normal mb-7">
          General Settings
        </div>

        <div className=" lg:flex lg:flex-row   justify-between">
          <div className="basis-[80%]">
            <GeneralComponent />
          </div>
          <div className="">
            <Image
              className=" hidden lg:block h-[250px] object-contain mt-20 "
              src={wallpaper}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
