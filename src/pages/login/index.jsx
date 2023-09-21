"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import LoginForm from "@/components/login/form";
import { FirebaseProvider } from "../../context/firebase";
import { useFirebase } from "../../context/firebase";
import Link from "next/link";

const Login = () => {
  const firebase = useFirebase();

  // useEffect(() => {
  //   if (firebase.isLoggedIn) {
  //     <Link href="/"></Link>;
  //   }
  // }, [firebase]);
  return (
    <>
      <FirebaseProvider>
        <div className="grid grid-rows-[auto-1fr-auto] min-h-screen">
          <div className="flex  justify-center items-center ">
            <Image
              className="  w-[120px]  py-8 mb-6 md:w-[150px] md:mb-10 md:mt-4"
              src="/Assests/logos/fatan.png"
              alt=""
              width={120}
              height={120}
            />
          </div>
          <div className=" flex justify-center items-center bg-[#1e252b]  ">
            <div className=" mx-6  mb-[30px] sm:flex  md:mb-[0] lg:mb-[0]  ">
              <div>
                <LoginForm />
              </div>

              <div>
                <Image
                  className=" object-contain hidden lg:flex lg:items-center lg:justify-center lg:ml-4 lg:mt-16"
                  src="/Assests/image/wallpaper.png"
                  alt=""
                  width={621}
                  height={208}
                />
              </div>
              <div />
            </div>
          </div>

          <div className=" w-full p-4  md:flex md:items-center md:justify-between  md:p-6 mt-20 ">
            <div className="w-[100%] h-[1px] bg-gray-700 ">
              <div className="flex justify-between  mx-1 lg:mx-6">
                <p className="text-gray-400 font-normal pt-2 text-[9px] md:text-[14px]  md:px-4 md:pt-5 lg:text-[14px]  lg:pl-8">
                  {" "}
                  &#xA9;Copyright fatan
                </p>
                <p className="text-gray-400   font-normal pt-2 text-[9px]  md:text-[14px]   md:px-4 md:pt-5  lg:text-[14px] lg:pr-8">
                  Developed by vividia software
                </p>
              </div>
            </div>
          </div>
        </div>
      </FirebaseProvider>
    </>
  );
};

export default Login;
