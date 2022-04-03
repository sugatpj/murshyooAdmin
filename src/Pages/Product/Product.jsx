
import { useContext, useEffect, useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";

import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";
import { GetUserContext } from "../../component/Context/GetUserContext";

import StyledDropzone from "../../component/StyleDropzone/StyleDropzone";
import { ProductValidSchema } from "../../component/validator/validationSchema";
import Select from 'react-select'
import "./product.scss";
const Product = () => {
  const [file, setFile] = useState(null);
  const{categoryData,getCategory,createProduct}=useContext(GetUserContext)
  const[selectValue,setSelectValue]=useState()
  const[token,setToken]=useState('')
 
  useEffect(()=>{
    const data=localStorage.getItem('userDetails')
        const {token}=JSON.parse(data)
        setToken(token) 
    getCategory()
  },[])

  
    const options = [
   
      { value:`${categoryData?categoryData.cat[0]._id:''}`, label: `${categoryData?categoryData.cat[0].name:''}` },
      { value:`${categoryData?categoryData.cat[1]._id:''}`, label: `${categoryData?categoryData.cat[1].name:''}`},
      { value:`${categoryData?categoryData.cat[2]._id:''}`, label: `${categoryData?categoryData.cat[2].name:''}` }
    ]


 

  const initialValue = {
    name: "",
    promoCode: "",
    price: "",
  
   
  };
  const handleSubmit=(values)=>{
    const datas={...values,file,selectValue}
    createProduct(datas,token)
  }
  return (
    <div className="productContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem={"Prodcut"} itemUrl="/" />
        <h4 className="productTitle">Product</h4>
        <div className="mainContainer" style={{ width: "100%" }}>
          <Formik
            initialValues={initialValue}
            validationSchema={ProductValidSchema}
            onSubmit={(values)=>handleSubmit(values)}
          >
            <Form
              autoComplete={false}
              style={{
                display: "grid",
                gap: 20,
                padding: 10,
                gridTemplateColumns: "1fr 1fr",
              }}
              encType="multipart/form-data"
            >
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Product Title"
                  className="inputField"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div>
                <Field
                  type="number"
                  name="price"
                  placeholder="Product Price"
                  className="inputField"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="price" />
                </p>
              </div>

              <div>
                <Field
                  type="text"
                  name="promoCode"
                  placeholder="PromoCode"
                  className="inputField"
                />
              </div>
              <div className="selectDropDown">
               <Select options={ options} name="category" onChange={setSelectValue}/>
                <p style={{ color: "red" }}>
                  <ErrorMessage name="category" />
                </p>
              </div>
              <div className="imageContainer">
                <StyledDropzone setFile={setFile} />
              </div>
              <div>
                <button className="formSubmit" type='submit'>
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Product;
