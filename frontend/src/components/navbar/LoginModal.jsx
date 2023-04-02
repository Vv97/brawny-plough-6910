import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure
  } from '@chakra-ui/react'
  import { FaUser } from 'react-icons/fa';


export const LoginModal=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <FaUser  onClick={onOpen}/>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="3xl">Your Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text  mb='0rem'>
                 Access account & manage your orders.
              </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Sign Up
              </Button>
              <Button variant='ghost'>Log In</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }