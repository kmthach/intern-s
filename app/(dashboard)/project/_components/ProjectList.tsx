import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ProjectCard key={item} />
      ))}
    </div>
  );
}
