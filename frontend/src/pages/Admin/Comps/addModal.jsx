import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useToast } from '@chakra-ui/react'


const AddModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img1, setImg1] = React.useState("")
  const [img2, setImg2] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [material, setMaterial] = React.useState("")
  const [desc, setDesc] = React.useState("")
  const [discount, setDiscount] = React.useState("")
  const [type, setType] = React.useState("")
  const [rating, setRating] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [size, setSize] = React.useState("")
  const toast = useToast();

  const handleChange = (e) => {
    if(e.target.name == "image1"){
        setImg1(e.target.value);
    }
    else if(e.target.name == "image2"){
      setImg2(e.target.value);
  }
    else if(e.target.name == "title"){
        setTitle(e.target.value)
    }
    else if(e.target.name == "price"){
        setPrice(e.target.value)
    }
    else if(e.target.name == "material") {
        setMaterial(e.target.value)
    }
    else if(e.target.name =="description"){
      setDesc(e.target.vale)
    }
    else if(e.target.name == "discount"){
      setDiscount(e.target.value)
    }
    else if(e.target.name == "jewellerytype"){
      setType(e.target.value)
    }
    else if(e.target.name == "category"){
      setCategory(e.target.value)
    }
    else if(e.target.name == "size"){
      setSize(e.target.value)
    }
    else {
      setRating(e.target.value)
    }
  }

  const newData = {
    image1: img1,
    image2: img2,
    name: title,
    price,
    rating,
    material,
    description: desc,
    discount,
    type,
    category,
    size

  }
  const handleAddDetails = () => {

    let options = {
        
        headers:{
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI4OWJmYmZkZGYzY2RjMTA4MTU1MWUiLCJpYXQiOjE2ODA0NDIyNTR9.idCvTLMJSZGVoTGCt3qpEgUXwHT562fBwGAiZ9162yM"
        },
      }
      axios.post(`https://magenta-penguin-tie.cyclic.app/products`,newData, options)
      .then((res )=> toast({
        title: 'Success',
        description: res.data.mssg,
        status: 'success',
        duration: 9000,
        isClosable: true,
      }));
  }


  React.useEffect(()=>{

  },[])

  return (
    <>
      <Button variant={"outline"} colorScheme="purple" onClick={onOpen}>Add Product</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack gap={1}>
            <Input value={img1} name={"image1"} onChange={(e)=>handleChange(e)} placeholder="Image 1"/>
            <Input value={img2} name={"image2"} onChange={(e)=>handleChange(e)} placeholder="Image 2"/>
            <Input value={category} name={"category"} onChange={(e)=>handleChange(e)} placeholder="Category"/>
            <Input value={discount} name={"discount"} onChange={(e)=>handleChange(e)} placeholder="Discount"/>
            <Input value={title} name={"title"} onChange={(e)=>handleChange(e)} placeholder="Title"/>
            <Input value={price} name={"price"} onChange={(e)=>handleChange(e)} placeholder="Price"/>
            <Input value={material} name={"material"} onChange={(e)=>handleChange(e)} placeholder="Material"/>
            <Input value={desc} name={"description"} onChange={(e)=>handleChange(e)} placeholder="Description"/>
            <Input value={type} name={"jewellerytype"} onChange={(e)=>handleChange(e)} placeholder="Jewellery type"/>
            <Input value={rating} name={"rating"} onChange={(e)=>handleChange(e)} placeholder="Ratings"/>
            <Input value={size} name={"size"} onChange={(e)=>handleChange(e)} placeholder="Size"/>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleAddDetails}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddModal;
