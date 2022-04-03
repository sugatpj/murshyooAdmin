import * as yup from 'yup';

export const LoginValidSchema=yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required')
   
  });
export const ProductValidSchema=yup.object().shape({
  name: yup.string().required('Product name is required'),
  price: yup.number().required('price is required'),
 
  
 
});