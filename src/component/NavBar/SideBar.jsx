import { GrUserAdmin } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
const SideBar = () => {
  const { logout } = useContext(AuthContext);
  const[user,setUser]=useState('')
  useEffect(()=>{
    const data=localStorage.getItem('userDetails')
    const parseData=JSON.parse(data)
    setUser(parseData.user.email)
  },[])
  console.log(user)
 
  const handleLogout = () => {
    localStorage.removeItem('userDetails')
    logout();
  };
  return (
    <div className="sidebar-container">
      <div className="container">
        <div className="main-container">
          <div className="admin-logo-container">
            <h5 className="welcome-text">Welcome to Murshyooo</h5>
            <div className="icons-container">
              <GrUserAdmin fontSize={35} />
            </div>

            <h6 className="user-text">{user}</h6>
          </div>
          <div className="sub-main-container">
            <NavLink exact to="/" className="nav-item">
              <MdDashboard fontSize={30} />
              DashBoard
            </NavLink>
            <NavLink to="/order" className="nav-item">
              <GiShoppingCart fontSize={30} />
              Oders
            </NavLink>
            <NavLink to="/product" className="nav-item">
              <MdOutlineProductionQuantityLimits fontSize={30} />
              Products
            </NavLink>
            <NavLink to="/user" className="nav-item">
              <FiUsers fontSize={30} />
              User
            </NavLink>
            <div className="logoutBtnContainer">
              <BiLogOut fontSize={30} />
              <button className="logoutBtn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
