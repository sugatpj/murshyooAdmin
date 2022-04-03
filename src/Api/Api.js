const baseUrl=process.env.REACT_APP_BASE_URL
const Api={
    "adminlogin":`${baseUrl}/api/admin/signin`,
    "getUser":`${baseUrl}/api/user/getuser`,
    "getProduct":`${baseUrl}/api/product/getproduct`,
    "deleteUser":`${baseUrl}/api/user`,
    "getCategory":`${baseUrl}/api/category/getcategory`,
    "createdProduct":`${baseUrl}/api/product/create`
}
export {Api}