import './inputfield.scss'
const InputField=({name,type,handleChange,value})=>{
   
return(
    <div className="inputFieldContainer">
        <div className="container">
            <div className="labelContainer">
                <label className='labelName'>{name}</label>
            </div>
            <div className="inputFieldContainer">
                <input type={type} className='inputText' value={value} onChange={handleChange} />

            </div>

        </div>

    </div>
)
}
export default InputField