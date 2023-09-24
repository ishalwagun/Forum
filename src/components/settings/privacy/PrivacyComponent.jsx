import React from "react";
import Switch from "@/components/switch/Switch";

export default function PrivacyComponent() {
  return (
    <div className="flex items-center mt-6">
      <div className=" mr-4 ">
        <Switch />
      </div>
      <div className="">
        <p className="font-semibold">Public Profile</p>
        <p className="text-[13px]">
          Enable to make your profile viewable by anyone.
        </p>
      </div>
    </div>
  );
}
