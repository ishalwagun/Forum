import React from "react";
import SettingsLayout from "@/components/settings/layout";
import Image from "next/image";
import wallpaper from "/public/Assests/image/wallpaper.png";
import { Form, useForm } from "react-hook-form";

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
    <SettingsLayout>
      <div className="  text-white   z-50 basis-[75%] bg-[#2d333b]  py-7 px-6 rounded-lg">
        <div className="text-[20px] font-normal">General Settings</div>

        <div className="flex-col lg:flex lg:flex-row items-start p-4">
          <div>
            <form></form>
          </div>
          <div>
            <Image
              className="object-contain w-full h-[300px]"
              src={wallpaper}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
}
