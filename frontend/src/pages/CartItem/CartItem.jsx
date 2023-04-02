import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const CartItem = () => {
  const [products, setProducts] = useState([])
  const optArr = new Array(21).fill(1)
  const quantArr = new Array(11).fill(1);
  const navigate = useNavigate()

  function getData() {
    axios
      .get('https://magenta-penguin-tie.cyclic.app/cart', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1MjgwYWU0NWY4MWJlODkzYjBkZDciLCJpYXQiOjE2ODAyMDE3NjJ9.y88YsqEDM5sU_tLGcryhbaKrfNkF-ZI4fePxnHShQ2k',
        },
      })
      .then((res) => {
        setProducts(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])





  function handleDelete(id) {

    axios
      .delete(`https://magenta-penguin-tie.cyclic.app/cart/${id}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1MjgwYWU0NWY4MWJlODkzYjBkZDciLCJpYXQiOjE2ODAyMDE3NjJ9.y88YsqEDM5sU_tLGcryhbaKrfNkF-ZI4fePxnHShQ2k',
        },
      })
      .then((res) => {
        console.log(res.data)
        getData()
      })
  }

  function handleAddress(){

    navigate("/cart/address");
  }


  return (
    <Flex
      flexWrap="wrap"
      rowGap="20px"
      minHeight="100vh"
      bgColor="#f1f5f9"
      justifyContent="space-around"
      p="20px 0px"
    >
      <VStack w={{ md: '700px', base: '500px' }}>
        <Text fontWeight={600}>
          Total ({products.length} Items) : ₹{' '}
          {products.length > 0 &&
            products.reduce((acc, cur) => {
              return acc + +cur.price
            }, 0)}
        </Text>
        {products.length > 0 &&
          products.map(
            ({ image1, name,  _id, price, size, discount }, ind) => {
              return (
                <Flex
                key={ind}
                  w="100%"
                  justifyContent="space-around"
                  p="20px 10px"
                  mb="10px"
                  bg="#F7FAFC"
                  borderRadius="5px"
                  flexDirection={{ md: 'row', base: 'column' }}
                  rowGap="20px"
                  minH="200px"
                  border="1px solid #845ef7"
                >
                  <Image
                    outline="2px solid #845ef7"
                    borderRadius="5px"
                    w="120px"
                    h="150px"
                    m={{ md: '0px 20px 0px 0px', base: '0px auto' }}
                    src={image1}
                    alt={name}
                  />

                  <VStack>
                    <Text fontWeight={600}>
                      Ripple Dazzle Diamond Ring JR03281-YGP600
                    </Text>

                    <Flex
                      minHeight="50px"
                      p="20px"
                      gap="20px"
                      alignItems="center"
                      flexDirection={{ md: 'row', base: 'column' }}
                      m={{ md: '0px 20px 0px 0px', base: '0px auto' }}
                    >
                      <Flex w="150px">
                        <Text w="60px">Size :</Text>
                        <Select w="80px">
                          {optArr.map((ele, ind) => {
                            return (
                              <option
                                key={ind}
                                placeholder={size}
                                value={ind + 5}
                              >
                                {' '}
                                {ind + 5}
                              </option>
                            )
                          })}
                        </Select>
                      </Flex>

                      <Flex w="180px">
                        <Text w="80px">Quantity :</Text>
                        <Select w="80px">
                          {quantArr.map((ele, ind) => {
                            return (
                              <option key={ind} value={ind + 1}>
                                {' '}
                                {ind + 1}
                              </option>
                            )
                          })}
                        </Select>
                      </Flex>
                    </Flex>

                    <Flex
                      flexDirection={{ md: 'row', base: 'column' }}
                      gap="20px"
                      alignItems="center"
                    >
                      <Text
                        border="1px solid #845ef7"
                        p="2px 25px"
                        borderRadius="5px"
                        fontSize="15px"
                        fontWeight="600"
                      >
                        ₹ {price}
                      </Text>
                      <Text
                        as="del"
                        border="1px solid #845ef7"
                        p="2px 25px"
                        borderRadius="5px"
                        fontSize="15px"
                        fontWeight="600"
                      >
                        ₹ {(+price * +discount) / 100 + +price}
                      </Text>
                      <Text
                        as="mark"
                        border="1px solid #845ef7"
                        p="2px 25px"
                        borderRadius="5px"
                        fontSize="15px"
                        fontWeight="600"
                      >
                        Save ₹{(+price * +discount) / 100}
                      </Text>
                      <Button border="none" borderBottom="2px solid #845ef7" _hover={{ bg: '#845ef7', color: '#fff', border:"none" }}  cursor="pointer" onClick={() => handleDelete(_id)}>Remove</Button>
                    </Flex>
                  </VStack>
                </Flex>
              )
            },
          )}
      </VStack>
      <VStack
        border="1px solid #845ef7"
        w="300px"
        h="300px"
        borderRadius="5px"
      >
        <Text>Order Summary</Text>

        <Flex
          bg="#F7FAFC"
          p="20px 10px"
          textAlign="left"
          borderRadius="5px"
          justifyContent="space-between"
          columnGap="10px"
        >
          <VStack textAlign="left" fontWeight={600}>
            <Text>Subtotal</Text>
            <Text>You Saved</Text>
            <Text>Delivery Charge (Standard)</Text>
            <Text>TOTAL COST</Text>
          </VStack>

          <VStack>
            <Text>
              ₹{' '}
              {products.length > 0 &&
                products.reduce((acc, cur) => {
                  return acc + +cur.price
                }, 0)}
            </Text>
            <Text color="#8d62f9">
              ₹{' '}
              {products.length > 0 &&
                products.reduce((acc, cur) => {
                  return acc + ((+cur.price) * (+cur.discount)) / 100
                }, 0)}
            </Text>

            <Text color="#8d62f9" >FREE</Text>
            <Text>
              ₹
              {products.length > 0 &&
                products.reduce((acc, cur) => {
                  return acc + +cur.price
                }, 0)}
            </Text>
          </VStack>
        </Flex>

        <Button onClick={handleAddress} cursor="pointer" border="none" borderBottom="2px solid #845ef7"  _hover={{ bg: '#845ef7', color: '#fff' ,border:"none" }} >Checkout Securely</Button>
      </VStack>
    </Flex>
  )
}

export default CartItem
