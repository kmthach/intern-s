"use client";
import React from "react";
import PositionCard from "./PositionCard";
import { cn } from "@nextui-org/theme";
import { Pagination } from "@nextui-org/pagination";
import { apiEndpoints } from "@/libs/config";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/spinner";

export type PositionListProps = {
  className?: string;
  isShowFilter?: boolean;
};

export default function PositionList(props: PositionListProps) {
  const num_items_show = props.isShowFilter ? 4 : 6;

  const { data, isLoading, error } = useQuery({
    queryKey: ["positionData"],
    queryFn: async () => {
      const res = await fetch(apiEndpoints.position);
      const json = await res.json();
      return json?.data?.pagingData || [];
    },
  });

  if (isLoading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <p>Error loading positions.</p>;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div
        className={cn(
          "grid w-full grid-cols-3 gap-x-8 gap-y-4",
          props.className,
          props.isShowFilter ? "grid-cols-2" : "grid-cols-3",
        )}
      >
        {data.slice(0, num_items_show).map((position: any, id: number) => (
          <PositionCard key={id} position={position} />
        ))}
      </div>
      <Pagination showControls total={10} initialPage={1} />
    </div>
  );
}
