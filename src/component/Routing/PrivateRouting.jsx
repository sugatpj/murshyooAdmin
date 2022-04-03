import { Routes } from "react-router-dom"
import Login from "../../Pages/Auth/Login"

const PrivateRouting=()=>{
return(
    <>
    <Routes>
        <Routes path="/login" element={<Login/>}/>
    </Routes>
    </>
)
}
export default PrivateRouting