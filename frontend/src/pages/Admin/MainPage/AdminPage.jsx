import React, { useEffect, useRef, useState } from "react";
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
import Dashbord from "../Tabpanel/Dashboard";

// import Customers from "../Tabpanel/Customers";
import AccountInfo from "../Tabpanel/AccountInfo";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import caratLogo from "../../../utils/Images/caratLogo.png"
import { adminLogout } from "../../../redux/adminAuth/api";
import axios from "axios";
import Listing from "../Tabpanel/Listing";
import Orders from "../Tabpanel/Orders";


export default function AdminPage() {
  const navigate = useNavigate()
  let [allData, setAllData] = useState([]);
  const dispatch = useDispatch()
  const prodRef= useRef();
  const dashboardRef = useRef();
  const customerRef = useRef();
  const orderRef = useRef();
  const accountRef = useRef();

  let {firstname, email} = JSON.parse(localStorage.getItem("userDetails"))
  let adminToken = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(()=>{

    if(adminToken==null){
      console.log(adminToken)
      navigate("/adminlogin");
    }
    let options = {
      headers:{
        authorization: adminToken
      }
    }
    axios.get(`https://magenta-penguin-tie.cyclic.app/products?page=3`, options)
    .then((res )=> setAllData(res.data));
  },[])

  const handleRoute = ()=>{
    dispatch(adminLogout)
    navigate("/adminlogin");
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
            <Text>{firstname}</Text>
            <Text color={"black"}>{email}</Text>
    
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
        <TabPanels pl={{ md: "32%", lg: "21%" }}  bg='#E6E6FA'>
          <TabPanel p={0}  >
            <Dashbord allData={allData}/>
            {/* Dashboard */}
          </TabPanel>
          <TabPanel p={0}>
            <Listing allData={allData}/>
            {/* Listing */}
          </TabPanel>
          <TabPanel p={0}>
            <Orders/>
          </TabPanel>
          <TabPanel p={0}>
            {/* <Customers/> */}
            Customers
          </TabPanel>
          <TabPanel p={0}>
            <AccountInfo/>
            {/* Account Info */}
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