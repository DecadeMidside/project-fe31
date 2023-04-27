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
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { ROUTES } from "../../constant/routes";
import { PRODUCT_LIMIT } from "../../constant/paging";
import {
  getProductListAction,
  getCategoryListAction,
  getDiametterListAction,
} from "../../redux/actions";

import * as S from "./styles";

function ProductList() {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState({
    diametterId: [],
    categoryId: [],
    searchKey: "",
    sort: "",
  });
  useEffect(() => {
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getDiametterListAction());
    dispatch(getCategoryListAction());
  }, []);

  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const { diametterList } = useSelector((state) => state.diametter);

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
        <S.CustomCol span={3} key={item.id}>
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
              <h6>{item.price} </h6>
              <S.StyledBtnProduct>ADD TO CART</S.StyledBtnProduct>
              <S.HeartIconWrapper>
                <AiOutlineHeart />
              </S.HeartIconWrapper>
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
            <h1>FILTER</h1>
            <Card>
              <h3>DIAMETTER</h3>
              <Checkbox.Group
                onChange={(values) => handleFilter("diametterId", values)}
              >
                <Row>{renderDiametterFilter}</Row>
              </Checkbox.Group>
            </Card>
          </Col>
          <Col span={18}>
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <S.CustomInput
                  onChange={(e) => handleFilter("searchKey", e.target.value)}
                  placeholder="What is Looking for..."
                ></S.CustomInput>
              </Col>
              <Col span={8}>
                <Select
                  onChange={(value) => handleFilter("sort", value)}
                  style={{ width: "100%" }}
                >
                  <Select.Option value="price.asc">Giá tăng dần</Select.Option>
                  <Select.Option value="price.desc">Giá giảm dần</Select.Option>
                  <Select.Option value="name.asc">A-Z</Select.Option>
                  <Select.Option value="name.desc">Z-A</Select.Option>
                </Select>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>{renderProductList}</Row>
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
