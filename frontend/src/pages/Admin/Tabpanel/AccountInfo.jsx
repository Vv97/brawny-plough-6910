import {
    Avatar,
    Box,
    Button,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    SimpleGrid,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React from "react";
  import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

  
  const AccountInfo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);

    const handleClick = () => {

    }

    const onChange = () => {

    }
 
  
    
    return (
      <Box
        
        minH={"100vh"}
        mt={{ base: "60px", md: "0px" }}
        padding={"20px"}
        bg={"#CBEDD5"} color={"black"}
      >
        <Heading>Admin Acccount</Heading>
        <Text color={"#00b5b8"}>Admin Info</Text>
        <Box textAlign={"center"} mt={"30px"}>
          <Avatar
            size={"2xl"}
            src={"https://avatars.githubusercontent.com/u/98110085?v=4"}
            
            boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          ></Avatar>
          <SimpleGrid
            width={{ base: "90%", md: "85%", lg: "40%" }}
            m={"auto"}
            mt={"20px"}
            gap={3}
          >
            <Input borderColor={'teal.500'} color={"gray.600"} readOnly value={"name"}></Input>
            <Input borderColor={'teal.500'} color={"gray.600"} readOnly value={"email"}></Input>
            <Input borderColor={'teal.500'} color={"gray.600"} readOnly value={"password"}></Input>
            <InputGroup size="md">
              <Input
                color={"gray.600"}
                borderColor={'teal.500'}
                readOnly
                pr="4.5rem"
                type={true ? "text" : "password"}
                value={"name"}
              />
              <InputRightElement width="4.5rem">
                <Box onClick={handleClick} cursor={"pointer"}>
                  {false ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Box>
              </InputRightElement>
            </InputGroup>
            <Button
              bg='teal.500'
            >
              Edit Details
            </Button>


            {/*```````````````````````````````` modal```````````````````````````````````` */}
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
              <ModalContent bg={"#CBEDD5"} color={"black"}>
                <ModalHeader>Create Admin Account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6} textAlign={"center"}>
                  <Avatar
                    size={"xl"}
                    src={"https://avatars.githubusercontent.com/u/98110085?v=4"}
                    name={"Name"}
                    border='2px solid teal'
                  ></Avatar>
                  <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                      ref={initialRef}
                      borderColor='teal.500'
                      value={"https://avatars.githubusercontent.com/u/98110085?v=4"}
                      onChange={(e) => {
                        
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      ref={initialRef}
                      borderColor='teal.500'
                      value={"Name"}
                      onChange={(e) => {
                       
                      }}
                    />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel>Email Id</FormLabel>
                    <Input
                      value={"EmailId"}
                      borderColor='teal.500'
                      onChange={(e) => {
                        
                      }}
                    />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel>Phone No.</FormLabel>
                    <Input
                      value={"Phone"}
                      borderColor='teal.500'
                      onChange={(e) => {
                        
                      }}
                    />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      value={"Password"}
                      borderColor='teal.500'
                      onChange={(e) => {
                        
                      }}
                    />
                  </FormControl>
                </ModalBody>
  
                <ModalFooter>
                  <Button
                    bg="teal.500"
                    mr={3}
                    onClick={() => {
                    //   handleSendUpdatedData();
                      onClose();
                    }}
                  >
                    Save
                  </Button>
                  <Button colorScheme={"red"} onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </SimpleGrid>
        </Box>
      </Box>
    );
  };
  
  export default AccountInfo;