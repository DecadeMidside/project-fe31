import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Input,
  Select,
  Table,
  Space,
  Avatar,
  Pagination,
} from "antd";

import { getUserListAction } from "../../../redux/actions";
import * as S from "./styles";

function UserManagement() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.jsx:11 ~ userList:", userList);

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);
  const renderUser = useMemo(() => {
    return userList.data.map((item) => {
      return <h1>{item.fullName}</h1>;
    });
  }, [userList.data]);
  const tableColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => {
        return (
          <Space>
            <Avatar size={"large"} src={item?.image} />
            <h4>{item?.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, item) => item.email,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (_, item) => item.role,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => {
        return (
          <Space>
            <S.StyledBtnProduct type="primary" outline={true}>
              Update
            </S.StyledBtnProduct>
            <S.StyledBtnProduct outline={false}>Delete</S.StyledBtnProduct>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      {renderUser}
      <Row justify="space-between" align="center">
        <h1>User Management</h1>
      </Row>
      <S.FilterWrapper>
        <h5>FILTER</h5>
        <Row gutter={[16, 16]} style={{ marginTop: 4 }}>
          <Col span={12}>
            <Input placeholder="User Name" />
          </Col>
        </Row>
      </S.FilterWrapper>
      <Table
        columns={tableColumn}
        dataSource={userList.data}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}

export default UserManagement;
