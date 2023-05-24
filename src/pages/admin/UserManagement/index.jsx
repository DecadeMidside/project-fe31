import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Input,
  Popconfirm,
  Table,
  Space,
  Avatar,
} from "antd";
import { getUserListAction, deleteUserAction } from "../../../redux/actions";
import * as S from "./styles";

function UserManagement() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: index.jsx:10 ~ UserManagement ~ userInfo:", userInfo);
  const { userList } = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.jsx:10 ~ UserManagement ~ userList:", userList);
  const [filterParams, setFilterParams] = useState({
    role: "",
    searchKey: "",
  });
  const handleFilter = (key, values) => {
    setFilterParams({
      ...filterParams,
      page: 1,
      [key]: values,
    });
    dispatch(
      getUserListAction({
        ...filterParams,
        page: 1,
        [key]: values,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getUserListAction({
        ...filterParams,
      })
    );
  }, []);

  const tableColumns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (_, item) => (
        <Space>
          <Avatar size={"large"} src={item?.image} />
          <h4>{item?.fullName}</h4>
        </Space>
      ),
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
      render: (_, item) => (
        <Space>
          <S.StyledBtnProduct type="primary" outline={true}>
            Update
          </S.StyledBtnProduct>

          {userInfo.data.id !== item.id ? (
            <Popconfirm
              title="Are you sure you want to delete this product?"
              onConfirm={() =>
                dispatch(
                  deleteUserAction({
                    ...filterParams,
                    id: item.id,
                  })
                )
              }
              okText="Delete"
              cancelText="Cancel"
            >
              <S.StyledBtnProduct outline={false}>Delete</S.StyledBtnProduct>
            </Popconfirm>
          ) : null}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row justify="space-between" align="center">
        <h1>User Management</h1>
      </Row>
      <S.FilterWrapper>
        <h5>FILTER</h5>
        <Row gutter={[16, 16]} style={{ marginTop: 4 }}>
          <Col span={12}>
            <Input
              onChange={(e) => handleFilter("searchKey", e.target.value)}
              placeholder="User Name"
            />
          </Col>
        </Row>
      </S.FilterWrapper>
      <Table
        columns={tableColumns}
        dataSource={userList?.data || []}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}

export default UserManagement;
