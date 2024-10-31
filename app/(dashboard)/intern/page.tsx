"use client";
import React, { useState } from "react";
import AccountTable from "@/app/(dashboard)/intern/_components/AccountTable";
import ActionBar from "./_components/ActionBar";

export default function InternPage() {
  const [selectedInterns, setSelectedInterns] = React.useState(
    new Set<string>([]),
  );

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
