import { Table, Space, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUserListAction } from "../../../redux/actions";
import { useEffect } from "react";
import moment from "moment";

function CustomersManagement() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  const tableColumns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (_, item) => (
        <Space>
          <Avatar size="large" src={item?.image} />
          <h4>{item?.fullName}</h4>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Total Orders",
      dataIndex: "orders",
      key: "totalOrders",
      render: (orders) => (orders.length > 0 ? `${orders.length} order` : ""),
    },
    {
      title: "Phone Number",
      dataIndex: "orders",
      key: "phoneNumber",
      render: (orders) => orders[0].phoneNumber,
    },
    {
      title: "Total Payment",
      dataIndex: "orders",
      key: "totalPayment",
      render: (orders) => {
        const totalPrice = orders.reduce(
          (sum, order) => sum + order.totalPrice,
          0
        );
        return `USD ${parseInt(totalPrice).toLocaleString()}`;
      },
    },
  ];

  const filteredUserList = userList.data.filter(
    (user) => user.orders.length > 0
  );

  return (
    <Table
      columns={tableColumns}
      dataSource={filteredUserList}
      rowKey="id"
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <ul>
            {record.orders.map((item) => (
              <li key={item.id}>
                {item.name}
                {` - USD ${parseInt(item.totalPrice).toLocaleString()}`}
              </li>
            ))}
          </ul>
        ),
      }}
    />
  );
}

export default CustomersManagement;
