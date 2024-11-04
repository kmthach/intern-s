import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Checkbox } from "@nextui-org/checkbox";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { EditIcon } from "@/app/(dashboard)/technology/_components/Icons";
import { Link } from "@nextui-org/link";

const cardData = [
  {
    id: 1,
    name: "Nodejs",
    imgeSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    questionCount: 20,
  },
  {
    id: 2,
    name: "Reactjs",
    imgeSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    questionCount: 20,
  },
  {
    id: 3,
    name: "AWS",
    imgeSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    questionCount: 20,
  },
];

export const TechCard = () => {
  return (
    <div className="grid h-full grid-cols-3 gap-5">
      {cardData.map((card) => (
        <Card key={card.id} className="w-full">
          <CardHeader>
            <div className="flex w-full justify-between">
              <div className="text-md font-bold">{card.name}</div>

              <div className="flex space-x-1">
                <EditIcon /> <span>Edit</span>
              </div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Image
              className="my-3 ml-10"
              width={200}
              height={200}
              alt="Nodejs Image"
              src={card.imgeSrc}
            />

            <Divider />

            <CardFooter className="flex justify-between text-sm">
              <Button
                className="tfont-semibold bg-gray-400 text-white"
                size="sm"
                href="/"
              >
                View Question Bank
              </Button>
              <div className="text-green-600">
                Question: {card.questionCount}
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
