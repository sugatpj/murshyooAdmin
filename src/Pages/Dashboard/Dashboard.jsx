import image from '../../Assets/home.png'
import {FaUserFriends} from 'react-icons/fa'
import {RiLuggageCartFill} from 'react-icons/ri'
import { productData, userDetails } from '../../global/DummyData'

import './dashboard.scss'
import TopSell from '../../component/TopSell/TopSell'
import NewUser from '../../component/NewUser/NewUser'
import { useContext, useEffect } from 'react'
import { GetUserContext } from '../../component/Context/GetUserContext'
const Dashboard=()=>{
    const{getUser,userData}=useContext(GetUserContext)
    useEffect(()=>{
        const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        getUser(token)   
    },[])
    return(
    <div className="dashboard-container">
        <div className="container">
            <div className="top-main-container">
             <div className='image-container'>
             <img src={image} className="image" alt=''/>
             </div>
              <div className="info-container">
                  <div className='info-detail-container1'>
                   <FaUserFriends fontSize={55} color="white"/>
                   {/* <h2 className='info-text'>{userData.data.user.length}</h2> */}
                  </div>
                  <div className='info-detail-container2'>
                   <RiLuggageCartFill fontSize={55} color="white"/>
                   <h2 className='info-text'>0</h2>
                  </div>
                  

             </div>

            </div>
            <div className="bottom-main-container">
                <div className='rightContainer'>
               <h3 className='topSellTitle'>Top Sell</h3>
                <TopSell/>
                </div>
                <div className='userDetailContainer'>
                    <h3 className='userTitle'>New Users</h3>
                    <NewUser/>

                </div>
               
                  </div>


        </div>

    </div>)
    }
export default Dashboard