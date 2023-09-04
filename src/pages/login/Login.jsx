"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import wallpaper from "../../Assests/wallpaper.png";
import google from "../../Assests/google.png";
import git from "../../Assests/github.png";
import fatan from "../../Assests/fatan.png";
import Link from "next/link";

//import Dashboard from "../dashboard/Dashboard";
import Image from "next/image";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="grid grid-rows-[auto-1fr-auto] min-h-screen">
        <div className="flex  justify-center items-center ">
          <Image
            className="  w-[120px]  py-8 mb-6 md:w-[150px] md:mb-10 md:mt-4"
            src={fatan}
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center bg-[#1e252b]  ">
          <div className=" mx-6  mb-[30px] sm:flex  md:mb-[0] lg:mb-[0]  ">
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" bg-[#262d34] p-1 border-2 border-gray-700 rounded-lg shadow-lg px-5 py-8 mx-3 items-center justify-center md:align-middle lg:p-8 lg:w-[576px]  "
              >
                <div className="mb-5">
                  <p className="text-3xl text-white font-semibold  mb-3">
                    Welcome back
                  </p>
                  <p className="text-gray-400 text-[15px] ">
                    Start your website in seconds. Don't have an account?{" "}
                    <Link href="/Register">
                      <span className="text-blue-500 font-medium">Sign up</span>
                    </Link>
                  </p>
                </div>
                <div className="lg:flex">
                  <div className="lg:mr-5 lg:w-full">
                    <label className="label">Email</label>
                    <input
                      className=" input"
                      type="text"
                      placeholder=""
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && (
                      <p className=" text-[12px] text-red-500">
                        Email is Required.
                      </p>
                    )}
                  </div>
                  <div className="lg:w-full">
                    <label className="label">Password</label>
                    <input
                      className="input"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                          message:
                            "Password should include at least one uppercase, one numeric value and one special character",
                        },
                        minLength: {
                          value: 8,
                          message: "Minimum Required length is 8",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum Required length is 20",
                        },
                      })}
                    />

                    {errors.password && (
                      <span className="text-sm text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-center items-center gap-6 mb-6">
                  <div className="h-[1px] w-[100%] bg-gray-700"></div>
                  <div className="text-gray-400 text-center text-[16px] font-medium">
                    or
                  </div>
                  <div className="h-[1px] w-[100%] bg-gray-700"></div>
                </div>

                <div className="mb-5">
                  <div className="loginBtns">
                    <Image className="w-5 h-5  mt-[4px]" src={google} alt="" />
                    <button className="pl-2 text-[14px] text-white font-[500]">
                      Sign up with Google
                    </button>
                  </div>
                  <div className="loginBtns">
                    <Image className="w-6 h-5 mt-[4px] " src={git} alt="" />
                    <button className="pl-2 text-[14px] text-white font-[500]">
                      Sign up with Github
                    </button>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex text-white">
                    <input className="bg-gray-600 " type="checkbox" />
                    <p className="pl-2  text-[10px] mt-[3px] md:mt-0 md:text-[12px] lg:mt-0 lg:text-[14px]">
                      Remember me
                    </p>
                  </div>
                  <a href="#">
                    <p className="text-blue-500 text-[10px] md:text-[12px] lg:text-[14px] mt-1 md:mt-0 lg:mt-0">
                      Forgot Password?
                    </p>
                  </a>
                </div>

                <button className="w-full items-center justify-center mt-8 px-5 py-3.5 bg-blue-600 rounded-lg text-white text-[14px] font-[500] hover:bg-blue-500">
                  {/* <Link to="/dashboard">Sign in</Link> */}
                  Sign in
                </button>
              </form>
            </div>

            <div>
              <Image
                className=" object-contain hidden lg:flex lg:items-center lg:justify-center lg:ml-4 lg:mt-16"
                src={wallpaper}
                alt=""
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
    </>
  );
};

export default Login;
