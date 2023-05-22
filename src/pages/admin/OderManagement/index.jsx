import { Checkbox, Form, Select, Space, DatePicker, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getOrderListAdmin } from "../../../redux/actions";
import { useEffect } from "react";
import moment from "moment";

import * as S from "./styles";

function OderManagement() {
  const dispatch = useDispatch();

  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderListAdmin());
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
          <ul>
            {record.orderDetails.map((item) => (
              <li key={item.id}>
                {item.name}
                {` - USD ${parseInt(item.price).toLocaleString()}`}
              </li>
            ))}
          </ul>
        ),
      }}
    />
  );
}

export default OderManagement;
