import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { EditIcon } from "./Icons";
export default function PositionCard() {
  return (
    <Card>
      <CardHeader className="flex gap-1">
        <div className="flex w-full justify-between">
          <p className="text-lg font-semibold">Back-end</p>
          <div className="flex items-center gap-1">
            <Button
              variant="light"
              size="sm"
              startContent={<EditIcon />}
              className="text-grey"
            >
              Edit
            </Button>
            <Checkbox />
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 text-xs">
            <p className="font-semibold">Technology:</p>
            <p>.NET, ReactJS, Trello,...</p>
          </div>
          <div className="flex gap-1 text-xs">
            <p className="font-semibold">Rank:</p>
            <p>Intern, Fresher, Junior, Middle, Senior.</p>
          </div>
          <div className="flex gap-1 text-xs">
            <p className="font-semibold">Leader - Sub Leader:</p>
            <div className="flex gap-1">
              <p>John Doe</p>
              <p>-</p>
              <p>Jane Doe</p>
            </div>
          </div>
          <div className="flex gap-1 text-xs">
            <p className="font-semibold">Mentor:</p>
            <p>John Doe</p>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <p className="font-semibold">Zalo Group:</p>
            <Link
              href="https://zalo.me/g/123456789"
              isExternal
              className="text-xs"
            >
              https://zalo.me/g/123456789
            </Link>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <Chip color="default" className="text-xs" size="sm">
            <a href="/position/members">View Details</a>
          </Chip>
          <p className="text-xs text-success">500 members</p>
        </div>
      </CardFooter>
    </Card>
  );
}
