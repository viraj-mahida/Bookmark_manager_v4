import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";

export default function DialogModal({
  desc,
  func,
  confirmation,
  isSuccess,
  isLoading,
  type,
}: {
  desc: string | null;
  func: MouseEventHandler<HTMLButtonElement>;
  confirmation: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  type: "menu" | "button";
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const component =
    type === "menu" ? (
      <MenuItem onClick={onOpen}>{desc}</MenuItem>
    ) : (
      <Button onClick={onOpen}>{desc}</Button>
    );
  return (
    <>
      {component}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{confirmation}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="outline" colorScheme="red" onClick={func}>
              {isLoading ? <Spinner /> : ""} Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}