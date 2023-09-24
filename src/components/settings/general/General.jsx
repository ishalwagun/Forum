import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/formField/Input";
import ButtonMuted from "@/components/button/button-muted/Button";
import ButtonAccent from "@/components/button/button-accent/Button";
export default function GeneralComponent() {
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
        <div className="lg:flex  gap-9">
          <div className="w-full mb-6 lg:mb-0">
            <Input
              label="FIRST NAME"
              type="text"
              placeholder="FIRST NAME"
              icon="/icon/user.png"
            />
          </div>
          <div className="w-full">
            <Input
              label="LAST NAME"
              type="text"
              placeholder="LAST NAME"
              icon="/icon/user.png"
            />
          </div>
        </div>

        <div>
          <div className="lg:flex  gap-9">
            <div className="w-full mb-6 lg:mb-0">
              <Input label="EMAIL" type="email" icon="/icon/email.png" />
            </div>
            <div className="w-full">
              <Input label="BACKUP EMAIL" type="email" icon="/icon/email.png" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Input
            label="ADDRESS"
            type="text"
            icon="/icon/location.png"
            placeholder="Please enter your address..."
          />
        </div>

        <div>
          <div className="lg:flex  gap-9">
            <div className="w-full mb-6 lg:mb-0">
              <Input label="CITY" type="text" icon="/icon/location.png" />
            </div>
            <div className="w-full">
              <Input label="COUNTRY" type="text" icon="/icon/globe.png" />
            </div>
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
