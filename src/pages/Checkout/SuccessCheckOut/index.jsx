import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderList, orderProductAction } from "../../../redux/actions";
import { useEffect } from "react";
import { ROUTES } from "../../../constant/routes";
import moment from "moment";

const SuccessCheckoutPage = (values) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("🚀 ~ file: index.jsx:11 ~ SuccessCheckoutPage ~ state:", state);
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);
  console.log(
    "🚀 ~ file: index.jsx:17 ~ SuccessCheckoutPage ~ orderList:",
    orderList
  );

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderList({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased !"
        subTitle="Purchase Information"
        extra={[
          <div>
            <h3> PURCHASE INFORMATION </h3>
            <span> Purchased Code : {orderList.data.createdAt} </span>
            <p> ---------------------- </p>
            <h3> SHIPMENT DETAILS </h3>
            <span> Full name :{orderList.fullName}</span>
            <br />
            <span> Address : </span>
            <br />
            <span> Telephone : {state.phoneNumber}</span>
            <br />
            <span> Payment Method : {state.paymentMethod}</span>
            <br />
            <span> Address : {state.address}</span>
            <br />
            <span> {userInfo.city}</span>
          </div>,
          <Button
            type="primary"
            key="console"
            onClick={() => navigate(ROUTES.USER.ORDEREDHISTORIES)}
          >
            Checking Your Purchased
          </Button>,
          <Button key="buy" onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}>
            Continue Shopping
          </Button>,
        ]}
      />
    </div>
  );
};
export default SuccessCheckoutPage;
