import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  // const tableColumn = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (_, item) => {
  //       return (
  //         <Space>
  //           <Avatar size={"large"} src={item?.image} />
  //           <h4>{item?.name}</h4>
  //         </Space>
  //       );
  //     },
  //   },
  //   {
  //     title: "Category",
  //     dataIndex: "category",
  //     key: "category",
  //     // render: (category) => category?.name,
  //   },
  //   {
  //     title: "Price",
  //     dataIndex: "price",
  //     key: "price",
  //     // render: (price) => `${price.toLocaleString()} VND`,
  //   },
  //   {
  //     title: "Action",
  //     dataIndex: "action",
  //     key: "action",
  //     render: (_, item) => {
  //       return (
  //         <Space>
  //           <S.StyledBtnProduct
  //             type="primary"
  //             outline={true}

  //             // onClick={() =>
  //             //   navigate(
  //             //     generatePath(ROUTES.ADMIN.UPDATE_PRODUCT, { id: item.id })
  //             //   )
  //             // }
  //           >
  //             Update
  //           </S.StyledBtnProduct>
  //           <S.StyledBtnProduct outline={false}>Delete</S.StyledBtnProduct>
  //         </Space>
  //       );
  //     },
  //   },
  // ];

  return (
    <div>
      {renderUser}
      {/* <Row justify="space-between" align="center">
        <h1>Product Management</h1>
        <S.StyledBtnProduct
          outline={true}
          type="primary"
          // onClick={() => navigate(ROUTES.ADMIN.CREATE_PRODUCT)}
        >
          Create Product
        </S.StyledBtnProduct>
      </Row>
      <S.FilterWrapper>
        <h5>FILTER</h5>
        <Row gutter={[16, 16]} style={{ marginTop: 4 }}>
          <Col span={12}>
            <Input placeholder="Product Name" />
          </Col>
          <Col span={12}>
            <Select
              mode="multiple"
              allowClear
              placeholder="Product Category"
              style={{ width: "100%" }}
            ></Select>
          </Col>
        </Row>
      </S.FilterWrapper>
      {/* <Table
        columns={tableColumn}
        // dataSource={productList.data}
        rowKey="id"
        pagination={false}
        // loading={productList.load}
      /> */}
      {/* <Row justify="center">
        <Pagination
          // current={productList.meta.page}
          pageSize={ADMIN_TABLE_LIMIT}
          // total={productList.meta.total}
          // onChange={(page) => handleChangePage(page)}
          style={{ margin: "16px auto 0" }}
        />
      </Row>{" "} */}
    </div>
  );
}

export default UserManagement;
