import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useToast } from '@chakra-ui/react'

let adminToken = localStorage.getItem("token") || null;

const EditModal = ({item, id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = React.useState(item.image1)
  const [title, setTitle] = React.useState(item.name)
  const [price, setPrice] = React.useState(item.price)
  const [material, setMaterial] = React.useState(item.material)
  const [forceRefresh, setForceRefresh] = React.useState(false)
  const toast = useToast();

  let newData = {
    image1: img,
    name: title,
    price: Number(price),
    material: material
  }

  const handleChange = (e) => {
    if(e.target.name == "image"){
        setImg(e.target.value);
    }
    else if(e.target.name == "title"){
        setTitle(e.target.value)
    }
    else if(e.target.name == "price"){
        setPrice(e.target.value)
    }
    else {
        setMaterial(e.target.value)
    }
  }

  console.log(img, price, title, material)

  const handleEditDetails = () => {

    let options = {
        
        headers:{
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI4OWJmYmZkZGYzY2RjMTA4MTU1MWUiLCJpYXQiOjE2ODA0NDIyNTR9.idCvTLMJSZGVoTGCt3qpEgUXwHT562fBwGAiZ9162yM"
        },
      }
      axios.patch(`https://magenta-penguin-tie.cyclic.app/products/${id}`,newData, options)
      .then((res )=> toast({
        title: 'Success',
        description: res.data.mssg,
        status: 'success',
        duration: 9000,
        isClosable: true,
      }));
  }

  const handleDelete = () =>{
    let options = {
        
        headers:{
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI4OWJmYmZkZGYzY2RjMTA4MTU1MWUiLCJpYXQiOjE2ODA0NDIyNTR9.idCvTLMJSZGVoTGCt3qpEgUXwHT562fBwGAiZ9162yM"
        },
      }
      axios.delete(`https://magenta-penguin-tie.cyclic.app/products/${id}`, options)
      .then((res )=> toast({
        title: 'Success',
        description: res.data.mssg,
        status: 'success',
        duration: 9000,
        isClosable: true,
      }));
      onClose();
      setForceRefresh(!forceRefresh)
  }

  React.useEffect(()=>{

  },[forceRefresh])

  return (
    <>
      <Button variant={"outline"} colorScheme="purple" onClick={onOpen}>Edit</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack gap={1}>
            <Input value={img} name={"image"} onChange={(e)=>handleChange(e)} placeholder="Image"/>
            <Input value={title} name={"title"} onChange={(e)=>handleChange(e)} placeholder="Title"/>
            <Input value={price} name={"price"} onChange={(e)=>handleChange(e)} placeholder="Price"/>
            <Input value={material} name={"material"} onChange={(e)=>handleChange(e)} placeholder="Material"/>

            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleEditDetails}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;

