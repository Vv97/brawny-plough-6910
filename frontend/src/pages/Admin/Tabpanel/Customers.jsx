// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import { useSearchParams } from "react-router-dom";
// // import { getAdminUsers } from "../../Redux/admin/admin.action";
// import { useDispatch, useSelector } from "react-redux";
// import CustomerItems from "../Compo/CustomerItem";
// import CustomerSerch from "../Compo/CustomerSerch";


// export default function Customers() {
// //   const users = useSelector((store)=>store.adminReducer.users)
//   const [page,setPage] = useState(1)
//   const dispatch = useDispatch()
//   const [searchParams] = useSearchParams()
//   const location = useLocation()

//   // console.log(users)

//   useEffect(()=>{
//     const getUserParam = {
//       params: {
        
//         _limit:5,
//         _page:page,
//         q:searchParams?.getAll('userserch')
//       }
//     }
//     // dispatch(getAdminUsers(getUserParam))

//   },[location.search,page])

//   useEffect(()=>{
//     setPage(1)
//   },[location.search])
//   return <>
//     <CustomerSerch/>
//     <CustomerItems  data={users} page={page} setPage={setPage} />

//   </>;
// }