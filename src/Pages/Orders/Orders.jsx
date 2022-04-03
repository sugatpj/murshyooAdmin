

import BreadCrumbs from "../../component/BreadCrumb/BreadCrumb";
import TopSell from "../../component/TopSell/TopSell";
import "./orders.scss";


const Orders = () => {
  return (
    <div className="ordersContainer">
      <div className="container">
        <BreadCrumbs item1={"Dashboard"} activeItem="Orders" itemUrl={'/'}/>
        <h4 className="ordersTitle">ORDERS</h4>
        <div className="mainContainer">
          <div className="orderMainContainer">
            <h4 className="orderTitle">New Orders</h4>
            <div className="orderTable">
              <table>
                <tr>
                  <th className="headContainer">client id</th>
                  <th className="headContainer">contact</th>
                  <th className="headContainer">product id</th>
                  <th className="headContainer">product price</th>
                  <th className="headContainer">product quantity</th>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="rightContainer">
            <h5 className="title">Top Order product</h5>
            <TopSell />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Orders;
