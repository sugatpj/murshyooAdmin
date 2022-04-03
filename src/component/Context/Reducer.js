const Reducer=(state,action)=>{
const{payload,type}=action
switch(type){
    case "LOGIN":
        return{...state,isAuth:true,token:payload}
    case "LOGOUT":
        return{...state,isAuth:false,token:payload}
    case "EMAILERROR":
        return{...state,errorMessage:"invalid username"}
    case "PASSWORDERROR":
        return{...state,errorMessage:"INVALID PASSWORD"}
    default:
        return state
}
}
export default Reducer