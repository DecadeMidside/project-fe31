import { useState, useEffect, useMemo } from "react";
import { Link, generatePath } from "react-router-dom";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Select,
  Checkbox,
  Space,
  Image,
  Spin,
  notification,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ROUTES } from "../../constant/routes";
import { PRODUCT_LIMIT } from "../../constant/paging";
import {
  getProductListAction,
  getCategoryListAction,
  getDiametterListAction,
  getGenderListAction,
} from "../../redux/actions";

import * as S from "./styles";
import { hover } from "@testing-library/user-event/dist/hover";
import ProductDetail from "pages/ProductDetail";

function ProductList() {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState({
    diametterId: [],
    genderId: [],
    categoryId: [],
    searchKey: "",
    sort: "",
  });
  const { userInfo } = useSelector((state) => state.auth);
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const { diametterList } = useSelector((state) => state.diametter);
  const { genderList } = useSelector((state) => state.gender);

  useEffect(() => {
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getDiametterListAction());
    dispatch(getGenderListAction());
    dispatch(getCategoryListAction());
  }, []);

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        ...filterParams,
        page: productList.meta.page + 1,
        limit: PRODUCT_LIMIT,
        // diametterId: filterParams.diametterId,
        more: true,
      })
    );
  };
  const renderDiametterFilter = useMemo(() => {
    return diametterList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.size}</Checkbox>
        </Col>
      );
    });
  }, [diametterList.data]);

  const renderGenderFilter = useMemo(() => {
    return genderList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.gender}</Checkbox>
        </Col>
      );
    });
  }, [genderList.data]);

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
        limit: PRODUCT_LIMIT,
      })
    );
  };
  const renderCategoryFilter = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <S.CustomCol
          span={3}
          key={item.id}
          onClick={() => console.log(item.id)}
        >
          <S.StyledCollection cover={<img alt="example" src={item.image} />}>
            <Meta title={item.name} />
          </S.StyledCollection>
        </S.CustomCol>
      );
    });
  }, [categoryList.data]);
  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} span={8}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <S.StyledProductItem
              hoverable
              cover={<img alt="example" src={item.image} />}
            >
              <h3>{item.name}</h3>
              <h6>USD {parseInt(item.price).toLocaleString()} </h6>
              <S.StyledBtnProduct>ADD TO CART</S.StyledBtnProduct>
            </S.StyledProductItem>{" "}
          </Link>
        </Col>
      );
    });
  }, [productList.data]);
  return (
    <>
      <S.StyleSlider>
        <S.StyleTitle>ALL WATCHES</S.StyleTitle>
      </S.StyleSlider>
      <S.WrapperCollection gutter={[16, 16]}>
        {renderCategoryFilter}
      </S.WrapperCollection>

      <S.ProductListWrapper>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <S.StyledFilter>
              <h1>FILTER</h1>
              <h3>DIAMETTER</h3>
              <Checkbox.Group
                onChange={(values) => handleFilter("diametterId", values)}
              >
                <Row>{renderDiametterFilter}</Row>
              </Checkbox.Group>
              <h3>GENDER</h3>
              <Checkbox.Group
                onChange={(values) => handleFilter("genderId", values)}
              >
                <Row>{renderGenderFilter}</Row>
              </Checkbox.Group>
            </S.StyledFilter>
          </Col>
          <Col span={18}>
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <Input.Search
                  onChange={(e) => handleFilter("searchKey", e.target.value)}
                  placeholder="What is Looking for..."
                ></Input.Search>
              </Col>
              <Col span={8}>
                <Select
                  onChange={(value) => handleFilter("sort", value)}
                  style={{ width: "100%" }}
                >
                  <Select.Option value="price.asc">
                    Price low-high
                  </Select.Option>
                  <Select.Option value="price.desc">
                    Price high-low
                  </Select.Option>
                  <Select.Option value="name.asc">A-Z</Select.Option>
                  <Select.Option value="name.desc">Z-A</Select.Option>
                </Select>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ margin: "8px 0px" }}>
              <Spin spinning={productList.load}>
                <Row gutter={[16, 16]}>{renderProductList}</Row>
              </Spin>
            </Row>
            {productList.data.length !== productList.meta.total && (
              <Row justify="center" style={{ marginTop: 16 }}>
                <Button onClick={() => handleShowMore()}>Show more</Button>
              </Row>
            )}
          </Col>
        </Row>
      </S.ProductListWrapper>
    </>
  );
}
export default ProductList;
