import React from "react";
import AccountTable from "@/app/(dashboard)/account/_components/AccountTable";
import Butt from "@/app/(dashboard)/account/_components/Buttons";

export default function AccountPage() {
  return <div>
    <h1 className="text-black text-3xl text-center">Intern management</h1>
    <Butt/>
    <AccountTable/>
    </div>;
}
