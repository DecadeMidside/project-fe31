import { Result, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getOrderList, orderProductAction } from "../../../redux/actions";
import { useEffect } from "react";
import { ROUTES } from "../../../constant/routes";
import moment from "moment";
import * as S from "./styles";
import { GiCheckMark, GiShoppingBag } from "react-icons/gi";

const SuccessCheckoutPage = (values) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);

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
      align: "center",
    },
    {
      title: "Quantity",
      dataIndex: "orderDetails",
      align: "center",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} products`,
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      align: "center",
      key: "totalPrice",
      render: (cartTotalPrice) =>
        `USD ${parseInt(cartTotalPrice).toLocaleString()}`,
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      align: "center",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Address",
      dataIndex: "address",
      align: "center",
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
          <S.styledCheckBtn
            onClick={() => navigate(ROUTES.USER.ORDEREDHISTORIES)}
          >
            Checking Your Purchased{" "}
            <GiCheckMark
              style={{
                fontSize: "18px",
                marginBottom: "-2px",
              }}
            />
          </S.styledCheckBtn>,
          <S.styledContinueBtn
            onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
          >
            Continue Shopping{" "}
            <GiShoppingBag
              style={{
                fontSize: "18px",
                marginBottom: "-2px",
              }}
            />
          </S.styledContinueBtn>,
        ]}
      />
    </div>
  );
};
export default SuccessCheckoutPage;
