"use client";
import { Button } from "@nextui-org/button";

import {
  EmailIcon,
  FilterIcon,
  ExcelIcon,
  DeleteIcon,
} from "@/app/(dashboard)/intern/_components/Icons";

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

export default function ActionBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const emailType = [
    {
      key: "interview",
      label: "Email interview",
    },
    {
      key: "result",
      label: "Interview result",
    },
    {
      key: "information",
      label: "Internship information",
    },
    {
      key: "grade",
      label: "Score grade",
    },
  ];

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

      <Button color="secondary" size="sm" variant="shadow" onPress={onOpen}>
        <EmailIcon /> Send email
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Send Email</ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4">
                  <Select
                    label="Choose type of email"
                    isRequired
                    className="mb-14 max-w-[30%]"
                  >
                    {emailType.map((email) => (
                      <SelectItem key={email.key}>{email.label}</SelectItem>
                    ))}
                  </Select>
                  <Textarea
                    placeholder="Enter email..."
                    classNames={{
                      base: "max-w-xl",
                      input: "min-h-[100px]",
                    }}
                  >
                    Hi
                  </Textarea>
                </div>
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
