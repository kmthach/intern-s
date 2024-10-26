"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import { Chip, ChipProps } from "@nextui-org/chip";
import React from "react";
import ViewIcon, { EditIcon } from "@/app/(dashboard)/intern/_components/Icon";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination } from "@nextui-org/pagination";
import { useQuery } from "@tanstack/react-query"; //get request
import { apiEndpoints } from "@/libs/config";
const statusColorMap: Record<string, ChipProps["color"]> = {
  CompletedOjt: "success",
  Rejected: "danger",
  Pending: "warning",
};

export type AccountTableProps = {
  selectedInterns: any[];
  setSelectedInterns: (interns: any[]) => void;
};
export default function AccountsTable(props: AccountTableProps) {
  const { data: allData } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      const [candidateData, schoolData, internPeriodData] = await Promise.all([
        fetch(apiEndpoints.candidate).then((res) => res.json()),
        fetch(apiEndpoints.university).then((res) => res.json()),
        fetch(apiEndpoints.internPeroid).then((res) => res.json()),
      ]);

      return {
        candidates: candidateData?.data?.pagingData || [],
        schools: schoolData?.data?.pagingData || [],
        internPeriods: internPeriodData?.data?.pagingData || [],
      };
    },
  });

  const candidates = allData?.candidates || [];
  const schools = allData?.schools || [];
  const internPeriods = allData?.internPeriods || [];

  const schoolMap = new Map(
    schools.map((school: { id: any; name: any }) => [school.id, school.name]),
  );
  const getSchoolName = (schoolId: string) =>
    schoolMap.get(schoolId) || "Unknown University";
  const internPeriodMap = new Map(
    internPeriods.map((period: { id: any; name: any }) => [
      period.id,
      period.name,
    ]),
  );

  const getInternPeroidName = (internPeriodId: string) =>
    internPeriodMap.get(internPeriodId) || "Unknown intern period";

  const formatDateOfBirth = (dob: string) => {
    const date = new Date(dob); // Convert string to Date object
    const day = String(date.getDate()); // Get day and pad with 0 if necessary
    const month = String(date.getMonth() + 1); // Months are 0-indexed, so add 1
    const year = String(date.getFullYear()); // Get last 2 digits of the year

    return `${day}/${month}/${year}`; // Return formatted date
  };

  const columns = [
    {
      key: "fullName",
      label: "FULL NAME",
    },
    {
      key: "group",
      label: "GROUP",
    },
    {
      key: "doB",
      label: "Date of birth",
    },
    {
      key: "phoneNumber",
      label: "PHONE",
    },
    {
      key: "personalEmail",
      label: "EMAIL",
    },
    {
      key: "cvUri",
      label: "CV",
    },
    {
      key: "gpa",
      label: "GPA",
    },
    {
      key: "universityId",
      label: "UNIVERSITY  ",
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

  const renderCell = React.useCallback(
    (candidate: any, columnKey: React.Key) => {
      const cellValue = candidate[columnKey as keyof typeof candidate];

      switch (columnKey) {
        case "fullName":
          return <div>{candidate.fullName}</div>;
        case "group":
          return (
            <div>{getInternPeroidName(candidate.internPeriodId) as string}</div>
          );
        case "doB":
          return <div>{formatDateOfBirth(candidate.doB)}</div>;
        case "phoneNumber":
          return <div>{candidate.phoneNumber}</div>;
        case "personalEmail":
          return <div>{candidate.personalEmail}</div>;
        case "cvUri":
          return <div>{candidate.cvUri}</div>;
        case "gpa":
          return <div>{candidate.gpa}</div>;
        case "role":
          return <div>{candidate.role}</div>;
        case "universityId":
          return <div>{getSchoolName(candidate.universityId) as string}</div>;
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[candidate.status]}
              size="md"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="View">
                <span className="cursor-pointer text-lg active:opacity-50">
                  <ViewIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit">
                <span className="mb-1 cursor-pointer text-lg active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
            </div>
          );
      }
    },
    [schools, internPeriods],
  );

  return (
    <>
      <div>
        <Table
          selectionMode="multiple"
          className="m-5 w-auto"
          onSelectionChange={(selected) => {
            console.log(selected);
          }}
        >
          <TableHeader columns={columns}>
            {(columns) => (
              <TableColumn key={columns.key}>{columns.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={candidates}>
            {(candidate: any) => (
              <TableRow key={candidate.id}>
                {(colKey) => (
                  <TableCell>{renderCell(candidate, colKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination
          className="m-4 flex justify-center"
          isCompact
          loop
          showControls
          total={12}
          initialPage={1}
        />
      </div>
    </>
  );
}
