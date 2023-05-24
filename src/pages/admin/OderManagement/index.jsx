import {
  Checkbox,
  Form,
  Select,
  Space,
  DatePicker,
  Table,
  Row,
  Col,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getOrderListAdmin, getCityListAction } from "../../../redux/actions";
import { useEffect } from "react";
import moment from "moment";

import * as S from "./styles";

function OderManagement() {
  const dispatch = useDispatch();

  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderListAdmin());
  }, []);
  useEffect(() => {
    dispatch(getCityListAction());
  }, []);

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
      render: () => (
        <Space>
          <S.StyledBtnProduct type="primary" outline={true}>
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
              {record.orders.map((item) => (
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
