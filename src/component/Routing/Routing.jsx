import { useContext, useState } from "react"
import {  Route, Routes } from "react-router-dom"
import Login from "../../Pages/Auth/Login"
import Dashboard from "../../Pages/Dashboard/Dashboard"
import Orders from "../../Pages/Orders/Orders"
import PageNotFound from "../../Pages/PageNotFound"
import Product from "../../Pages/Product/Product"
import User from "../../Pages/User/User"
import { AuthContext } from "../Context/AuthContext"

import SideBar from "../NavBar/SideBar"

const Routing=()=>{
    const{isAuth}=useContext(AuthContext)
    
return(<>
{isAuth?
<>
<SideBar/>
<Routes>
    
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/order" element={<Orders/>}/>
    <Route path="/user" element={<User/>}/>
   
    <Route path="/product" element={<Product/>}/>
    <Route path="*" element={<PageNotFound/>}/>

</Routes>
</>
:

<Login/>
}



</>)
}
export default Routing