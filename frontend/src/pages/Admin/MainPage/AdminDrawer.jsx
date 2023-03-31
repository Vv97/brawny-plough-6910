import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";


const AdminDrawer = ({
  prodRef,
  orderRef,
  dashboardRef,
  customerRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <RiMenu2Line fontSize={"32px"} />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={"#a020f0"}
          color={"white"}
          textAlign={"center"}
        >
          <DrawerCloseButton fontSize={"xl"} />
          <DrawerBody fontSize={"2xl"}>
            <Box
              mt={"160px"}
              p={"10px"}
              _hover={{ backgroundColor: "#97DECE" }}
              onClick={() => {
                dashboardRef.current.click();
                onClose();
              }}
            >
              Dashboard
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                prodRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "#97DECE" }}
            >
              Listings
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                orderRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "#97DECE" }}
            >
              Orders
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                customerRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "#97DECE" }}
            >
              Customers
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminDrawer;