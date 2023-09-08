"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useFirebase } from "@/context/firebase";
import { useRouter } from "next/router";
import { firebaseAuth } from "@/context/firebase";

const LoginForm = () => {
  const { user, googleSignIn } = useFirebase();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();

      router.push(!user ? "/Register" : "/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-[#262d34] p-1 border-2 border-gray-700 rounded-lg shadow-lg px-5 py-8 mx-3 items-center justify-center md:align-middle lg:p-8 lg:w-[576px]  "
    >
      <div className="mb-5">
        <p className="text-3xl text-white font-semibold  mb-3">Welcome back</p>
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
            <p className=" text-[12px] text-red-500">Email is Required.</p>
          )}
        </div>
        <div className="lg:w-full">
          <label className="label">Password</label>

          <input
            className="input mb-1"
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
            <span className="text-[12px] text-red-500  ">
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
          <Image
            className="w-5 h-5  mt-[4px]"
            src="/Assests/logos/google.png"
            alt=""
            width={20}
            height={20}
          />
          <button
            className="pl-2 text-[14px] text-white font-[500]"
            onClick={handleSignIn}
          >
            Sign up with Google
          </button>
        </div>
        <div className="loginBtns">
          <Image
            className="w-6 h-5 mt-[4px] "
            src="/Assests/logos/github.png"
            alt=""
            width={24}
            height={20}
          />
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
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
