import React from "react";
import AccountTable from "@/app/(dashboard)/account/_components/AccountTable";
import ActionBar from "@/app/(dashboard)/account/_components/ActionBar";

export default function AccountPage() {
  return <div >
    <h1 className="text-black text-2xl font-bold capitalize text-left p-6">Intern management</h1>
    <ActionBar/>
    <AccountTable/>
    </div>;
}
