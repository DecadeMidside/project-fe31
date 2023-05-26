import { Space, Table, Row, Col, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  getOrderListAdmin,
  getCityListAction,
  updateOrderAction,
} from "../../../redux/actions";
import { useEffect } from "react";
import moment from "moment";
import { SlLocationPin } from "react-icons/sl";
import * as S from "./styles";

const ORDER_STATUS = {
  WAITING: "waiting",
  SHIPPING: "shipping",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

const PAYMENT_METHOD = {
  COD: "cod",
  ATM: "atm",
};

function OderManagement() {
  const dispatch = useDispatch();
  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderListAdmin());
    dispatch(getCityListAction());
  }, []);

  const handleChangeStatusOrder = (id, status) => {
    dispatch(
      updateOrderAction({
        id: id,
        status: status,
      })
    );
  };

  const renderOrderAction = (id, status) => {
    if ([ORDER_STATUS.CANCELLED, ORDER_STATUS.DELIVERED].includes(status)) {
      return null;
    }
    switch (status) {
      case ORDER_STATUS.SHIPPING: {
        return (
          <S.StyledBtnProduct
            type="primary"
            outline={true}
            onClick={() => handleChangeStatusOrder(id, ORDER_STATUS.DELIVERED)}
          >
            Delivered
          </S.StyledBtnProduct>
        );
      }
      case ORDER_STATUS.WAITING:
      default: {
        return (
          <S.StyledBtnProduct
            type="primary"
            outline={true}
            onClick={() => handleChangeStatusOrder(id, ORDER_STATUS.SHIPPING)}
          >
            Shipping
          </S.StyledBtnProduct>
        );
      }
    }
  };

  const renderOrderStatus = (status) => {
    switch (status) {
      case ORDER_STATUS.SHIPPING: {
        return <Tag color="blue">SHIPPING</Tag>;
      }
      case ORDER_STATUS.DELIVERED: {
        return <Tag color="green">DELIVERED</Tag>;
      }
      case ORDER_STATUS.CANCELLED: {
        return <Tag>CANCELLED</Tag>;
      }
      case ORDER_STATUS.WAITING:
      default: {
        return <Tag color="gold">WAITING</Tag>;
      }
    }
  };

  const renderPaymentMethod = (paymentMethod) => {
    switch (paymentMethod) {
      case PAYMENT_METHOD.ATM: {
        return <Tag color="blue">ATM</Tag>;
      }
      case PAYMENT_METHOD.COD:
      default: {
        return <Tag color="magenta">COD</Tag>;
      }
    }
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
      render: (status) => renderOrderStatus(status),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (paymentMethod) => renderPaymentMethod(paymentMethod),
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
          {renderOrderAction(record.id, record.status)}
          {record.status !== ORDER_STATUS.CANCELLED && (
            <S.StyledBtnProduct
              onClick={() =>
                handleChangeStatusOrder(record.id, ORDER_STATUS.CANCELLED)
              }
            >
              Cancelled
            </S.StyledBtnProduct>
          )}
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
      loading={orderList.load}
      expandable={{
        expandedRowRender: (record) => (
          <Row>
            <Col span={24}>
              {record.orderDetails.map((item) => (
                <Row
                  key={item.id}
                  gutter={[16, 16]}
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    borderBottom: "1px solid green",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <Col span={6}>{item.name}</Col>
                  <Col span={6}>
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </Col>
                  <Col span={6}>
                    {" "}
                    {`  USD ${parseInt(item.price).toLocaleString()}`}
                  </Col>
                  <Col span={6}>
                    <SlLocationPin />
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
