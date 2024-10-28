"use client";
import React, { useState } from "react";
import ActionBar from "@/app/(dashboard)/_components/dashboard/ActionBar";
import AccountTable from "@/app/(dashboard)/intern/_components/AccountTable";

export default function InternPage() {
  const [selectedInterns, setSelectedInterns] = useState([] as any[]);

  return (
    <div>
      <h1 className="p-6 text-left text-2xl font-bold capitalize text-black">
        Intern management
      </h1>
      <ActionBar selectedInterns={selectedInterns} />
      <AccountTable
        selectedInterns={selectedInterns}
        setSelectedInterns={setSelectedInterns}
      />
    </div>
  );
}
