import React from "react";
import ActionBar from "./_components/ActionBar";
import MembersTable from "./_components/MembersTable";

export default function MemberPage() {
  return (
    <div className="flex flex-col gap-4">
      <ActionBar />
      <MembersTable />
    </div>
  );
}
