import { Space, Table, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  getOrderListAdmin,
  getCityListAction,
  updateOrderAction,
} from "../../../redux/actions";
import { useEffect } from "react";
import moment from "moment";

import * as S from "./styles";

function OderManagement() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { orderList } = useSelector((state) => state.order);
  console.log(
    "🚀 ~ file: index.jsx:19 ~ OderManagement ~ orderList:",
    orderList
  );

  useEffect(() => {
    dispatch(getOrderListAdmin({ id: id }));
  }, []);
  useEffect(() => {
    dispatch(getCityListAction());
  }, []);
  // useEffect(() => {
  //   dispatch(updateOrderAction());
  // }, []);
  const onAccept = (record) => {
    const updatedOrderList = orderList.data.map((order) => {
      if (order.id === record.id) {
        return {
          ...order,
          status: "Pending",
        };
      }
      return order;
    });
    dispatch(
      updateOrderAction({
        data: updatedOrderList,
        id: id,
      })
    );
  };
  const tableColumns = [
    {
      title: "Ordered Codes",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Quantity Product",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} products`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Price",
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space>
          <S.StyledBtnProduct
            type="primary"
            outline={true}
            onClick={() => onAccept(record)}
          >
            Accept
          </S.StyledBtnProduct>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={tableColumns}
      dataSource={orderList.data}
      rowKey="id"
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <Row>
            <Col span={24}>
              {record.orderDetails.map((item) => (
                <Row
                  key={item.id}
                  gutter={[16, 16]}
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  <Col span={8}>{item.name}</Col>
                  <Col span={8}>
                    {" "}
                    {`  USD ${parseInt(item.price).toLocaleString()}`}
                  </Col>
                  <Col span={8}>
                    {" "}
                    {record.address}, {record.wardName}, {record.districtName},
                    {record.cityName}`
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        ),
      }}
    />
  );
}

export default OderManagement;
