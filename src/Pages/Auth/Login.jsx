import { useContext, useState } from 'react'
import { AuthContext } from '../../component/Context/AuthContext'
import {HiOutlineMail} from 'react-icons/hi'
import{FaKey}from 'react-icons/fa'
import { Field, Form, Formik,ErrorMessage } from 'formik'
import { LoginValidSchema } from '../../component/validator/validationSchema'
import './login.scss'
const Login=()=>{
 
   const[isDissable,setIsDissable]=useState(false)
    const initialValue={
        email:'',
        password:'',
    }
  const{login,errorMessage}=useContext(AuthContext)
    const handleLogin=(values)=>{
       
        console.log(values)
        setIsDissable(true)
        login(values)
    }
    
return(
    <div className="loginContainer">
        <div className="container">
       
            <div className="mainContainer">
            <h3 style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Welcome back!</h3>
               <Formik 
                initialValues={initialValue}
                onSubmit={(values)=>handleLogin(values)}
                validationSchema={LoginValidSchema}
            
                >
                    <Form
                    autoComplete={false}
                    style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                         <p style={{textAlign:"center",color:"red"}}>{errorMessage}</p>
                        <div className='inputContainer'>
                            <HiOutlineMail fontSize={28} color={"white"}/>
                        <Field 
                        type="text" 
                        name="email"
                        placeholder="Enter your email"
                        className="inputField"
                        
                        />
                         
                        </div>
                        <p style={{color:"red"}}><ErrorMessage name='email'/></p>
                      
                        
                       
                       <div className='inputContainer'>
                           <FaKey fontSize={24} color={"white"}/>
                       <Field 
                        type="password" 
                        name="password"
                        placeholder="Enter your Password"
                        className="inputField"
                        />
                       </div>
                       <p style={{color:"red"}}><ErrorMessage name='password'/></p>
                       <div className='loginBtnContainer'>
                    <button type='submit'  className='loginBtn'>
                        login
                    </button>
                    </div>
                        
                    </Form>

                </Formik>

            </div>

        </div>

    </div>
)
}
export default Login