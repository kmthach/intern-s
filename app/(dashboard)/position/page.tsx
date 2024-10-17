"use client";
import React from "react";
import ActionBar from "./_components/ActionBar";
import PositionList from "./_components/PositionList";
import FilterSelector from "./_components/FilterSelector";
import { useToggle } from "usehooks-ts";

export default function PositionPage() {
  const [showFilter, toggleShowFilter] = useToggle(false);

  return (
    <div className="flex flex-col gap-4">
      <ActionBar toggleShowFilter={toggleShowFilter} />
      <div className="flex w-full gap-6">
        <PositionList isShowFilter={showFilter} />
        {showFilter && <FilterSelector />}
      </div>
    </div>
  );
}
