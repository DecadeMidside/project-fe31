import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, generatePath } from "react-router-dom";
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
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { getUserListAction, deleteUserAction } from "../../../redux/actions";
import { ROUTES } from "../../../constant/routes";
import * as S from "./styles";

function UserManagement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <S.StyledIcon
            type="primary"
            outline={true}
            onClick={() =>
              navigate(generatePath(ROUTES.ADMIN.UPDATE_USER, { id: item.id }))
            }
          >
            <GrUpdate style={{ color: "green" }} />
          </S.StyledIcon>

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
              okText={
                <AiOutlineDelete style={{ fontSize: "18", color: "red" }} />
              }
              cancelText={
                <ImCancelCircle style={{ fontSize: "18", color: "green" }} />
              }
            >
              <S.StyledIconDel>
                <AiOutlineDelete style={{ color: "red" }} />
              </S.StyledIconDel>
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
        loading={userList.load}
      />
    </div>
  );
}

export default UserManagement;
