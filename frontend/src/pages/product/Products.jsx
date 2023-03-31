import React from "react";
import { Box, Button, Center, Flex, Grid, GridItem, Image, Input, Select, Text } from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi"
import { ImHome3 } from "react-icons/im"
import { FcVideoCall } from "react-icons/fc"
import {BsHeart} from "react-icons/bs"
const Products = () => {
  return (
    <Box>
      <Image
        width="100%"
        src="https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp"
      ></Image>
      <Box
        className="filter-navbar"
        bg="#b3d4fc"
        h="80px"
              border="1px red solid"
              display="flex"
              justifyContent="space-between"
      >
        <Flex direction="row" border="1px red solid" gap="15px" fontSize="13px" padding="20px" cursor="pointer" >
          <Center padding="15px"  bg="white" color="black" border="1px white solid" borderRadius="20%" >All</Center>
          <Center padding="15px"  bg="white" color="black" border="1px white solid" borderRadius="20%" >Try at Home</Center>
          <Center padding="15px"  bg="white" color="black" border="1px white solid" borderRadius="20%" >Designs in Store</Center>
          <Center padding="15px"  bg="white" color="black" border="1px white solid" borderRadius="20%" >Fast Delivery</Center>
          <Center padding="15px"  bg="white" color="black" border="1px white solid" borderRadius="20%" >New In</Center>
        </Flex>
        <Box className="filter-sort" padding="20px" >
          <Select placeholder="Sort by:Featured" fontSize="13px">
            <option value="option1">Discount</option>
            <option value="option2">Price High to Low</option>
            <option value="option3">Price Low to High</option>
          </Select>
        </Box>
          </Box>
          <Box border="1px red solid"  m="25px" display="flex" >
              <Box className="filter" width="25%" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" ml="10px" >
                  <Box border="1px red solid" w="90%" m="auto" mt="10px"   >
                      <Center bg="#F6F3F9" padding="10px" borderRadius="20%" > Filter By </Center>
                  </Box>
                  <Box className="filter-price" m="15px" >
                      <Text as="b" >Price</Text>
                      <Box   > 
                          <input type="checkbox" />
                          <span  > Under <BiRupee ></BiRupee>5000 </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > <BiRupee></BiRupee>5000 - <BiRupee></BiRupee>15000 </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > <BiRupee></BiRupee>15001-<BiRupee></BiRupee>30000 </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > More than <BiRupee></BiRupee>30000 </span>
                      </Box>
                     
                  </Box>
                  <Box className="filter-product-type" m="15px" >
                      <Text as="b" >Product Type</Text>
                      <Box   > 
                          <input type="checkbox" />
                          <span  > Earings </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > Rings </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > Necklace </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > Bracelets </span>
                      </Box>
                     
                  </Box>
                  <Box className="filter-material" m="15px" >
                      <Text as="b" >Material</Text>
                      <Box   > 
                          <input type="checkbox" />
                          <span  > Platinum </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > Gold </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > Diamond </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > Gemstone </span>
                      </Box>
                     
                  </Box>
                  <Box className="filter-ring-size" m="15px" >
                      <Text as="b" >Ring size</Text>
                      <Box   > 
                          <input type="checkbox" />
                          <span  > 5 </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > 6 </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > 7 </span>
                      </Box>
                      <Box   >
                          <input type="checkbox" />
                          <span  > 8 </span>
                      </Box>
                     
                  </Box>
              </Box>
              <Grid templateColumns="repeat(3,1fr)"  className="product-list" border="1px red solid" ml="30px" gap="10px">
                  <GridItem m="15px" border="1px red solid"  >
                      <Box>
                          <Image boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" cursor="pointer" width="100%" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07313-1YP6P0_11_listfront.jpg" ></Image>
                      </Box>
                      <Box>
                          <Flex justifyContent="space-between" mr="15px" >
                              <Box>
                              <Text as="b" > <BiRupee />30,929 </Text> <Text fontSize="12px" as="del" >32,999</Text>
                              </Box>
                            
                              <Box cursor="pointer"> <BsHeart/> </Box>
                          </Flex>
                          <Text color="gray" mt="0" > Splendid Stary Diamond Ring </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between"   m="5px"  > 
                          <Button size="sm" cursor="pointer" border="1px purple solid" padding="10px" color="purple" fontSize="11px"  borderRadius="8px" > <ImHome3 />Book Try At Home </Button>
                          <Button size="sm" cursor="pointer" border="1px green solid" padding="10px" color="green" fontSize="11px" borderRadius="8px"> <FcVideoCall /> Live Video Call </Button>
                      </Box>
                  </GridItem>
                  <GridItem m="15px" border="1px red solid"  >
                      <Box>
                          <Image boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" cursor="pointer" width="100%" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07313-1YP6P0_11_listfront.jpg" ></Image>
                      </Box>
                      <Box>
                          <Flex justifyContent="space-between" mr="15px" >
                              <Box>
                              <Text as="b" > <BiRupee />30,929 </Text> <Text fontSize="12px" as="del" >32,999</Text>
                              </Box>
                            
                              <Box cursor="pointer"> <BsHeart/> </Box>
                          </Flex>
                          <Text color="gray" mt="0" > Splendid Stary Diamond Ring </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between"   m="5px"  > 
                          <Button size="sm" cursor="pointer" border="1px purple solid" padding="10px" color="purple" fontSize="11px"  borderRadius="8px" > <ImHome3 />Book Try At Home </Button>
                          <Button size="sm" cursor="pointer" border="1px green solid" padding="10px" color="green" fontSize="11px" borderRadius="8px"> <FcVideoCall /> Live Video Call </Button>
                      </Box>
                  </GridItem>
                  <GridItem m="15px" border="1px red solid"  >
                      <Box>
                          <Image boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" cursor="pointer" width="100%" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07313-1YP6P0_11_listfront.jpg" ></Image>
                      </Box>
                      <Box>
                          <Flex justifyContent="space-between" mr="15px" >
                              <Box>
                              <Text as="b" > <BiRupee />30,929 </Text> <Text fontSize="12px" as="del" >32,999</Text>
                              </Box>
                            
                              <Box cursor="pointer"> <BsHeart/> </Box>
                          </Flex>
                          <Text color="gray" mt="0" > Splendid Stary Diamond Ring </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between"   m="5px"  > 
                          <Button size="sm" cursor="pointer" border="1px purple solid" padding="10px" color="purple" fontSize="11px"  borderRadius="8px" > <ImHome3 />Book Try At Home </Button>
                          <Button size="sm" cursor="pointer" border="1px green solid" padding="10px" color="green" fontSize="11px" borderRadius="8px"> <FcVideoCall /> Live Video Call </Button>
                      </Box>
                  </GridItem>
                  <GridItem m="15px" border="1px red solid"  >
                      <Box>
                          <Image boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" cursor="pointer" width="100%" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07313-1YP6P0_11_listfront.jpg" ></Image>
                      </Box>
                      <Box>
                          <Flex justifyContent="space-between" mr="15px" >
                              <Box>
                              <Text as="b" > <BiRupee />30,929 </Text> <Text fontSize="12px" as="del" >32,999</Text>
                              </Box>
                            
                              <Box cursor="pointer"> <BsHeart/> </Box>
                          </Flex>
                          <Text color="gray" mt="0" > Splendid Stary Diamond Ring </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between"   m="5px"  > 
                          <Button size="sm" cursor="pointer" border="1px purple solid" padding="10px" color="purple" fontSize="11px"  borderRadius="8px" > <ImHome3 />Book Try At Home </Button>
                          <Button size="sm" cursor="pointer" border="1px green solid" padding="10px" color="green" fontSize="11px" borderRadius="8px"> <FcVideoCall /> Live Video Call </Button>
                      </Box>
                  </GridItem>
                  <GridItem m="15px" border="1px red solid"  >
                      <Box>
                          <Image boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" cursor="pointer" width="100%" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07313-1YP6P0_11_listfront.jpg" ></Image>
                      </Box>
                      <Box>
                          <Flex justifyContent="space-between" mr="15px" >
                              <Box>
                              <Text as="b" > <BiRupee />30,929 </Text> <Text fontSize="12px" as="del" >32,999</Text>
                              </Box>
                            
                              <Box cursor="pointer"> <BsHeart/> </Box>
                          </Flex>
                          <Text color="gray" mt="0" > Splendid Stary Diamond Ring </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between"   m="5px"  > 
                          <Button size="sm" cursor="pointer" border="1px purple solid" padding="10px" color="purple" fontSize="11px"  borderRadius="8px" > <ImHome3 />Book Try At Home </Button>
                          <Button size="sm" cursor="pointer" border="1px green solid" padding="10px" color="green" fontSize="11px" borderRadius="8px"> <FcVideoCall /> Live Video Call </Button>
                      </Box>
                  </GridItem>
                  <GridItem m="15px" border="1px red solid"  >
                      <Box>
                          <Image boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" cursor="pointer" width="100%" src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07313-1YP6P0_11_listfront.jpg" ></Image>
                      </Box>
                      <Box>
                          <Flex justifyContent="space-between" mr="15px" >
                              <Box>
                              <Text as="b" > <BiRupee />30,929 </Text> <Text fontSize="12px" as="del" >32,999</Text>
                              </Box>
                            
                              <Box cursor="pointer"> <BsHeart/> </Box>
                          </Flex>
                          <Text color="gray" mt="0" > Splendid Stary Diamond Ring </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between"   m="5px"  > 
                          <Button size="sm" cursor="pointer" border="1px purple solid" padding="10px" color="purple" fontSize="11px"  borderRadius="8px" > <ImHome3 />Book Try At Home </Button>
                          <Button size="sm" cursor="pointer" border="1px green solid" padding="10px" color="green" fontSize="11px" borderRadius="8px"> <FcVideoCall /> Live Video Call </Button>
                      </Box>
                  </GridItem>
                  
                  
                  
              </Grid>
          </Box>
    </Box>
  );
};

export default Products;
