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
          <S.StyledBtnProduct type="primary" outline={true}>
            Update
          </S.StyledBtnProduct>

          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() =>
              dispatch(
                deleteCategoryAction({
                  id: item.id,
                })
              )
            }
            okText="Delete"
            cancelText="Cancel"
          >
            <S.StyledBtnProduct outline={false}>Delete</S.StyledBtnProduct>
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
