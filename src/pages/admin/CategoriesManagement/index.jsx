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
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import {
  getCategoryListAction,
  deleteCategoryAction,
} from "../../../redux/actions";
import * as S from "./styles";

function CategoriesManagement() {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  const { category } = useSelector((state) => state.category);
  console.log(
    "🚀 ~ file: index.jsx:19 ~ CategoriesManagement ~ categoryList:",
    categoryList
  );

  useEffect(() => {
    dispatch(getCategoryListAction({}));
  }, []);

  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => (
        <Space>
          <Avatar size={"large"} src={item?.image} />
          <h4>{item?.name}</h4>
        </Space>
      ),
    },
    {
      title: "Quantity Product",
      dataIndex: "products",
      key: "products",
      render: (products) => `${products.length} products`,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Space>
          <S.StyledIcon>
            <GrUpdate style={{ color: "green" }} />
          </S.StyledIcon>

          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() =>
              dispatch(
                deleteCategoryAction({
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
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row justify="space-between" align="center">
        <h1>Categories Management</h1>
      </Row>

      <Table
        columns={tableColumns}
        dataSource={categoryList?.data}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}

export default CategoriesManagement;
