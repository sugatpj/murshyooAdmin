import { Breadcrumb } from "react-bootstrap";
const BreadCrumbs=({item1,activeItem,itemUrl})=>{
return(
    <Breadcrumb>
    <Breadcrumb.Item href={itemUrl}>{item1}</Breadcrumb.Item>
    <Breadcrumb.Item active>{activeItem}</Breadcrumb.Item>
    </Breadcrumb>
)
}
export default BreadCrumbs