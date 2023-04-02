import { Box, HStack, Heading, Image, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EditModal from "../Comps/EditModal";

const Listing = ({allData}) => {
  const [category, setCatogory] = React.useState("");
    console.log(allData, "adfadsf")

    const handleEdit = () => {

    }

    useEffect(()=>{

    },[])
  return (
    <>
      <Heading>Rings</Heading>
      <Text color={"#9400D3"} mb={"20px"}>
        All Rings Data
      </Text>
      <HStack py={"20px"} justifyContent={"space-between"}>
        <Input
          placeholder="Search Product"
          width={"200px"}
          border={"1.5px solid purple"}
        />
        <HStack>
          <Select
            bg={"#BA55D3"}
            placeholder="Select Jewelry"
            border={"1.5px solid purple"}
          >
            <option
              style={{ backgroundColor: "#BA55D3", padding: "10px" }}
              value="ring"
            >
              Rings
            </option>
          </Select>
          <Select
            bg={"#BA55D3"}
            placeholder="Select Material"
            border={"1.5px solid purple"}
          >
            <option
              style={{ backgroundColor: "#BA55D3", padding: "10px" }}
              value="platinum"
            >
              Platinum
            </option>
            <option
              style={{ backgroundColor: "#BA55D3", padding: "10px" }}
              value="diamond"
            >
              Diamond
            </option>
            <option
              style={{ backgroundColor: "#BA55D3", padding: "10px" }}
              value="gold"
            >
              Gold
            </option>
          </Select>
        </HStack>
      </HStack>

      <TableContainer mt={2}>
        <Table variant="striped" colorScheme="purple">
          <TableCaption>Click on product to edit</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Image</Th>
              <Th >Title</Th>
              <Th >Price</Th>
              <Th >Material</Th>
              {/* <Th >Status</Th> */}
            </Tr>
          </Thead>
          <Tbody>

            {allData.map((el)=>(
                <Tr key={el._id} onClick={()=>handleEdit(el._id)}>
                    <Td>{el._id}</Td>
                    <Td><Image src={el.image1} w={"100px"}/></Td>
                    <Td>{el.name}</Td>
                    <Td>{el.price}</Td>
                    <Td>{el.material}</Td>
                    <Td><EditModal/></Td>
                </Tr>
            )) }
            
          </Tbody>
          
        </Table>
      </TableContainer>
    </>
  );
};

export default Listing;
