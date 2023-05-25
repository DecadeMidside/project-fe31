import { Button, Result, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getOrderList, orderProductAction } from "../../../redux/actions";
import { useEffect } from "react";
import { ROUTES } from "../../../constant/routes";
import moment from "moment";

const SuccessCheckoutPage = (values) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("🚀 ~ file: index.jsx:11 ~ SuccessCheckoutPage ~ state:", state);
  const navigate = useNavigate();
  const { id } = useParams();
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
  const tableColumns = [
    {
      title: "Ordered Codes",
      dataIndex: "createdAt",
      key: "id",
    },
    {
      title: "Quantity",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} products`,
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (cartTotalPrice) =>
        `USD ${parseInt(cartTotalPrice).toLocaleString()}`,
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (_, item) =>
        `${item.address}, ${item.wardName}, ${item.districtName}, ${item.cityName}`,
    },
  ];

  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased !"
        subTitle="Purchase Information"
        extra={[
          <div>
            <Table
              columns={tableColumns}
              dataSource={orderList.data}
              rowKey="id"
              pagination={false}
            />
            ,
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
