"use client";
import { Button } from "@nextui-org/button";

import {
  EmailIcon,
  FilterIcon,
  ExcelIcon,
  DeleteIcon,
} from "@/app/(dashboard)/intern/_components/Icons";
import {
  now,
  getLocalTimeZone,
  parseZonedDateTime,
  Time,
} from "@internationalized/date";

import { Input, Textarea } from "@nextui-org/input";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

import { Select, SelectItem } from "@nextui-org/select";
import NewInternModal from "@/app/(dashboard)/intern/_components/NewInternModal";
import { apiEndpoints } from "@/libs/config";
import APIClient from "@/libs/api-client";
import { useMutation } from "@tanstack/react-query";
import { DatePicker } from "@nextui-org/date-picker";
import { TimeInput } from "@nextui-org/date-input";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

type ActionBarProps = {
  selectedInterns: Set<string>;
};
export default function ActionBar({ selectedInterns }: ActionBarProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isShowPopover, setIsShowPopover] = useState(false);
  const [format, setFormat] = useState(0);

  const apiClient = new APIClient();

  const mockInterviewData = {
    recipients: "18a8198e-5624-4c8d-b419-adfb3c9d77f9",
    subject: "Interview schedule",
    date: "2022-10-10",
    time: "10:00",
    duration: "1:00",
    format: 0,
    location: "https://meet.google.com/abc-def",
    interviewer: "John Doe",
  };

  const scheduleInterviewMutation = useMutation({
    mutationFn: async (params: {
      recipients: string[];
      subject: string;
      date: string;
      time: string;
      duration: string;
      format: number;
      location: string;
      interviewer: string;
      attachments?: File[];
    }) => {
      apiClient.post(apiEndpoints.sendInterviewEmail, params);
    },

    onError: (error) => {
      console.error("Error:", error);
    },

    onSuccess: () => {
      console.log("Interview scheduled successfully");
    },
  });

  // /// test the scheduleInterviewMutation
  // React.useEffect(() => {
  //   scheduleInterviewMutation.mutate(mockInterviewData);
  // }, []);

  return (
    <div className="flex items-center gap-2 p-4">
      <Input
        type="name"
        placeholder="Search by name, group, technology,..."
        className="h-10 w-[45%]"
      />
      <Button color="success" size="sm" variant="shadow" className="text-white">
        <ExcelIcon /> Export to Excel
      </Button>

      <Button
        color="secondary"
        size="sm"
        variant="shadow"
        onPress={(e) => {
          if (selectedInterns.size === 0) {
            alert("Please select at least one intern");
          } else onOpen();
        }}
      >
        <EmailIcon /> Send email
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Send Email</ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="w-full"
                  variant="underlined"
                  required
                />
                <Textarea
                  placeholder="Content"
                  className="mt-2 w-full"
                  rows={10}
                  variant="underlined"
                  required
                />

                <DatePicker
                  label="Interview Date"
                  variant="bordered"
                  hideTimeZone
                  showMonthAndYearPickers
                  defaultValue={now(getLocalTimeZone())}
                />

                <TimeInput
                  label="Duration"
                  variant="bordered"
                  hideTimeZone
                  hourCycle={24}
                  defaultValue={new Time(0, 30)}
                />

                <Select
                  label="Format"
                  variant="bordered"
                  defaultSelectedKeys={["0"]}
                  onSelectionChange={(key) => setFormat(Number(key))}
                >
                  <SelectItem key={0} value="0">
                    Online
                  </SelectItem>
                  <SelectItem key={1} value="1">
                    Offline
                  </SelectItem>
                </Select>

                {format === 0 ? (
                  <Input
                    type="text"
                    placeholder="Meeting URL"
                    className="w-full"
                    variant="bordered"
                    required
                  />
                ) : (
                  <Input
                    type="text"
                    placeholder="Location"
                    className="w-full"
                    variant="bordered"
                    required
                  />
                )}
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  size="sm"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color="secondary"
                  size="sm"
                  variant="shadow"
                  onPress={onClose}
                >
                  <EmailIcon /> Send email
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Button color="danger" size="sm" variant="shadow">
        <DeleteIcon />
        Delete
      </Button>
      <NewInternModal />
      <Button color="default" size="sm" variant="shadow">
        <FilterIcon />
        Filter
      </Button>
    </div>
  );
}
