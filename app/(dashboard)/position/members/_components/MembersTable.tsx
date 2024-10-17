"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

// Dummy data with 5 rows
const members = Array.from({ length: 9 }, (_, index) => ({
  id: 123456,
  fullName: "John Doe",
  phoneNumber: "0123456789",
  email: "johndoe@gmail.com",
  cv: "https://drive.google.com",
  technology: ".NET",
  level: "Senior",
}));

const columns = [
  { key: "id", label: "INTERN ID" },
  { key: "fullName", label: "Full Name" },
  { key: "phoneNumber", label: "Phone Number" },
  { key: "email", label: "Email" },
  { key: "cv", label: "CV" },
  { key: "technology", label: "Technology" },
  { key: "level", label: "Level" },
];
export default function MembersTable() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={members}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
