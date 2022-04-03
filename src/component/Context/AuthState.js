import React,{useReducer} from 'react'
import {AuthContext} from './AuthContext'
import Reducer from './Reducer'
import axios from 'axios'
import { Api } from '../../Api/Api'


const initialState={
    isAuth:false,
    errorMessage:''
}
const AuthState=({children})=>{
    const[state,dispatch]=useReducer(Reducer,initialState)
    const login=(values)=>{
      const{email,password}=values
        let data={
            'email':email,
            'password':password
        }
        const headers = {
            'Content-Type': 'application/json',
            }
        axios.post(Api.adminlogin,data,{
            headers:headers
        })
          .then(function (response) {
            localStorage.setItem('userDetails',JSON.stringify(response.data))
              dispatch({
                  type:"LOGIN"
              })
              
            console.log(response);
          })
          .catch(function (error) {
              if(error.response.data.message==="invalid user name"){
                   dispatch({
                    type:"EMAILERROR",
                  
                })
              }
              else if(error.response.data.message==="password is invalid"){
                dispatch({
                    type:"PASSWORDERROR",
                  
                })
              }
            
            console.log(error.response.data.message);
          });
    }
    const logout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
    return<AuthContext.Provider value={{
        ...state,login,logout
    }}>
        {children}
    </AuthContext.Provider>
}
export {AuthState}