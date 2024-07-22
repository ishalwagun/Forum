"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useFirebase } from "@/context/firebase";
import { useRouter } from "next/router";
import Button from "../loadingButton/button";
import axios from "axios";
import Toaster from "../../../toaster";
import { workspaceId } from "@/config/constants";
const LoginForm = () => {
  const {
    user,
    googleSignIn,
    facebookSignIn,
    googleAccessToken,
    facebookAccessToken,
  } = useFirebase();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLoginSuccess = (firstLoginValue) => {
    if (firstLoginValue) {
      router.push("/settings"); // Redirect to profile setup for first login
    } else {
      router.push("/dashboard"); // Redirect to the dashboard for subsequent logins
    }
  };

  const handleLoginFailure = () => {
    // Handle the case when the user is not registered
    toast.error("User is not registered. Please sign up.");
  };

  const googleHandleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const facebookHandleSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      let requestData;

      if (googleAccessToken) {
        // Signing in with Google, use access_token
        requestData = {
          access_token: googleAccessToken,
          workspaceId: workspaceId,
        };
      } else if (facebookAccessToken) {
        requestData = {
          access_token: facebookAccessToken,
          workspaceId: workspaceId,
        };
      } else {
        // Signing in with create button, use ...data
        requestData = {
          ...data,
          workspaceId: workspaceId,
        };
      }
      setLoading(true);
      axios
        .post("https://api.vividiainfosys.com/api/app-user/auth", requestData)
        .then((res) => {
          const firstLoginValue = res.data.data.first_login;

          Toaster({ message: "Login Successfull", type: "success" });
          handleLoginSuccess(firstLoginValue);
        })
        .catch((err) => {
          if (err.response && err.response.status === 40) {
            Toaster({ message: "User not registered", type: "error" });
          } else {
            Toaster({
              message: "Login failed. Please try again.",
              type: "error",
            });
          }
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-[#262d34] p-1 border-2 border-gray-700 rounded-lg shadow-lg px-5 py-8 mx-3 items-center justify-center md:align-middle lg:p-8 lg:w-[576px]  "
    >
      <div className="mb-5">
        <p className="text-3xl text-white font-semibold  mb-3">Welcome back</p>
        <p className="text-gray-400 text-[15px] ">
          Start your website in seconds. Don't have an account?
          <Link href="/Register">
            <span className="text-blue-500 font-medium ml-1">Sign up</span>
          </Link>
        </p>
      </div>
      <div className="lg:flex">
        <div div className="lg:mr-5 lg:w-full">
          <label className="label">Email</label>
          {user && <p>email is already registered.</p>}
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
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
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
            src="./Assests/logos/google.png"
            alt="google"
            width={20}
            height={20}
          />
          <button
            className="pl-2 text-[14px] text-white font-[500]"
            onClick={googleHandleSignIn}
          >
            Sign in with Google
          </button>
        </div>
        <div className="loginBtns">
          <Image
            className="w-6  h-6  mb-[1px]  "
            src="./Assests/logos/facebook.png"
            alt="facebook"
            width={24}
            height={24}
          />
          <button
            className="pl-2 text-[14px] text-white font-[500]"
            onClick={facebookHandleSignIn}
          >
            Sign in with Facebook
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
      <Button title={"Sign in"} loading={loading} />
    </form>
  );
};

export default LoginForm;
