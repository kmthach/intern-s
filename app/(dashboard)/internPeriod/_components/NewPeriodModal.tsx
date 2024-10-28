"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { CreateIcon } from "@/app/(dashboard)/intern/_components/Icons";
import { parseDate } from "@internationalized/date"; // Parses a date string or Date object to DateValue
import { useMutation } from "@tanstack/react-query";
import { apiEndpoints } from "@/libs/config";

interface PeriodData {
  name: string;
  startDate: string;
  endDate: string;
  internshipDuration: number;
  description: string;
  universityAttended: string;
  numberOfMember: number;
  status: number;
}

export default function NewPeriodModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [universityAttended, setUniversityAttended] = useState("");
  const [internshipDuration, setinternshipDuration] = useState("");
  const [totalMember, settotalMember] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(parseDate("2024-10-28")); // Initial date in string format
  const [endDate, setEndDate] = useState(parseDate("2024-10-28")); // Current date

  const { mutate, isSuccess } = useMutation({
    mutationFn: (newPeriod: PeriodData) =>
      fetch(apiEndpoints.internPeriod, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPeriod),
      }).then((res) => {
        return res.json();
      }),

    onError: (error) => {
      console.error("Error:", error); // Log the error to the console
    },
  });

  const handleSubmit = () => {
    mutate({
      name,
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      internshipDuration: Number(internshipDuration),
      description,
      universityAttended,
      numberOfMember: Number(totalMember),
      status: Number(status),
    });
  };

  return (
    <>
      <Button
        color="primary"
        size="sm"
        startContent={<CreateIcon />}
        className="text-white"
        variant="shadow"
        onPress={onOpen}
      >
        New Intern Period
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-fit">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add New Intern Period
            </ModalHeader>

            <ModalBody className="gap-5">
              <div className="grid grid-cols-3 gap-5">
                <Input
                  label="Period Name"
                  placeholder="Enter period name"
                  labelPlacement="outside"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isRequired
                />
                <Input
                  label="Description"
                  placeholder="Enter description"
                  labelPlacement="outside"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  isRequired
                />
                <Input
                  label="University attended"
                  placeholder="Enter university"
                  labelPlacement="outside"
                  value={universityAttended}
                  onChange={(e) => setUniversityAttended(e.target.value)}
                  isRequired
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Input
                  label="Internship Duration"
                  placeholder="Enter internship duration"
                  labelPlacement="outside"
                  value={internshipDuration}
                  onChange={(e) => setinternshipDuration(e.target.value)}
                  isRequired
                />

                <Input
                  label="Total member"
                  placeholder="Enter total member"
                  labelPlacement="outside"
                  value={totalMember}
                  onChange={(e) => settotalMember(e.target.value)}
                  isRequired
                />
                <Input
                  label="Status"
                  placeholder="Enter period status"
                  labelPlacement="outside"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  isRequired
                />
              </div>

              <div className="flex w-full gap-3">
                <DatePicker
                  label="Start date"
                  labelPlacement="outside"
                  value={startDate}
                  onChange={(newDate) => setStartDate(newDate)}
                  isRequired
                />
                <DatePicker
                  label="End date"
                  labelPlacement="outside"
                  value={endDate}
                  onChange={(endDate) => setEndDate(endDate)}
                  isRequired
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleSubmit} className="w-full">
                Submit
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
