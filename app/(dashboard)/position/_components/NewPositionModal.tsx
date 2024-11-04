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
import { CreateIcon } from "@/app/(dashboard)/intern/_components/Icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiEndpoints } from "@/libs/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";

interface UniversityData {
  name: string;
  abbreviation: string;
}

export default function NewPostionModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (newUni: UniversityData) => {
      const response = await fetch(apiEndpoints.position, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUni),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message);
      }

      return response.json();
    },

    onError: (error) => {
      toast.error(error.message);
    },

    onSuccess: () => {
      toast.success("New position added successfully!");
      queryClient.invalidateQueries();
      onClose();
    },
  });

  const handleSubmit = () => {
    mutate({
      name,
      abbreviation,
    });
  };

  return (
    <>
      <Button
        color="primary"
        size="md"
        startContent={<CreateIcon />}
        className="text-white"
        variant="shadow"
        onPress={onOpen}
      >
        New Position
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-fit">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add New Position
            </ModalHeader>

            <ModalBody className="gap-5">
              <div className="grid grid-cols-2 gap-5">
                <Input
                  label="Position Name"
                  placeholder="Enter position name"
                  labelPlacement="outside"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isRequired
                />
                <Input
                  label="Abbreviation"
                  placeholder="Enter abbreviation"
                  labelPlacement="outside"
                  value={abbreviation}
                  onChange={(e) => setAbbreviation(e.target.value)}
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
      />
    </>
  );
}
