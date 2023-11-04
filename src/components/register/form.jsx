import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { CountryDropdown } from "react-country-region-selector";
import { useRouter } from "next/router";
import { useFirebase } from "@/context/firebase";
import Button from "../loadingButton/button";
import { toast } from "react-toastify";
import { workspaceId } from "@/config/constants";

const RegisterForm = () => {
  const { user, googleSignIn, facebookSignIn } = useFirebase();
  const router = useRouter();
  const firebase = useFirebase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      router.push("/login");
    }
  }, [firebase, router]);

  const googleHandleSignIn = async () => {
    try {
      await googleSignIn();

      router.push(user ? "/login" : "/Register");
    } catch (error) {
      console.log(error);
    }
  };

  const facebookHandleSignIn = async () => {
    try {
      await facebookSignIn();

      router.push(user ? "/login" : "/Register");
    } catch (error) {
      console.log(error);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    const requestData = {
      ...data,
      workspaceId: workspaceId,
    };
    console.log(requestData);

    axios
      .post("https://api.vividiainfosys.com/api/app-user/register", requestData)
      .then((res) => {
        console.log("succesfull");
        toast.success("Registered successfully.");
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
  };

  //check password event
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-[#262d34] p-1 border-2 border-gray-700 rounded-lg shadow-lg px-5 py-8 mx-3 items-center justify-center md:align-middle lg:p-8  "
    >
      <div className=" mb-5">
        <p className="text-3xl text-white font-semibold  mb-3">Welcome</p>
        <p className="text-gray-400 text-[15px] ">
          Start your website in seconds. Already have an account?{" "}
          <Link className="text-blue-500 font-medium" href="/login">
            Login here
          </Link>
        </p>
      </div>
      <div className="mb-6 lg:flex lg:gap-6">
        <div className="lg:w-full ">
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            {...register("firstName", {
              required: "This is a required field",
              maxLenght: 8,
            })}
          />

          {errors?.fullName && (
            <p className="text-red-500 text-[12px]">Full Name is required.</p>
          )}
        </div>
        <div className="lg:w-full ">
          <label className="label">Middle Name</label>
          <input
            className="input"
            type="text"
            {...register("middleName", {
              required: "This is a required field",
              maxLenght: 8,
            })}
          />
          {errors?.fullName && (
            <p className="text-red-500 text-[12px]">Full Name is required.</p>
          )}
        </div>
        <div className="lg:w-full ">
          <label className="label">Last Name</label>
          <input
            className="input"
            type="text"
            {...register("lastName", {
              required: "This is a required field",
              maxLenght: 8,
            })}
          />

          {errors?.fullName && (
            <p className="text-red-500 text-[12px]">Full Name is required.</p>
          )}
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:mr-5 lg:w-full mb-6">
          <label className="label">Email</label>

          <input
            className=" input"
            type="email"
            placeholder=""
            {...register("email", {
              required: "Email is Required",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <p className=" text-[12px] text-red-500">Email is required.</p>
          )}
        </div>
      </div>
      <div className="lg:flex ">
        <div className=" dropdown lg:mr-5 lg:w-full">
          <label className="label">Country</label>

          <Controller
            name="country"
            render={({ field: { name, onChange, value } }) => (
              <CountryDropdown
                name={name}
                value={value}
                onChange={onChange}
                rules={{ required: "Country is required" }}
                classes="input h-[56.5px] mb-6 "
              />
            )}
            control={control}
          />
          {errors?.country && (
            <p className="text-red-500 text-[12px]">
              This is a required field.
            </p>
          )}
        </div>

        <div className="lg:w-full mb-6">
          <label className="label">Phone Number</label>
          <input
            className="input"
            type="number"
            {...register("number", {
              required: "Number is Required",
              pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            })}
          />

          {errors?.number && (
            <p className="text-red-500 text-[12px]">Number is Invalid</p>
          )}
        </div>
      </div>

      <div className="lg:flex">
        <div className="lg:mr-5 lg:w-full mb-6">
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

        <div className="lg:w-full mb-6 ">
          <label className="label">Confirm Password</label>
          <input
            className="input"
            type="password"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            {...register("confirmPassword", {
              required: "confirm password is required",
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
          />

          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
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
            onClick={googleHandleSignIn}
          >
            Sign up with Google
          </button>
        </div>
        <div className="loginBtns">
          <Image
            className="w-6 h-6  "
            src="/Assests/logos/facebook.png"
            alt=""
            width={24}
            height={24}
          />
          <button
            className="pl-2 text-[14px] text-white font-[500]"
            onClick={facebookHandleSignIn}
          >
            Sign up with Facebook
          </button>
        </div>
      </div>
      <div className="text-[12px]">
        <div className="flex items-start  text-white gap-2 mb-3 ">
          <input
            className="bg-gray-600  h-[35px] w-[14.5px]  lg:h-[19px] lg:w-[16px] lg:mt-[2px]"
            type="checkbox"
          />
          <p className="  leading-[18px] mt-[8px] lg:mt-[3px]">
            By signing up, you are creating a Sendinblue account, and you agree
            to Vanguard's <span className="text-blue-500">Terms of Use</span>{" "}
            and
            <span className="text-blue-500"> Privacy Policy</span>.
          </p>
        </div>
        <div className="flex text-white gap-2">
          <input
            className="bg-gray-600  h-[14px] w-[15.5px] lg:h-[20px] lg:w-[16px] "
            type="checkbox"
          />
          <p>Email me about product updates and resources.</p>
        </div>
      </div>

      {/* <Button
        title={"Create account"}
        type="submit"
        loading={loading}
        onClick={() => {
          setLoading(true);
        }}
      /> */}
      <button className="text-white">create</button>
    </form>
  );
};

export default RegisterForm;
