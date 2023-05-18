import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderList } from "../../../redux/actions";
import { useEffect } from "react";
import moment from "moment";

const SuccessCheckoutPage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("🚀 ~ file: index.jsx:11 ~ SuccessCheckoutPage ~ state:", state);

  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);
  console.log(
    "🚀 ~ file: index.jsx:12 ~ SuccessCheckoutPage ~ orderList:",
    orderList
  );
  const count = 0;
  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderList({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);
  return (
    <Result
      status="success"
      title="Successfully Purchased !"
      subTitle="Purchase Information"
      extra={[
        <div>
          <h3> PURCHASE INFORMATION </h3>
          <span> Purchased Code : {state.email} </span>
          <p> ---------------------- </p>
          <h3> SHIPMENT DETAILS </h3>
          <span> Full name : {userInfo.data.fullName} </span>
          <span> Address : {state.cityCode} </span>
          <span> {state.phoneNumber}</span>
          <span> {state.paymentMethod}</span>
          <span> {state.address}</span>
          <span> {userInfo.city}</span>
        </div>,
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
export default SuccessCheckoutPage;
