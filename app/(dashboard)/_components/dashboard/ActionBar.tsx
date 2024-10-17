import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

import {
  InterviewIcon,
  AddIcon,
  ExcelIcon,
} from "@/components/icons/ActionBarIcons";

export default function ActionBar() {
  return (
    <div className="flex w-full gap-3">
      <Input
        size="md"
        placeholder="Search students, projects, interviews,..."
        // className="w-[700px]"
        className="flex-1"
      />
      <div className="flex min-w-max gap-3">
        <Button
          color="warning"
          size="md"
          startContent={<AddIcon />}
          className="text-white"
          variant="shadow"
        >
          New Intern
        </Button>

        <Button
          color="primary"
          size="md"
          startContent={<InterviewIcon />}
          className="text-white"
          variant="shadow"
        >
          Schedule Interview
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
      </div>
    </div>
  );
}
