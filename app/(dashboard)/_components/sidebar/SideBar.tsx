import React from "react";
import { Divider } from "@nextui-org/divider";
import { AccountManagementIcon, DashboardIcon } from "./Icons";
import Navigation from "./Navigation";
export default function SideBar() {
  return (
    <div className="w-sidebar-expand flex flex-col items-center">
      {/* Title */}
      <p className="text-title my-10 text-[26px] font-bold">Intern System</p>
      <Divider orientation="horizontal" className="bg-grey" />

      {/* Navigation */}
      <Navigation className="mt-10" />

      {/* Footer*/}
    </div>
  );
}
