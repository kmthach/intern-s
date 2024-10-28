"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

import { Chip, ChipProps } from "@nextui-org/chip";
import React from "react";
import {
  DeleteIcon,
  EditIcon,
} from "@/app/(dashboard)/internPeriod/_components/Icons";
import { Tooltip } from "@nextui-org/tooltip";
import { useMutation, useQuery } from "@tanstack/react-query"; //get request
import { apiEndpoints } from "@/libs/config";
const statusColorMap: Record<string, ChipProps["color"]> = {
  InProgress: "success",
  Rejected: "danger",
  Pending: "warning",
};

export default function InternPeroidTable() {
  const { isLoading, error, isSuccess, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const internPeriod = await fetch(apiEndpoints.internPeriod).then((res) =>
        res.json(),
      );

      return { period: internPeriod?.data?.pagingData || [] };
    },
  });
  const periodData = data?.period || [];

  const mutation = useMutation({
    mutationFn: (id: number) =>
      fetch(apiEndpoints.internPeriod + "/" + id, {
        method: "DELETE",
      }).then((response) => response.json()),

    onError: (error) => {
      console.error("Error:", error);
    },

    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this period?",
    );

    if (confirmDelete) {
      mutation.mutate(id);
    }
  };

  const columns = [
    {
      key: "name",
      label: "FULL NAME",
    },
    {
      key: "startDate",
      label: "Start Date",
    },
    {
      key: "endDate",
      label: "End Date",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "internshipDuration",
      label: "Duration",
    },
    {
      key: "numberOfMember",
      label: "Total Members",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
      key: "actions",
      label: "ACTIONS",
    },
  ];

  const formatDate = (dob: string) => {
    const date = new Date(dob); // Convert string to Date object
    const day = String(date.getDate()); // Get day and pad with 0 if necessary
    const month = String(date.getMonth() + 1); // Months are 0-indexed, so add 1
    const year = String(date.getFullYear()); // Get last 2 digits of the year

    return `${day}/${month}/${year}`; // Return formatted date
  };

  const renderCell = React.useCallback((period: any, columnKey: React.Key) => {
    const cellValue = period[columnKey as keyof typeof period];

    switch (columnKey) {
      case "name":
        return <div>{period.name}</div>;
      case "startDate":
        return <div>{formatDate(period.startDate)}</div>;
      case "endDate":
        return <div>{formatDate(period.endDate)}</div>;
      case "description":
        return <div>{period.description}</div>;
      case "internshipDuration":
        return <div>{period.internshipDuration}</div>;
      case "numberOfMember":
        return <div>{period.numberOfMember}</div>;
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[period.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <button
                className="cursor-pointer text-lg text-danger active:opacity-50"
                onClick={() => handleDelete(period.id)}
              >
                <DeleteIcon />
              </button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error + {error.message}</div>;
  }

  if (isSuccess) {
    return (
      <>
        <Table
          selectionMode="multiple"
          onSelectionChange={(selected) => {
            console.log(selected);
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={periodData}>
            {(period: any) => (
              <TableRow key={period.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(period, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </>
    );
  }
}
