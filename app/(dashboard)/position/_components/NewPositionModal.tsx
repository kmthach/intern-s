"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { AddIcon } from "./Icons";
import { Input } from "@nextui-org/input";

export default function NewPositionModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        color="primary"
        size="md"
        startContent={<AddIcon />}
        className="text-white"
        variant="shadow"
        onPress={onOpen}
      >
        New Position
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-fit">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Position
              </ModalHeader>

              <ModalBody className="gap-5">
                <Input
                  label="Position name"
                  placeholder="Enter position name"
                  labelPlacement="outside"
                />
                <Input
                  label="Ranks"
                  placeholder="Add ranks included in the project: junior, senior,..."
                  labelPlacement="outside"
                />

                <Input
                  label="Technologies"
                  placeholder="Add technology stacks utilized within project’s scope: java, nodejs, python,..."
                  labelPlacement="outside"
                />
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    label="Leader"
                    placeholder="Enter username"
                    labelPlacement="outside"
                  />

                  <Input
                    label="Sub Leader"
                    placeholder="Enter username"
                    labelPlacement="outside"
                  />

                  <Input
                    label="Mentor"
                    placeholder="Enter username"
                    labelPlacement="outside"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} className="w-full">
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
