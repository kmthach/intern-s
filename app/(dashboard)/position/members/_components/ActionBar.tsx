import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";
import {
  ShowIcon,
  ExcelIcon,
  FilterIcon,
} from "@/components/icons/ActionBarIcons";
export type ActionBarProps = {
  className?: string;
};
export default function ActionBar(props: ActionBarProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-1 font-semibold">
        <p>Back-end Position </p>
        <p className="text-primary-500">{" > Member"}</p>
      </div>
      <div className="flex min-w-max gap-3">
        <Button
          color="primary"
          size="md"
          startContent={<ShowIcon />}
          className="text-white"
          variant="shadow"
        >
          View Tasks
        </Button>
        <Button
          color="success"
          size="md"
          startContent={<ExcelIcon />}
          className="text-white"
          variant="shadow"
        >
          Export to Excel
        </Button>

        <Button
          color="default"
          size="md"
          startContent={<FilterIcon />}
          variant="shadow"
          className=""
          //   onClick={() => props.toggleShowFilter()}
        >
          Filter
        </Button>
      </div>
    </div>
  );
}
