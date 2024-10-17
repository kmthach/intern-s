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
import ViewIcon, { EditIcon } from "@/app/(dashboard)/account/_components/Icon";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination } from "@nextui-org/pagination";

type User = (typeof rows)[0];
const rows = [
  {
    key: "1",
    id: "SE161290",
    name: "QKL",
    phone: 292823041,
    email: "quoc@gmail.com",
    cv: "Link",
    role: "Full Stack",
    school: "FPT University",
    group: "Fall 2024",
    status: "In process",
  },
  {
    key: "2",
    id: "SE161290",
    name: "Le Ky Quoc",
    phone: 292823041,
    email: "quoc@gmail.com",
    cv: "Link",
    role: "Full Stack",
    school: "FPT University",
    group: "Fall 2024",
    status: "Approved",
  },
  {
    key: "3",
    id: "SE161290",
    name: "Le Ky Quoc",
    phone: 292823041,
    email: "quoc@gmail.com",
    cv: "Link",
    role: "Full Stack",
    school: "FPT University",
    group: "Fall 2024",
    status: "Rejected",
  },
  {
    key: "4",
    id: "SE161290",
    name: "Le Ky Quoc",
    phone: 292823041,
    email: "quoc@gmail.com",
    cv: "Link",
    role: "Full Stack",
    school: "FPT University",
    group: "Fall 2024",
    status: "Approved",
  },
];

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "FULL NAME",
  },
  {
    key: "phone",
    label: "PHONE",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "cv",
    label: "CV",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "school",
    label: "SCHOOL",
  },
  {
    key: "group",
    label: "GROUP",
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

const statusColorMap: Record<string, ChipProps["color"]> = {
  Approved: "success",
  Rejected: "danger",
  "In process": "warning",
};

export default function AccountsTable() {
  rows.forEach(function (rows) {
    console.log(rows.status);
  });

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "id":
        return <div>{user.id}</div>;
      case "name":
        return <div>{user.name}</div>;
      case "phone":
        return <div>{user.phone}</div>;
      case "email":
        return <div>{user.email}</div>;
      case "cv":
        return <div>{user.cv}</div>;
      case "role":
        return <div>{user.role}</div>;
      case "school":
        return <div>{user.school}</div>;

      case "group":
        return <div>{user.group}</div>;
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
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
  }, []);

  return (
    <div>
      <Table selectionMode="multiple" className="m-5 w-auto">
        <TableHeader columns={columns}>
          {(columns) => (
            <TableColumn key={columns.key}>{columns.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(colKey) => <TableCell>{renderCell(item, colKey)}</TableCell>}
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
  );
}
