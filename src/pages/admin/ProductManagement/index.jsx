import { useState, useEffect, useMemo } from "react";
import { useNavigate, generatePath } from "react-router-dom";
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
  Popconfirm,
} from "antd";

import { ROUTES } from "../../../constant/routes";
import { ADMIN_TABLE_LIMIT } from "../../../constant/paging";
import {
  getProductListAction,
  getCategoryListAction,
  deleteProductAction,
} from "../../../redux/actions";
import * as S from "./styles";

function ProductManagement() {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    searchKey: "",
    sort: "id.desc",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productList } = useSelector((state) => state.product);
  console.log(
    "🚀 ~ file: index.jsx:34 ~ ProductManagement ~ productList:",
    productList
  );
  const { categoryList } = useSelector((state) => state.category);
  console.log(
    "🚀 ~ file: index.jsx:39 ~ ProductManagement ~ categoryList:",
    categoryList
  );

  const tableColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => {
        return (
          <Space>
            <Avatar size={"large"} src={item?.images[0].url} />
            <h4>{item?.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category?.name,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} USD`,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => {
        return (
          <Space>
            <S.StyledBtnProduct
              type="primary"
              outline={true}
              onClick={() =>
                navigate(
                  generatePath(ROUTES.ADMIN.UPDATE_PRODUCT, { id: item.id })
                )
              }
            >
              Update
            </S.StyledBtnProduct>{" "}
            <Popconfirm
              title="Are you sure you want to delete this product?"
              onConfirm={() =>
                dispatch(
                  deleteProductAction({
                    ...filterParams,
                    id: item.id,
                    page: 1,
                    limit: ADMIN_TABLE_LIMIT,
                  })
                )
              }
              okText="Delete"
              cancelText="Cancel"
            >
              <S.StyledBtnProduct outline={false}>Delete</S.StyledBtnProduct>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(
      getProductListAction({
        ...filterParams,
        page: 1,
        limit: ADMIN_TABLE_LIMIT,
      })
    );
    dispatch(getCategoryListAction());
  }, []);

  const handleFilter = (key, values) => {
    setFilterParams({
      ...filterParams,
      [key]: values,
    });
    dispatch(
      getProductListAction({
        ...filterParams,
        [key]: values,
        page: 1,
        limit: ADMIN_TABLE_LIMIT,
      })
    );
  };

  const handleChangePage = (page) => {
    dispatch(
      getProductListAction({
        ...filterParams,
        page: page,
        limit: ADMIN_TABLE_LIMIT,
      })
    );
  };

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);

  return (
    <div>
      <Row justify="space-between" align="center">
        <h1>Product Management</h1>
        <S.StyledBtnProduct
          outline={true}
          type="primary"
          onClick={() => navigate(ROUTES.ADMIN.CREATE_PRODUCT)}
        >
          Create Product
        </S.StyledBtnProduct>
      </Row>
      <S.FilterWrapper>
        <h5>FILTER</h5>
        <Row gutter={[16, 16]} style={{ marginTop: 4 }}>
          <Col span={8}>
            <Input
              onChange={(e) => handleFilter("searchKey", e.target.value)}
              placeholder="Product Name"
            />
          </Col>
          <Col span={8}>
            <Select
              mode="multiple"
              allowClear
              onChange={(values) => handleFilter("categoryId", values)}
              placeholder="Product Category"
              style={{ width: "100%" }}
            >
              {renderCategoryOptions}
            </Select>
          </Col>
          <Col span={8}>
            <Select
              style={{ width: "100%" }}
              onChange={(value) => handleFilter("sort", value)}
              placeholder="Sort by"
            >
              <Select.Option value="price.asc">Price low-high</Select.Option>
              <Select.Option value="price.desc">Price high-low</Select.Option>
              <Select.Option value="name.asc">A-Z</Select.Option>
              <Select.Option value="name.desc">Z-A</Select.Option>
            </Select>
          </Col>
        </Row>
      </S.FilterWrapper>
      <Table
        columns={tableColumn}
        dataSource={productList.data}
        rowKey="id"
        pagination={false}
        loading={productList.load}
      />
      <Row justify="center">
        <Pagination
          current={productList.meta.page}
          pageSize={ADMIN_TABLE_LIMIT}
          total={productList.meta.total}
          onChange={(page) => handleChangePage(page)}
          style={{ margin: "16px auto 0" }}
        />
      </Row>
    </div>
  );
}

export default ProductManagement;
