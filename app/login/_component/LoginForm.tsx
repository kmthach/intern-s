"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  GoogleIcon,
} from "@/app/login/_component/Icon";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-[30%] rounded-xl bg-white p-10 shadow-xl">
          <div className="mb-10 text-center text-2xl font-semibold">
            Welcome!
          </div>

          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              labelPlacement="outside"
              className="mb-10"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}

            <div className="mt-4">
              <Checkbox defaultSelected size="md"></Checkbox>
              <span className="-ml-1 mr-20 mt-0.5 text-xs">Remember me</span>
              <span className="mt-0.5 text-xs text-blue-500">
                Forgot password?
              </span>
            </div>

            <Button type="submit" className="mt-4 w-[100%]" color="primary">
              Sign in
            </Button>
          </form>

          <div className="flex justify-center">
            <hr className="mt-6 h-0.5 w-44 bg-gray-300" />
            <p className="ml-1 mr-1 mt-3 text-gray-300">OR</p>
            <hr className="mt-6 h-0.5 w-44 bg-gray-300" />
          </div>

          <Button
            className="mt-4 w-[100%]"
            variant="bordered"
            startContent={<GoogleIcon />}
            onPress={() => signIn("google")}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
};
