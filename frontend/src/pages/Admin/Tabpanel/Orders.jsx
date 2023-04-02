import { Box, HStack, Heading, Image, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EditModal from "../Comps/EditModal";
import axios from "axios";


let adminToken = JSON.parse(localStorage.getItem("token")) || null;

const Orders = () => {
  const [category, setCatogory] = React.useState("");
  const [ordersData, setOrdersData] = React.useState([]);

    const handleEdit = () => {

    }

    useEffect(()=>{
        let options = {
      headers: {
        authorization: adminToken
      }
    };
    axios.get(`https://magenta-penguin-tie.cyclic.app/order`, options)
    .then((res )=> console.log(res.data))
        // https://magenta-penguin-tie.cyclic.app/order
    },[])
  return (
    <Box minH={"100vh"}>
      <Heading>Orders</Heading>
      <Text color={"#9400D3"} mb={"20px"}>
        All Current Orders
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
          <TableCaption>{ordersData ? "No orders yet!" : "Click on product to edit"}</TableCaption>
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

            {ordersData.map((el)=>(
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
    </Box>
  );
};

export default Orders;
