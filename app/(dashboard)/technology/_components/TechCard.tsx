import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Checkbox } from "@nextui-org/checkbox";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { EditIcon } from "@/app/(dashboard)/technology/_components/Icons";
import { Link } from "@nextui-org/link";

export const TechCard = () => {
  return (
    <div className="flex items-center p-10">
      <Card className="w-[40%]">
        <CardHeader>
          <div className="flex">
            <div className="text-lg font-bold">Nodejs</div>
            <EditIcon className="ml-[170px]" />
            <div className="text-md ml-1 mt-0.5">Edit</div>
            <Checkbox className="ml-3" />
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          <Image
            className="my-3 ml-10"
            width={250}
            height={250}
            alt="Nodejs Image"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          />

          <Divider />

          <CardFooter className="text-sm">
            <Button
              className="bg-gray-400 font-semibold text-white"
              size="sm"
              href="/"
            >
              View Question Bank
            </Button>
            <div className="ml-16 text-green-600">Question: 20</div>
          </CardFooter>
        </CardBody>
      </Card>

      <Card className="ml-10 w-[40%]">
        <CardHeader>
          <div className="flex">
            <div className="text-lg font-bold">Nodejs</div>
            <EditIcon className="ml-[170px]" />
            <div className="text-md ml-1 mt-0.5">Edit</div>
            <Checkbox className="ml-3" />
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          <Image
            className="my-3 ml-10"
            width={250}
            height={250}
            alt="Nodejs Image"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          />

          <Divider />

          <CardFooter className="text-sm">
            <Button
              className="bg-gray-400 font-semibold text-white"
              size="sm"
              href="/"
            >
              View Question Bank
            </Button>
            <div className="ml-16 text-green-600">Question: 20</div>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};
