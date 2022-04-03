import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";

import "./user.scss";
import { userDetails } from "../../global/DummyData";
import {AiFillDelete} from 'react-icons/ai'
import { useContext, useEffect, useState } from "react";
import { GetUserContext } from "../../component/Context/GetUserContext";
const User = () => {
const{getUser,userData,deleteUser}=useContext(GetUserContext)
const[token,setToken]=useState('')
const[getData,setData]=useState(false)
useEffect(()=>{
  const data=localStorage.getItem('userDetails')
  const {token}=JSON.parse(data)
  setToken(token)
  getUser(token)
},[userData])
const handleDelete=(id)=>{
  deleteUser(token,id)
  
}

  return (
    <div className="usersContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem="user" itemUrl={"/"} />
        <h4 className="usersTitle">User collections</h4>
        <div className="mainContainer">
          <div className="usersDetailsContainer">
            <table>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            
                  {userData?.data?.user?.map((item,index)=>(
                      (item.role==='user')&& <tr>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.contact}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td style={{paddingLeft:20}}><AiFillDelete fontSize={26} color="gray" onClick={()=>handleDelete(item._id)}/></td>
                      </tr>
                     
                  ))}
               
             
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
