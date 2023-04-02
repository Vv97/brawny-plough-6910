import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { BiRupee } from 'react-icons/bi'

const productFilter = () => {
  return (
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
  )
}

export default productFilter
