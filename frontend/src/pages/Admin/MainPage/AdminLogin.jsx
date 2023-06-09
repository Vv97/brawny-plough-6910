import React, { useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Text, VStack, Box } from "@chakra-ui/layout";
import caratLogo from "../../../utils/Images/caratLogo.png";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { adminLogin } from "../../../redux/adminAuth/api";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const newDetails = {
      ...loginDetails,
      [e.target.name]: e.target.value,
    };
    setLoginDetails(newDetails);
  };


  const handleLogin = () =>{
    // let obj = {
    //   headers: {
    //     authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI4NTcwNTRiODRjNmUzMDM5ZmVlOTEiLCJpYXQiOjE2ODAzNjUzMzN9.8B3BEaNQ4O515t_sOw6FId0HbKz-qBky9utDEPJ6dmI"
    //   }
    // };
    // let data = axios.get(`https://magenta-penguin-tie.cyclic.app/products`, obj)
    // .then((res )=> console.log(res.data))

    dispatch(adminLogin(loginDetails)).then((res) => {
      if (res) {
        navigate("/admin");
      }
    });
    
    
  }

  return (
    <>
      <Image alt="logo" src={caratLogo} width={"180px"} m={2}></Image>
      <Box bgColor={"purple.100"}>
        <Heading
        p={4}
        color={"white"}
          fontWeight={"semibold"}
          textAlign={"center"}
          bgGradient="linear(to-l, #56AACF, #AA28FF, #8938FA,)"
        >
          Welcome Back!
        </Heading>
        <Flex
          justifyContent={"center"}
          gap={{ base: "10px", md: "80px" }}
          mt={"50px"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack
            mb={"80px"}
            gap={3}
            width={{ base: "100%", md: "30%" }}
            alignItems={"left"}
            padding={"10px"}
          >
            <Heading size={"md"}>Log In</Heading>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              border={"1px solid purple"}
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              border={"1px solid purple"}
              onChange={(e) => handleChange(e)}
            />
            <Text pt={"15px"} textDecoration={"underline"}>
              Forgot Your Password?
            </Text>
            <Button
              onClick={handleLogin}
              variant={"solid"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color={"white"}
              w={"100%"}
              _hover={{ transform: "scale(1.03)" }}
              _active={{
                border: "1px solid black",
                bgColor: "white",
                color: "black",
              }}
            >
              Sign In
            </Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default AdminLogin;
