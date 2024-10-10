"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import {Chip, ChipProps} from "@nextui-org/chip"
import React,{useState} from "react";

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
    group: "1",
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
    group: "2",
    status: "In process",
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
    group: "3",
    status: "In process",
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
    group: "4",
    status: "In process",
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
    key: "action",
    label: "ACTION",
  },
];

const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  "In process": "warning",
};

type User = typeof rows[0];

export default function AccountsTable() {

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "id":
        return (
          <div>
            {user.id}
          </div>
        );
        case "name":
          return (
            <div>
              {user.name}
            </div>
          );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
    }
  }, [])
    
  rows.forEach(function (rows) {
    console.log(rows.status)
  })

  

  const [selectedKeys, setSelectedKeys] = useState(["1"]);
  return (
    <Table
    color="primary"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="p-4"
      classNames={{
        wrapper: "bg-white text-black",
        th: "bg-gray-200 text-black",
        table: "min-h-[250px] ",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key} allowsSorting>{column.label} </TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(colKey) => <TableCell>{renderCell(item, colKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
