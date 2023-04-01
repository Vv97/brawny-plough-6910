// import React from 'react';
// import {Avatar, Box, Button, Divider, HStack, Heading, VStack} from "@chakra-ui/react"

// const Admin = () => {
//   return (
//     <HStack >
//         <VStack p={"20px"} bgColor={'pink.200'} h={"100%"} justifyContent={"flex-start"} mt={"0px"}>
//             <Heading>Welcome!</Heading>
//             <Avatar src='https://avatars.githubusercontent.com/u/98110085?s=40&v=4' size={"xl"} pb={"20px"}/>

//             <Box borderBottom={"2px solid gray"} w={"100%"} h={"2px"}></Box>

//             <VStack gap={2}>
//                 <Button size={"sm"} variant={"unstyled"} px={4} w={"100%"} _hover={{bgColor:"red.300"}} m={0}>Dashboard</Button>
//                 <Button size={"sm"} variant={"unstyled"} px={4} w={"100%"} _hover={{bgColor:"red.300"}}>Products</Button>
//                 <Button size={"sm"} variant={"unstyled"} px={4} w={"100%"} _hover={{bgColor:"red.300"}}>Orders</Button>
//                 <Button size={"sm"} variant={"unstyled"} px={4} w={"100%"} _hover={{bgColor:"red.300"}}>Account Info</Button>
//                 <Divider/>
//                 <Button variant={'solid'} colorScheme='red' size="sm">Logout</Button>
//             </VStack>
//         </VStack>
//         <Box w={"100%"} h={"100vh"} border={"1px solid red"} justifyContent={"center"} alignItems={"flex-start"}>
//             <Heading>Dashboard</Heading>
//             <Box bgColor={"green.300"} h={"80vh"}>
//                 <HStack gap={"150px"}>
//                     <Heading>Men</Heading>
//                     <Heading>Women</Heading>
//                 </HStack>
//             </Box>
//         </Box>
//     </HStack>
//   )
// }

// export default Admin

import React, { useEffect, useRef } from "react";
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Avatar,
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import AdminDrawer from "./AdminDrawer";
// import Dashbord from "../Tabpanel/Dashboard";
// import Listing from "../Tabpanel/Listing";
// import Customers from "../Tabpanel/Customers";
// import AccountInfo from "../Tabpanel/AccountInfo";
// import { useDispatch, useSelector } from "react-redux";
// import { getAdminAdmin } from "../../Redux/admin/admin.action";
import { Link, useNavigate } from "react-router-dom";
import caratLogo from "../../../utils/Images/caratLogo.png"




export default function AdminPage() {
  // const admin = useSelector((store)=>store.adminReducer.admin)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  const prodRef= useRef();
  const dashboardRef = useRef();
  const customerRef = useRef();
  const orderRef = useRef();
  const accountRef = useRef();

  // useEffect(()=>{
  //   document.title = 'Panel | Admin'
  //   dispatch(getAdminAdmin())
  // },[])

  const handleRoute = ()=>{
    // navigate('/')
  }


  return (
    <>
      <Tabs display={"flex"}>
        <TabList
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          w={{ md: "30%", lg: "20%" }}
          padding={"15px"}
          backgroundColor={"#d8b0f7"}
          color={"black"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}
        >
          <Box width={"60%"} m={"auto"} mt={0} mb={0}>
            <Image
              alt="logo"
              src={caratLogo}
              width={"120px"}
            ></Image>
          </Box>

          <Box textAlign={"center"} mt={"20px"}>
            <Avatar border='2px' size={"xl"} src={"https://avatars.githubusercontent.com/u/98110085?v=4"}></Avatar>
          </Box>
          <Box textAlign={"center"} mt={"20px"} mb={"20px"}>
            <Text>{"DemoName"}</Text>
            <Text color={"black"}>{"DemoEmail"}</Text>
    
          </Box>

          

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "#9442d4",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Dashboard
          </Tab>
          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "#9442d4",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Listings
          </Tab>
          <Tab
            ref={orderRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "#9442d4",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Orders
          </Tab>
          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
           
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "#9442d4",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Customers
          </Tab>
          <Box padding={"0px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={accountRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "white",
              bg: "#9442d4",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Account Info
          </Tab>
          <Button
            mt={"5px"}
            variant={"solid"}
            borderRadius={"5px"}
            colorScheme={"red"}
            p={"8px"}
           onClick={handleRoute}
          >
            Logout
          </Button>
        </TabList>

            {/* tab panals */}
        <TabPanels pl={{ md: "32%", lg: "21%" }}  bg='#CBEDD5'>
          <TabPanel p={0}  >
            {/* <Dashbord/> */}
            Dashboard
          </TabPanel>
          <TabPanel p={0}>
            {/* <Listing/> */}
            Listing
          </TabPanel>
          <TabPanel p={0}>
          Orders page
          </TabPanel>
          <TabPanel p={0}>
            {/* <Customers/> */}
            Customers
          </TabPanel>
          <TabPanel p={0}>
            {/* <AccountInfo/> */}
            Account Info
          </TabPanel>
        </TabPanels>
      </Tabs>

            {/* hambarger side manu bar */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        backgroundColor={"#439A97"}
        color={"white"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}
      >
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          prodRef={prodRef}
        />
        <Box>
          <Menu>
            <MenuButton pr='15px'>
              <Avatar  src={'https://avatars.githubusercontent.com/u/110043714?v=4'} name={'Admin'}></Avatar>
            </MenuButton>
            <MenuList backgroundColor={"#9258bf"} border={"1px solid #9258bf"}>
              <MenuItem backgroundColor={"#9258bf"}>
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem color={"red.100"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"xl"}
                  fontWeight={"light"}
                >
                  {/* {" "}
                  <FiLogOut />{" "} */}
                  <Link  to='/'>
                    Logout
                  </Link>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

    </>
  )
}