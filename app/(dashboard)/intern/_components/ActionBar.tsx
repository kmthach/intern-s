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
  ModalFooter,
  useDisclosure,
  ModalBody,
} from "@nextui-org/modal";

import { Select, SelectItem } from "@nextui-org/select";
import NewInternModal from "@/app/(dashboard)/intern/_components/NewInternModal";
import APIClient from "@/libs/api-client";
import { DatePicker } from "@nextui-org/date-picker";
import { TimeInput } from "@nextui-org/date-input";
import { useState } from "react";
import { sendEmail } from "@/actions/send-email";
import { Spinner } from "@nextui-org/spinner";
import ImportExcelModal from "@/app/(dashboard)/intern/_components/ImportExcelModal";

type ActionBarProps = {
  selectedInterns: Set<string>;
};
export default function ActionBar({ selectedInterns }: ActionBarProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isSending, setIsSending] = useState(false);

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

  const mockInterviewers = [
    {
      id: "a3e1d205-a2c3-404b-b66a-286681af34f6",
      name: "John Doe",
    },
  ];

  return (
    <div className="flex items-center gap-2 p-4">
      <Input
        type="name"
        placeholder="Search by name, group, technology,..."
        className="h-10 w-[45%]"
      />

      <ImportExcelModal />

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
                {isSending ? (
                  <div className="flex items-center gap-2">
                    <p>Sending email...</p>
                    <Spinner />
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      // Append the selected intern's email to the form data
                      const formData = new FormData(
                        e.target as HTMLFormElement,
                      );

                      formData.append(
                        "recipients",
                        Array.from(selectedInterns).join(","),
                      );
                      setIsSending(true);
                      await sendEmail(formData);
                      setIsSending(false);
                      onClose();
                    }}
                    className="flex flex-col gap-3"
                  >
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="w-full"
                      variant="underlined"
                      name="subject"
                      required
                    />
                    <Textarea
                      placeholder="Content"
                      className="mt-2 w-full"
                      rows={10}
                      variant="underlined"
                      name="content"
                      required
                    />

                    <DatePicker
                      label="Interview Date"
                      variant="bordered"
                      hideTimeZone
                      showMonthAndYearPickers
                      defaultValue={now(getLocalTimeZone())}
                      name="dateTime"
                    />

                    <TimeInput
                      label="Duration"
                      variant="bordered"
                      hideTimeZone
                      hourCycle={24}
                      defaultValue={new Time(0, 30)}
                      name="duration"
                    />

                    <Select
                      label="Format"
                      variant="bordered"
                      defaultSelectedKeys={["0"]}
                      onSelectionChange={(key) => setFormat(Number(key))}
                      name="format"
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
                        name="location"
                        required
                      />
                    ) : (
                      <Input
                        type="text"
                        placeholder="Location"
                        className="w-full"
                        variant="bordered"
                        required
                        name="location"
                      />
                    )}

                    <Select
                      label="Interviewer"
                      variant="bordered"
                      defaultSelectedKeys={[
                        "a3e1d205-a2c3-404b-b66a-286681af34f6",
                      ]}
                      name="interviewer"
                    >
                      {mockInterviewers.map((interviewer) => (
                        <SelectItem key={interviewer.id} value={interviewer.id}>
                          {interviewer.name}
                        </SelectItem>
                      ))}
                    </Select>

                    <Button
                      color="secondary"
                      size="sm"
                      variant="shadow"
                      type="submit"
                    >
                      <EmailIcon /> Send email
                    </Button>
                  </form>
                )}
              </ModalBody>
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
