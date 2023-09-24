import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/formField/Input";
import ButtonMuted from "@/components/button/button-muted/Button";
import ButtonAccent from "@/components/button/button-accent/Button";
import Switch from "@/components/switch/Switch";

export default function SecurityComponent() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex-col flex gap-6">
        <div className="w-full ">
          <Input
            label="CURRENT PASSWORD"
            type="password"
            icon="/icon/lock.png"
          />
        </div>

        <div>
          <div className="lg:flex  gap-9">
            <div className="w-full mb-6 lg:mb-0">
              <Input
                label="NEW PASSWORD"
                type="password"
                icon="/icon/lock.png"
              />
            </div>
            <div className="w-full">
              <Input
                label="REPEAT PASSWORD"
                type="password"
                icon="/icon/lock.png"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-[60%]">
          <p className="text-[#A2A5B9]">
            You can enable 2 factor authentication anytime to improve your
            account privacy and security.
          </p>
        </div>
        <div className=" lg:flex items-center">
          <div className=" basis-[80%] flex items-center">
          <div className="mr-7">
          <Switch />
          </div>
            <div className="flex-col lg:basis-[60%]">
              <p className="font-semibold">Enable 2 factor auth</p>
              <p className="text-[13px]">
                This will send an additional code to your phone number.
              </p>
            </div>
          </div>
          <div className="basis-[50%]">
            <Input label="PHONE NUMBER" type="number" icon="/icon/phone.png" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6 items-center">
        <ButtonMuted title="Save changes" />
        <ButtonAccent title="Advanced" />
      </div>
    </form>
  );
}
