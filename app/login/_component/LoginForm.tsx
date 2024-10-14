"use client";

import React from "react";
import { Input } from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon,GoogleIcon } from "@/app/login/_component/Icon";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

export const LoginForm = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="flex justify-center">
        
        <div className="w-[25%]">
        <div className="flex justify-center font-semibold text-2xl mb-10">Welcome Back!</div>
          <Input
            type="email"
            label="Email"
            variant="bordered"
            labelPlacement="outside"
            className="mb-10"
            placeholder="example@mail.com"
          ></Input>
          <Input
            label="Password"
            labelPlacement="outside"
            variant="bordered"
            placeholder="Enter password"
            endContent={
              <button type="button" onClick={toggleVisible}>
                {visible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
              </button>
            }
            type={visible ? "text" : "password"}
          ></Input>

          <div className="mt-4 flex">
            <Checkbox defaultSelected size="md"></Checkbox>
            <span className="mr-20 mt-0.5 text-xs">Remember me</span>
            <span className="ml-2 mt-0.5 text-xs text-blue-500">
              Forgot password?
            </span>
          </div>

          <Button className="mt-4 w-[100%]" color="primary">
            Sign in
          </Button>

          <div className="flex justify-center">
            <hr className="mt-6 h-0.5 w-36 bg-gray-300" />
            <p className="ml-1 mr-1 mt-3 text-gray-300">OR</p>
            <hr className="mt-6 h-0.5 w-36 bg-gray-300" />
          </div>
        
          <Button className="mt-4 w-[100%]" 
          variant="bordered"
          startContent={<GoogleIcon/>}>
            Sign in with Google
          </Button>

        </div>
      </div>
    </>
  );
};
