import React from "react";
import AccountTable from "@/app/(dashboard)/intern/_components/AccountTable";
import ActionBar from "@/app/(dashboard)/intern/_components/ActionBar";

export default function AccountPage() {
  return (
    <div>
      <h1 className="p-6 text-left text-2xl font-bold capitalize text-black">
        Intern management
      </h1>
      <ActionBar />
      <AccountTable />
    </div>
  );
}
