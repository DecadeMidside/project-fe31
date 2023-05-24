import { useState, useEffect, useMemo } from "react";
import { Link, generatePath, useLocation } from "react-router-dom";
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
<<<<<<< HEAD
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
=======
import { AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";
>>>>>>> 57ce314f25204e150eac444051081b45de76e162
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
  const { state } = useLocation();
  const { Meta } = Card;
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState({
    categoryId: state?.categoryId ? [state?.categoryId] : [],
    genderId: [],
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

<<<<<<< HEAD
=======
  const { productList, productDetail } = useSelector((state) => state.product);
  console.log(
    "🚀 ~ file: index.jsx:51 ~ ProductList ~ productDetail:",
    productDetail
  );
  console.log(
    "🚀 ~ file: index.jsx:51 ~ ProductList ~ productList:",
    productList
  );
  const { categoryList } = useSelector((state) => state.category);
  const { diametterList } = useSelector((state) => state.diametter);
  const { genderList } = useSelector((state) => state.gender);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleFilterButtonClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };
>>>>>>> 57ce314f25204e150eac444051081b45de76e162
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
        <S.CustomCol lg={3} key={item.id} onClick={() => console.log(item.id)}>
          <S.StyledCollection cover={<img alt="example" src={item.image} />}>
            <Meta title={item.name} />
          </S.StyledCollection>
        </S.CustomCol>
      );
    });
  }, [categoryList.data]);
  const renderCategoryFilterCheckbox = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Col md={0} lg={24} xs={0} key={item.id}>
          <Checkbox
            value={item.id}
          >{`${item.name} (${item.products.length})`}</Checkbox>
        </Col>
      );
    });
  }, [categoryList.data]);

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} lg={8} md={12} xs={24}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <S.StyledProductItem
              hoverable
              cover={<img src={item.images[0].url} />}
            >
              <h3>{item.name}</h3>
              <h4>
                USD {parseInt(item.price).toLocaleString()}{" "}
                <AiFillInfoCircle style={{ color: "#ffc62d" }} />{" "}
              </h4>
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
              <h3>CATEGORY</h3>
              <Checkbox.Group
                value={filterParams.categoryId}
                onChange={(values) => handleFilter("categoryId", values)}
              >
                <Row>{renderCategoryFilterCheckbox}</Row>
              </Checkbox.Group>
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
          <Col lg={18} md={18} xs={24}>
            <Row gutter={[16, 16]}>
              <Col lg={16} md={12} xs={24}>
                <Input.Search
                  style={{ borderRadius: 0, margin: "8px" }}
                  onChange={(e) => handleFilter("searchKey", e.target.value)}
                  placeholder="What is Looking for..."
                ></Input.Search>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Select
                  style={{ width: "100%", margin: "8px" }}
                  onChange={(value) => handleFilter("sort", value)}
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
