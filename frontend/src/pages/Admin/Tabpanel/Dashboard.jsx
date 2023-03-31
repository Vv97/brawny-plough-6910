// import { Box } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// // import { getAdminMen, getAdminWomen } from "../../Redux/admin/admin.action";
// import { useDispatch, useSelector } from "react-redux";
// import Piechart from "../Compo/Piechart";

// export default function Dashbord() {
//   const mens = useSelector((store)=>store.adminReducer.mens)
//   const womens = useSelector((store)=>store.adminReducer.womens)
//   const dispatch = useDispatch()
//   useEffect(() => {
//         // dispatch(getAdminMen())
//         // dispatch(getAdminWomen())
//   }, []);
//   return (

//     <Box  pt={{ base: "80px", md: "20px" }} minH={"100vh"} >
//         <Piechart  mens={mens} womens={womens}/>
//     </Box>
//   );
// }