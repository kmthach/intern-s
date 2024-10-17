import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Checkbox } from "@nextui-org/checkbox";
import { EditIcon } from "@/app/(dashboard)/account/_components/Icon";
import Image from "next/image";
import { Button } from "@nextui-org/button";
export const TechCard = () => {
  return (
    <div className="flex p-10">
      <Card className="w-[35%]">
        <CardHeader>
          <div className="flex">
            <div>Nodejs</div>
            <div>Edit</div>
            <EditIcon />
            <Checkbox />
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            width={250}
            height={250}
            alt="Nodejs Image"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          />
          <Divider />
          <CardFooter>
            <Button>View Question Bank</Button>
            <div className="text-green-600">Question: 20</div>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};
