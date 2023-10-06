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

          <div className=" w-full  md:flex md:items-center md:justify-between  mt-20 ">
            <div className="w-[100%] h-[1px] bg-gray-700 ">
              <div className="flex justify-between  mx-1 lg:mx-6 p-4">
                <p className="text-gray-400 font-normal  text-[9px] md:text-[14px]  lg:text-[14px]  ">
                  &#xA9;Copyright Fatan
                </p>
                <p className="text-gray-400   font-normal text-[9px]  md:text-[14px]   md:px-4   lg:text-[14px] ">
                  Developed by Vividia Infosys
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
