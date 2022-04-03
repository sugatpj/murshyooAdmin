import axios from "axios";
import React,{useReducer} from "react";
import { Api } from "../../Api/Api";
import {GetUserContext} from './GetUserContext'
import GetUserReducer from "./GetUserReducer";



const initialState={
    isLoading:false,
    userData:'',
    productData:'',
    categoryData:''
}
const GetUserState=({children})=>{
    const[state,dispatch]=useReducer(GetUserReducer,initialState)
    const getUser=async(token)=>{
        const headers={
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }
        await axios.get(Api.getUser,{
            headers:headers
        }).then(function(response){
            dispatch({
                type:"GETUSER",
                payload:response
            })
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }
    const deleteUser=async(token,id)=>{
        const headers={
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }
        await axios.delete(`${Api.deleteUser}/${id}`,{
            headers:headers
        }).then(function(response){
            dispatch({
                type:"DELETEUSER",
                })
            
      
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }

    //product state
 const getProduct=()=>{
        const headers={
            'Content-Type': 'application/json',
           
        }
        axios.get(Api.getProduct,{
            headers:headers
        }).then(function(response){
            dispatch({
                type:"GETPRODUCT",
                payload:response
            })
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })

    }
 const createProduct=async(datas,token)=>{
console.log(datas)
console.log(token)
const{name,promoCode,file,selectValue,price}=datas
const formData=new FormData();
formData.append("productPicture",file)
formData.append("name",name)
formData.append("promoCode",promoCode)
formData.append("price",price)
formData.append("category",selectValue.value)


   
    const headers={
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${token}`,
       
    }
    await axios.post(Api.createdProduct,formData,{
        headers:headers
    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })
 }

//category state
const getCategory=()=>{
    const headers={
        'Content-Type': 'application/json',
       
    }
    axios.get(Api.getCategory,{
        headers:headers
    }).then(function(response){
        dispatch({
            type:"GETCATEGORY",
            payload:response.data
        })
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })

}

    return <GetUserContext.Provider value={{
        ...state,getUser,getProduct,deleteUser,getCategory,createProduct
    }}>
    {children}
    </GetUserContext.Provider>

}
export {GetUserState}