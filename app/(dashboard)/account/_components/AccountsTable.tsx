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
import React from "react";

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
    status: "Inprocess",
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
    group: "Fall 2024",
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
    group: "Fall 2024",
    status: "In process",
  },
];

const statusColorMap = {
  Inprocess: "primary",
};

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

export default function AccountsTable() {
    
  rows.forEach(function (rows) {
    console.log(rows.status)
  })

  

  const [selectedKeys, setSelectedKeys] = React.useState([]);
  return (
    <Table
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(colKey) => <TableCell>{getKeyValue(item, colKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
