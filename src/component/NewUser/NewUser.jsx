import './newuser.scss'

import {FaUserFriends} from 'react-icons/fa'
import { userDetails } from '../../global/DummyData'
import { useContext, useEffect } from 'react'
import { GetUserContext } from '../Context/GetUserContext'
const NewUser=()=>{
    const{getUser,userData}=useContext(GetUserContext)
    useEffect(()=>{
        const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        getUser(token)   
    },[])
    console.log(getUser)
return(
 <div className="userContainer">
     <div className="container">
         {userData?.data?.user?.map((item,index)=>(
             (item.role==='user')&&<div className="mainContainer" key={index}>
              <div className="iconContainer">
               <figure className='iconFigure'>
                  <FaUserFriends fontSize={30}/>
               </figure>
              </div>
              
              <div className="userDetails">
                  
                  <h6 className='userText'>{item.email}</h6>
                  <h6 className='userText'>{item.contact}</h6>
                  <h6 className='userText'>{item.address}</h6>
               </div>
             
          </div>

         ))}
        

     </div>

</div>)
}
export default NewUser