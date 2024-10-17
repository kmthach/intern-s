import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

export type ActionBarProps = {
  className?: string;
};
export default function ActionBar(props: ActionBarProps) {
  return (
    <div className="flex gap-3">
      <Input size="lg" type="email" label="Email" />;
      <div className="flex">
        <Button color="success" size="sm">
          Export to Excel
        </Button>

        <Button color="success" size="sm">
          Delete
        </Button>

        <Button color="success" size="sm">
          New Project
        </Button>

        <Button color="success" size="sm">
          Export to Excel
        </Button>
      </div>
    </div>
  );
}
