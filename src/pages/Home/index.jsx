import * as S from "./styles";

import { Carousel, Row, Col } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams, generatePath, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";
import { ROUTES } from "../../constant/routes";
import {
  getProductDetailAction,
  getProductListAction,
  getReviewListAction,
  sendReviewAction,
  addToCartAction,
} from "../../redux/actions";
import { PRODUCT_LIMIT, PRODUCT_LIMIT_HOME } from "../../constant/paging";
function HomePage() {
  const { productList } = useSelector((state) => state.product);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT_HOME,
      })
    );
  }, [id]);
  const navigate = useNavigate();

  const handleSelectCategory = () => {
    navigate(ROUTES.USER.PRODUCT_LIST, {
      state: {
        categoryId: 1,
      },
    });
  };
  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} span={6}>
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
    <S.styledContainer>
      <Carousel swipeToSlide draggable>
        <S.styledCarousel>
          <Row>
            <S.styledCustomColContainer span={10}>
              <S.styledBoxContent>
                <S.styledTextTitle>
                  <span
                    style={{
                      color: "yellow",
                    }}
                  >
                    TOP TIME
                  </span>{" "}
                  CLASSIC CARS
                </S.styledTextTitle>
                <S.styledCustomButton onClick={() => handleSelectCategory()}>
                  DISCOVER
                </S.styledCustomButton>
              </S.styledBoxContent>
            </S.styledCustomColContainer>

            <Col span={14}></Col>
          </Row>
        </S.styledCarousel>
        <S.styledCarousel2>
          <Row>
            <S.styledCustomColContainer span={10}>
              <S.styledBoxContent>
                <S.styledTextTitle>
                  <span
                    style={{
                      color: "yellow",
                    }}
                  >
                    PREMIER
                  </span>{" "}
                  COLLECTION
                </S.styledTextTitle>
                <S.styledCustomButton>DISCOVER</S.styledCustomButton>
              </S.styledBoxContent>
            </S.styledCustomColContainer>

            <Col span={14}></Col>
          </Row>
        </S.styledCarousel2>
        <S.styledCarousel3>
          <Row>
            <S.styledCustomColContainer span={10}>
              <S.styledBoxContent>
                <S.styledTextTitle>
                  <span
                    style={{
                      color: "yellow",
                    }}
                  >
                    ENDURANCE
                  </span>{" "}
                  PRO
                </S.styledTextTitle>

                <S.styledCustomButton>BUY NOW</S.styledCustomButton>
              </S.styledBoxContent>
            </S.styledCustomColContainer>

            <Col span={14}></Col>
          </Row>
        </S.styledCarousel3>
      </Carousel>
      <S.styledWrapper>
        <Row justify="center">
          <Col span={24}>
            <S.styledCustomTitle>
              <span
                style={{
                  color: "#ffc62d",
                }}
              >
                {" "}
                TRENDING{" "}
              </span>
              NOW{" "}
            </S.styledCustomTitle>
            <S.styleRowFeature
              gutter={[16, 16]}
              style={{
                maxWidth: "1216px",
                margin: "0 auto",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              {renderProductList}
            </S.styleRowFeature>
          </Col>
        </Row>
      </S.styledWrapper>
      <S.styledWrapper>
        <Row>
          <Col span={24}>
            <S.styledCustomTitle>
              {" "}
              <span
                style={{
                  color: "#ffc62d",
                }}
              >
                {" "}
                EXCLUSIVE
              </span>{" "}
              BREITLING E-BOUTIQUE SERVICES
            </S.styledCustomTitle>
          </Col>
          <S.styledCustomRowService
            style={{
              maxWidth: "1216px",
              margin: "0 auto",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <S.styledColService span={8}>
              <S.styledServiceBoxes>
                <S.styledImgService src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-300ff783f3/icon-free-shipping-return.svg" />
                <S.styledContentService>
                  FREE SHIPPINGS & RETURNS
                </S.styledContentService>
              </S.styledServiceBoxes>
            </S.styledColService>
            <S.styledColService span={8}>
              <S.styledServiceBoxes>
                <S.styledImgService src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-402c0f9a53/icon-gifting-service.svg" />
                <S.styledContentService>GIVE A GIFT</S.styledContentService>
              </S.styledServiceBoxes>
            </S.styledColService>
            <S.styledColService span={8}>
              <S.styledServiceBoxes>
                <S.styledImgService src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-0721303587/icon-exclusive-benefit.svg" />
                <S.styledContentService>
                  EXCLUSIVE BENEFITS
                </S.styledContentService>
              </S.styledServiceBoxes>
            </S.styledColService>
          </S.styledCustomRowService>
        </Row>
      </S.styledWrapper>
      <div>
        <S.styledCustomSlider
          style={{
            maxWidth: "1216px",
            margin: "0 auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col span={24}>
            <S.styledTextTitle>
              YOU DON'T HAVE YOUR <span>BREITLING NFT </span> YET ?
            </S.styledTextTitle>
            <p
              style={{
                color: "white",
                fontSize: "18px",
              }}
            >
              Secure your ownership and access unique services <br /> Scan the
              QR code on your warranty card to get started
            </p>
            <S.styledCustomButton> DISCOVER</S.styledCustomButton>
          </Col>
        </S.styledCustomSlider>
      </div>
      <S.styledWrapper>
        <S.styledCustomRowService
          gutter={[16, 16]}
          style={{
            maxWidth: "1216px",
            margin: "0 auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <S.styledCustomColWoman span={8}>
            <S.styledCustomWoman> </S.styledCustomWoman>
          </S.styledCustomColWoman>
          <S.styledCustomColWoman span={8}>
            <S.styledCustomWatchesWoman> </S.styledCustomWatchesWoman>
          </S.styledCustomColWoman>
          <S.styledCustomColWoman span={8}>
            <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: 3 })}>
              <S.styledTextWoman>
                <h2
                  style={{
                    color: "black",
                    fontSize: "30px",
                    marginBottom: "8px",
                  }}
                >
                  <span>CHRONOMAT </span> AUTOMATIC 36
                </h2>
                <p
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  See all the variations of the elegantly versatile Chronomat
                  for women.
                </p>
                <S.styledCustomButton>DISCOVER</S.styledCustomButton>
              </S.styledTextWoman>
            </Link>
          </S.styledCustomColWoman>
        </S.styledCustomRowService>
      </S.styledWrapper>
      <div>
        <S.styledCustomRowNew
          style={{
            maxWidth: "1216px",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col span={24}>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              TURN YOUR PREOWNED WATCH INTO YOUR NEXT BREITLING
            </h2>
            <S.styledCustomButton>START</S.styledCustomButton>
          </Col>
        </S.styledCustomRowNew>
      </div>
      <S.styledWrapper>
        <S.styleRowFeature
          gutter={[16, 16]}
          style={{
            maxWidth: "1216px",
            margin: "0 auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Col span={12}>
            <S.styledColServiceWrapper>
              <S.styledTitleStrapsService>STRAPS</S.styledTitleStrapsService>
              <S.styledContentStrapsService>
                Made from leather, rubber , or ECONYL™ fabric, the Breitling
                straps will nicely complement your Breitling watch and give it a
                fresh new look.
              </S.styledContentStrapsService>
              <S.styledCustomButton>BUY NOW</S.styledCustomButton>
            </S.styledColServiceWrapper>
          </Col>
          <Col span={12}>
            <S.styledColServiceWrapper>
              <S.styledTitleStrapsService>SERVICE</S.styledTitleStrapsService>
              <S.styledContentStrapsService>
                Explore our comprenhensive set of services and assistance
                designed for you and your Breitling.
              </S.styledContentStrapsService>
              <S.styledCustomButton>DISCOVER NOW</S.styledCustomButton>
            </S.styledColServiceWrapper>
          </Col>
        </S.styleRowFeature>
      </S.styledWrapper>
      <S.styledWrapper>
        <Row
          style={{
            maxWidth: "1216px",
            margin: "0 auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          gutter={[16, 16]}
        >
          <Col span={8}>
            <S.styledCustomColStore>
              <div>
                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "#111820",
                      fontWeight: "700",
                    }}
                  >
                    BREITLING BOUTIQUE ATLANTA{" "}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    393 Peachtree Road NE, Space 3042B, ATLANTA, GA 30326
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Phone +84983823317{" "}
                  </p>
                </div>
                <div
                  className="opening-hours"
                  style={{
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    Opening hours{" "}
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Tuesday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Wednesday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Thursday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Friday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Saturday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Sunday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            12:00 - 18-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Monday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <Row>
                    <Col span={24}>
                      <a> Email </a>
                      <a> Get directions</a>
                    </Col>
                  </Row>

                  <S.StyleButtonBook>BOOK AN APPOINTMENT</S.StyleButtonBook>
                </div>
              </div>
            </S.styledCustomColStore>
          </Col>
          <Col span={8}>
            <S.styledCustomColStore>
              <div>
                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "#111820",
                      fontWeight: "700",
                    }}
                  >
                    BREITLING BOUTIQUE SEATLE{" "}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    216 N RODEO DR., BEVERLY HILLS, CA 90210 Phone +1, USA
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Phone +84983823317{" "}
                  </p>
                </div>
                <div
                  className="opening-hours"
                  style={{
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    Opening hours{" "}
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Tuesday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Wednesday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Thursday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Friday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Saturday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Sunday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            12:00 - 18-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Monday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <Row>
                    <Col span={24}>
                      <a> Email </a>
                      <a> Get directions</a>
                    </Col>
                  </Row>

                  <S.StyleButtonBook>BOOK AN APPOINTMENT</S.StyleButtonBook>
                </div>
              </div>
            </S.styledCustomColStore>
          </Col>
          <Col span={8}>
            <S.styledCustomColStore>
              <div>
                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "#111820",
                      fontWeight: "700",
                    }}
                  >
                    BREITLING BOUTIQUE TEXAS{" "}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    393 Peachtree Road NE, Space 3042B, ATLANTA, GA 30326
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Phone +84983823317{" "}
                  </p>
                </div>
                <div
                  className="opening-hours"
                  style={{
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    Opening hours{" "}
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Tuesday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Wednesday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Thursday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {" "}
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Friday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Saturday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Sunday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            12:00 - 18-00
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              padding: "1px 30px 1px 1px",
                              textAlign: "left",
                            }}
                          >
                            Monday :{" "}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            11:00 - 19-00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <Row>
                    <Col span={24}>
                      <a> Email </a>
                      <a> Get directions</a>
                    </Col>
                  </Row>

                  <S.StyleButtonBook>BOOK AN APPOINTMENT</S.StyleButtonBook>
                </div>
              </div>
            </S.styledCustomColStore>
          </Col>
        </Row>
      </S.styledWrapper>
    </S.styledContainer>
  );
}
export default HomePage;
