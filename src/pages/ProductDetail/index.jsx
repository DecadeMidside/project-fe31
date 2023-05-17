import * as S from "./styles";
import moment from "moment";

import {
  Spin,
  Row,
  Col,
  Card,
  InputNumber,
  Input,
  Button,
  Form,
  Rate,
  Space,
  Image,
  notification,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineHeart } from "react-icons/ai";
import { ROUTES } from "../../constant/routes";
import { PRODUCT_LIMIT } from "../../constant/paging";
import {
  getProductDetailAction,
  getProductListAction,
  getReviewListAction,
  sendReviewAction,
  addToCartAction,
} from "../../redux/actions";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

function ProductDetail() {
  const { id } = useParams();
  const [reviewForm] = Form.useForm();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { productList, productDetail } = useSelector((state) => state.product);
  console.log(
    "🚀 ~ file: index.jsx:42 ~ ProductDetail ~ productDetail:",
    productDetail
  );
  const { reviewList } = useSelector((state) => state.review);
  const { cartList } = useSelector((state) => state.cart);

  const totalRate = useMemo(
    () =>
      reviewList.data.length
        ? reviewList.data
            .map((item) => item.rate)
            .reduce((total, item) => total + item)
        : 0,
    [reviewList.data]
  );

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    dispatch(getReviewListAction({ productId: id }));
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
  }, [id]);

  const handleAddToBag = () => {
    dispatch(
      addToCartAction({
        id: parseInt(id),
        name: productDetail.data.name,
        image: productDetail.data.image,
        price: parseInt(productDetail.data.price),
      })
    );
  };
  const handleReview = (values) => {
    dispatch(
      sendReviewAction({
        data: {
          ...values,
          userId: userInfo.data.id,
          productId: parseInt(id),
        },
        callback: () => reviewForm.resetFields(),
      })
    );
  };

  const renderReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
      return (
        <Card size="small" key={item.id}>
          <Space>
            <h3>{item.user.fullName}</h3>
            <span>{moment(item.createdAt).fromNow()}</span>
          </Space>
          <Rate value={item.rate} disabled style={{ fontSize: 12 }} />
          <p>{item.comment}</p>
        </Card>
      );
    });
  }, [reviewList.data]);
  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} span={6}>
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
    <div>
      <S.WrapperDetail>
        <Col span={12}>
          <img src={productDetail.data.image}></img>
        </Col>
        <S.CustomColDetail span={12}>
          <h5>{productDetail.data.codeNumber}</h5>
          <h1>{productDetail.data.name}</h1>
          <Space>
            <Rate value={totalRate / reviewList.data.length} disabled />
            <span>{`(${(totalRate / reviewList.data.length).toFixed(
              1
            )})`}</span>
          </Space>
          <h3>USD {productDetail.data.price}</h3>
          <h5>Boutique delivery available</h5>
          <S.styleButton outline={true} onClick={(id) => handleAddToBag(id)}>
            ADD TO BAG
          </S.styleButton>
          <S.styleTextOr>
            <span>or</span>
          </S.styleTextOr>
          <S.styleButton outline={false}> GIVE AS A GIFT</S.styleButton>
          <S.styleCall>
            <FaPhoneAlt /> <span>CALL TO BUY </span>
          </S.styleCall>
          <S.styleCall>
            <FaCalendarAlt /> <span>BOOK AN APPOINTMENT</span>
          </S.styleCall>

          <S.styleRowService gutter={[16, 16]}>
            <S.styleColService span={8}>
              <div>
                <img src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-890399ea8e/icon-free-shipping.svg"></img>
              </div>
              <span>FREE SHIPPING</span>
            </S.styleColService>
            <S.styleColService span={8}>
              <div>
                <img src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-14fb6ee1d5/icon-free-return.svg"></img>
              </div>
              <span>FREE RETURN</span>
            </S.styleColService>
            <S.styleColService span={8}>
              <div>
                <img src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-0721303587/icon-exclusive-benefit.svg"></img>
              </div>
              <span>EXCLUSIVE BENEFITS</span>
            </S.styleColService>
          </S.styleRowService>
        </S.CustomColDetail>
      </S.WrapperDetail>

      <S.styleTechnical>
        <h1>TECHNICAL DATA</h1>
        <S.styleRowFeature>
          <S.styleTechnicalContent span={6}>
            <h3>MOVEMENT</h3>
            <ul>
              <li>
                <h4>Caliber</h4>
                <p>Breitling 01 (Manufacture)</p>
              </li>
              <li>
                <h4>Power reserve</h4>
                <p>Approx. 70 hrs</p>
              </li>
              <li>
                <h4>Vibration</h4>
                <p>28,800 v.p.h</p>
              </li>
              <li>
                <h4>Calendar</h4>
                <p>Dial aperture</p>
              </li>
            </ul>
          </S.styleTechnicalContent>
          <S.styleTechnicalContent span={6}>
            <h3>DIMENSIONS</h3>
            <ul>
              <li>
                <h4>Product Weight (Approx.)</h4>
                <p>Breitling 01 (Manufacture)</p>
              </li>
              <li>
                <h4>Watch-head Weight (Approx.)</h4>
                <p>Approx. 70 hrs</p>
              </li>
              <li>
                <h4>Diameter</h4>
                <p>{productDetail.data.diametter?.size}</p>
              </li>
              <li>
                <h4>Thickness</h4>
                <p>Dial aperture</p>
              </li>
            </ul>
          </S.styleTechnicalContent>{" "}
          <S.styleTechnicalContent span={6}>
            <h3>STRAP</h3>
            <ul>
              <li>
                <h4>Strap material</h4>
                <p>Breitling 01 (Manufacture)</p>
              </li>
              <li>
                <h4>Strap color</h4>
                <p>Approx. 70 hrs</p>
              </li>
              <li>
                <h4>Strap type</h4>
                <p>28,800 v.p.h</p>
              </li>
              <li>
                <h4>Lug</h4>
                <p>Dial aperture</p>
              </li>
            </ul>
          </S.styleTechnicalContent>{" "}
          <S.styleTechnicalContent span={6}>
            <h3>CASE</h3>
            <ul>
              <li>
                <h4>Case material</h4>
                <p>Stainless steel</p>
              </li>
              <li>
                <h4> Caseback</h4>
                <p>Approx. 70 hrs</p>
              </li>
              <li>
                <h4>Bezel</h4>
                <p>28,800 v.p.h</p>
              </li>
              <li>
                <h4>Crystal</h4>
                <p>Dial aperture</p>
              </li>
            </ul>
          </S.styleTechnicalContent>
        </S.styleRowFeature>
      </S.styleTechnical>

      <S.styleTechnical gutter={[16, 16]}>
        <h1>YOU MAY ALSO LIKE</h1>
        <S.styleRowFeature gutter={[16, 16]}>
          {" "}
          {renderProductList}
        </S.styleRowFeature>
      </S.styleTechnical>
      <S.styleTechnical>
        {userInfo.data.id && (
          <Card size="small">
            <h1>REVIEW {productDetail.data.name}</h1>
            <Form
              form={reviewForm}
              name="reviewForm"
              layout="vertical"
              onFinish={(values) => handleReview(values)}
              autoComplete="off"
            >
              <Form.Item
                label="Rate"
                name="rate"
                rules={[
                  {
                    required: true,
                    message: "Please input your rate!",
                  },
                ]}
              >
                <Rate />
              </Form.Item>
              <Form.Item
                label="Comment"
                name="comment"
                rules={[
                  {
                    required: true,
                    message: "Please input your comment!",
                  },
                ]}
              >
                <Input.TextArea
                  autoSize={{
                    minRows: 2,
                    maxRows: 4,
                  }}
                />
              </Form.Item>

              <Form.Item>
                <S.styleButton
                  style={{ width: "100%" }}
                  htmlType="submit"
                  block
                >
                  REVIEW
                </S.styleButton>
              </Form.Item>
            </Form>
          </Card>
        )}
        {renderReviewList}
      </S.styleTechnical>
      <S.styleTechnical
        dangerouslySetInnerHTML={{ __html: productDetail.data.content }}
      ></S.styleTechnical>
      <S.styleTechnical>
        <h1>WARRANTY</h1>
        <Row style={{ display: "flex" }} gutter={[16, 16]}>
          <Col span={8}>
            <Row style={{ display: "flex" }}>
              <S.styleText span={16}>
                Whether it's a chronograph or Breitling watch, we've got you
                covered on all your needs. Find all the details under our terms
                and conditions – Breitling International Warranty and Warranty
                Period. Warranty Duration (Years): 5 Visit Breitling's Terms &
                Conditions for warranty details.
              </S.styleText>
              <S.styleText span={8}>
                <img
                  src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-0d4e6a3baf/warranty-5.svg"
                  alt="chứng nhận"
                />
              </S.styleText>
            </Row>
            <S.styleWarrantyInfo>
              <div>
                {" "}
                <h4>+3 YEARS</h4>
                <h5>MECHANICAL MANUFACTURE BREITLING MOVEMENTS </h5>
                <S.styleText>
                  Extend the warranty on your Breitling watch by an additional 3
                  years for Breitling mechanical manufacture movements or 2
                  years for other Breitling movements. Give your watch the best
                  care possible.
                </S.styleText>
                <h4>EXTEND MY WARRANTY</h4>
              </div>
            </S.styleWarrantyInfo>
          </Col>
          <Col span={16}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Image src="https://www.breitling.com/assets/images/br-11-20/be-3365-temp/asset-version-e304bf56ec/warranty-care.jpg"></Image>
              </Col>
              <Col span={16}>
                <div>
                  <h3>CARING FOR YOUR BREITLING WATCH</h3>
                  <S.styleText>
                    A Breitling watch lasts a lifetime. It adapts to any
                    lifestyle. It also needs a bit of care from time to time.
                    Ensure your Breitling performs at its peak performance by
                    treating it to our #BreitlingCare services. Explore our
                    comprehensive set of services and assistance designed for
                    you and your Breitling.
                  </S.styleText>
                  <h4>EXPLORE #BREITLINGSERVICE</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </S.styleTechnical>
    </div>
  );
}
export default ProductDetail;
