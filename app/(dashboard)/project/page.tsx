import React from "react";
import ActionBar from "./_components/ActionBar";
import ProjectList from "./_components/ProjectList";

export default function ProjectPage() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-left text-2xl font-bold capitalize text-black">
        Project management
      </h1>

      <ActionBar />
      <ProjectList />
    </div>
  );
}
