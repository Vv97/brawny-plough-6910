import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { BiRupee } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcVideoCall } from "react-icons/fc";
import { ImHome3 } from "react-icons/im";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const str = (e) => {
    axios
      .post("https://magenta-penguin-tie.cyclic.app/cart", data, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1MjgwYWU0NWY4MWJlODkzYjBkZDciLCJpYXQiOjE2ODAyMDE3NjJ9.y88YsqEDM5sU_tLGcryhbaKrfNkF-ZI4fePxnHShQ2k",
        },
      })
      .then((res) => {
        toast.success("product added to the card");
      })
      .catch((err) => {
        toast.error(err.mssg);
      });
  };
  console.log("sd", id);
  useEffect(() => {
    axios
      .get(`https://magenta-penguin-tie.cyclic.app/products/${id}`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI1MjgwYWU0NWY4MWJlODkzYjBkZDciLCJpYXQiOjE2ODAyMDE3NjJ9.y88YsqEDM5sU_tLGcryhbaKrfNkF-ZI4fePxnHShQ2k",
        },
      })
      .then((res) => {
        setData(res.data.produt);
        console.log(res);
      });
  }, []);
  return (
    <Box display="flex" gap="80px">
      <Box
        className="productImage"
        width="40%"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      >
        <Image src={data.image1} width="100%"></Image>
      </Box>
      <Box mr="50px" width="60%" bg="#F5F5F5">
        <Heading m="30px" as="h3" size="md">
          {" "}
          {data.name}{" "}
        </Heading>
        <Grid templateColumns="repeat(2,1fr)" m="30px" gap="40px">
          <GridItem cursor="pointer">
            <Box display="flex" justifyContent="space-between">
              <label htmlFor=""> select size </label>
              <label> size guide </label>
            </Box>
            <Select cursor="pointer">
              <option value="option1">5mm</option>
              <option value="option2">6mm</option>
              <option value="option3">7mm</option>
            </Select>
          </GridItem>
          <GridItem cursor="pointer">
            <Box display="flex" justifyContent="space-between">
              <label htmlFor=""> Delivery & Store Detail </label>
              <label> Locate me </label>
            </Box>
            <Box>
              <Input cursor="pointer" placeholder="LOCATION"></Input>
            </Box>
          </GridItem>
          <GridItem>
            <Box display="flex" justifyContent="space-between">
              <label htmlFor=""> Customization </label>
              <label> Diamond guide </label>
            </Box>
            <Select cursor="pointer">
              <option value="option1">14KT Rose Gold</option>
              <option value="option2">14KT White Gold</option>
              <option value="option3">14KT Yellow Gold</option>
            </Select>
          </GridItem>
        </Grid>
        <Box m="30px">
          <Box display="flex" gap="10px">
            <Text fontSize="xl" as="b">
              {" "}
              <BiRupee /> {data.price - (data.discount * data.price) / 100}{" "}
            </Text>
            <Text fontSize="xl" color="gray" as="del">
              {" "}
              {data.price}{" "}
            </Text>
          </Box>
          <Text color="red"> Flat 10% off on Diamond Prices </Text>
          <Box mt="5px" display="flex" justifyContent="space-between">
            <Button
              onClick={str}
              cursor="pointer"
              bg="purple.500"
              color="black"
              size="lg"
              width="250px"
            >
              Add To Cart
            </Button>
            <Button bg="gray.400" color="black" size="lg" width="250px">
              Find in Store
            </Button>
          </Box>
          <Text color="gray">Upon price drop, Notify me</Text>
          <Box display="flex" gap="105px" mt="30px">
            <Box boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
              <Box display="flex" gap="5px">
                <FcVideoCall size="40px" />
                <Text fontSize="12px">
                  Want a Closer Look?{" "}
                  <Text>Get a live video call with our design consultant</Text>
                </Text>
              </Box>
              <Button
                bg="green.100"
                color="green.400"
                m="20px"
                cursor="pointer"
              >
                Schedule a Video Call
              </Button>
            </Box>
            <Box boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
              <Box display="flex" gap="5px">
                <ImHome3 size="40px" />
                <Text fontSize="12px">
                  Try it on at Home?{" "}
                  <Text>
                    {" "}
                    Book a Free appointment to try it on at your home
                  </Text>
                </Text>
              </Box>
              <Button color="red.400" bg="red.100" cursor="pointer" m="20px">
                Book Home Appointment
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
