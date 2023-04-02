import { Box, Divider, Heading, useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function Dashbord({ allData }) {
  console.log(allData, "asdf");
  let [diamond, setDiamond] = useState();
  let [gold, setGold] = useState();
  let [platinum, setPlatinum] = useState();
  let [pieArr, setPieArr] = useState([]);
  const variant = useBreakpointValue({
    base: "350",
    sm: "400",
    md: "400",
    lg: "550",
  });

  useEffect(() => {
    try {
      let d = allData.filter((el) => el.material == "Diamond");
      setDiamond(d);
      let g = allData.filter((el) => el.material == "Gold");
      setGold(g);
      let p = allData.filter((el) => el.material == "Platinum");
      setPlatinum(p);
      setPieArr([p.length, g.length, d.length]);
    } catch (error) {}
  }, [allData]);


  return (
    <Box pt={{ base: "80px", md: "20px" }} minH={"100vh"}>
      <Heading textAlign={"center"} mb={"20px"}>Rings</Heading>

      <Box width={{base: "280px", sm: "350px", md: "480px", lg: "600px"}} m={"auto"} bgColor={"purple.200"} p={2}>
      <Chart
        type="donut"
        width={variant}
        height={variant}
        series={pieArr}
        options={{
          colors: ["#9400D3", "#8B008B", "#4B0082"],
          labels: ["Platinum", "Gold", "Diamond"],

          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    fontSize: "40px",
                    color: "#6096B4",
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: true,
          },

          responsive: [
            {
              breakpoint: 400,
              options: {
                plotOptions: {
                  donut: {
                    horizontal: true,
                  },
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        }}
      />
      </Box>
    </Box>
  );
}
