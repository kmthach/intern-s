import React from "react";
import { Divider } from "@nextui-org/divider";
import { AccountManagementIcon, DashboardIcon } from "./Icons";
import Navigation from "./Navigation";
export default function SideBar() {
  return (
    <div className="flex w-sidebar-expand flex-col items-center">
      {/* Title */}
      <p className="my-10 text-[26px] font-bold text-title">Intern System</p>
      <Divider orientation="horizontal" className="bg-grey" />

      {/* Navigation */}
      <Navigation className="mt-10" />

      {/* Footer*/}
    </div>
  );
}
