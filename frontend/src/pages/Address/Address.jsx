import {
    Button,
    Center,
    Flex,
    FormControl,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react'
  import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
  
  let addObj = {
    name: '',
    phoneNumber: '',
    houseNumber: '',
    roadName: '',
    pinCode: '',
    city: '',
    state: '',
    nearLocation: '',
  }
  
  const Address = () => {
    const [address, setAddress] = useState(addObj)
    const toast = useToast()
    const navigate = useNavigate()

  
    function handleInput(e) {
      const { name, value } = e.target
      //    const AddDated = {}
  
      setAddress({ ...address, [name]: value })
    }
    function handleSubmit() {
      function isEmpty() {
        for (let key in address) {
          if (key === 'nearLocation') {
            continue
          } else if (address[key] === '') {
            return true
          }
        }
      }
  
      if (isEmpty()) {
        alert('Fill All Requried Input')
      } else {
        // alert('You Sucessfully Registerd Your Address')
        toast({
          title: `You Sucessfully booked Your Order`,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      
        setTimeout(()=>{
          navigate("/")
        },2000)
        console.log(address)
      }
    }
  
    return (
      <FormControl mt="20px">
     
        <Stack
          m="auto"
          bg="#F7FAFC"
          borderRadius="10px"
          boxShadow="2xl"
          spacing={3}
          border="2px solid #845ef7"
          w={{ base: '80%', md: '50%' }}
          p="20px 10px"
        >
          <Text
            fontSize="4xl"
            boxShadow="xl"
            border="none"
            borderBottom="2px solid #845ef7"
            textAlign="center"
            borderRadius="10px"
          >
            Address
          </Text>
          <Stack direction={['column', 'row']}>
            <Text m="8px 0px">Name</Text>
            <Input
              border="none"
              borderBottom="2px solid #845ef7"
              required
              onChange={handleInput}
              name="name"
              placeholder="Name"
            />
          </Stack>
          <Stack direction={['column', 'row']}>
            <Text minW="100px" whiteSpace="pace: nowrap">
              Phone Number
            </Text>
            <Input
              border="none"
              borderBottom="2px solid #845ef7"
              onChange={handleInput}
              name="phoneNumber"
              maxLength={10}
              placeholder="Phone Number"
            />
          </Stack>
          <Stack direction={['column', 'row']}>
            <Text>House no./ Building Name</Text>
            <Input
              border="none"
              borderBottom="2px solid #845ef7"
              onChange={handleInput}
              name="houseNumber"
              placeholder="House no./ Building Name"
            />
          </Stack>
          <Stack direction={['column', 'row']}>
            <Text>Road Name/ Area Colony</Text>
            <Input
              border="none"
              borderBottom="2px solid #845ef7"
              onChange={handleInput}
              name="roadName"
              placeholder="Road Name/ Area Colony"
            />
          </Stack>
          <Stack direction={['column', 'row']}>
            <Text>Pincode</Text>
            <Input
              border="none"
              borderBottom="2px solid #845ef7"
              onChange={handleInput}
              name="pinCode"
              placeholder="Pincode"
            />
          </Stack>
          <Flex columnGap="5px">
            <Stack direction={['column', 'row']}>
              <Text>City</Text>
              <Input
                border="none"
                borderBottom="2px solid #845ef7"
                onChange={handleInput}
                name="city"
                placeholder="City"
              />
            </Stack>
            <Stack direction={['column', 'row']}>
              <Text>State</Text>
              <Input
                border="none"
                borderBottom="2px solid #845ef7"
                onChange={handleInput}
                name="state"
                placeholder="State"
              />
            </Stack>
          </Flex>
          <Stack mb="20px" direction={['column', 'row']}>
            <Text>NearbyLocation(optional)</Text>
            <Input
              border="none"
              borderBottom="2px solid #845ef7"
              onChange={handleInput}
              name="nearLocation"
              placeholder="NearbyLocation(optional)"
            />
          </Stack>
  
          <Button
          border="none" borderBottom="2px solid #845ef7"  _hover={{ bg: '#845ef7', color: '#fff' ,border:"none" }} 
            mt="20px"
            onClick={handleSubmit}
          >
            {' '}
            Save Address & Continue
          </Button>
        </Stack>
      </FormControl>
    )
  }
  
  export default Address
  