"use client";
import React from "react";
import Image from "next/image";
import LoginForm from "@/components/login/form";
import RegisterForm from "@/components/register/form";
import { FirebaseProvider } from "../../context/firebase";

const Register = () => {
  return (
    <>
      <FirebaseProvider>
        <div className="grid grid-rows-[auto-1fr-auto] min-h-screen  ">
          <div className="  flex  justify-center items-center ">
            <Image
              className="  w-[120px]  py-8 mb-6 md:w-[150px] md:mb-10 md:mt-4"
              src="./Assests/logos/fatan.png"
              alt=""
              width={120}
              height={120}
            />
          </div>

          <div className="flex justify-center items-center  bg-[#1e252b] mx-6  mb-[30px] sm:flex  md:mb-[0] lg:mb-[0] overflow-auto pb-[100px] ">
            <div>
              <RegisterForm />
            </div>

            <div>
              <Image
                className=" object-contain hidden lg:flex lg:items-center lg:justify-center lg:ml-4 lg:mb-10"
                src="./Assests/image/wallpaper.png"
                alt=""
                width={621}
                height={208}
              />
            </div>

            <div />
          </div>

          <div className="w-full  ">
            <div className="w-[100%] h-[1px] bg-gray-700 "></div>
            <div className="flex justify-between items-center text-[9px] md:text-[14px]  p-4 mx-1 lg:mx-6">
              <p className="text-gray-400 font-normal ">
                &#xA9;Copyright Fatan
              </p>
              <p className="text-gray-400   font-normal ">
                Developed by Vividia Infosys
              </p>
            </div>
          </div>
        </div>
      </FirebaseProvider>
    </>
  );
};

export default Register;
