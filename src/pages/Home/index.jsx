import { Carousel, Row, Col } from "antd";
import * as S from "./styles";

function HomePage() {
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
                <S.styledCustomButton>DISCOVER</S.styledCustomButton>
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
        <Row>
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
          </Col>
          <S.styledContentWrapper></S.styledContentWrapper>
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
          <S.styledCustomRowService>
            <S.styledColService span={6}>
              <S.styledServiceBoxes>
                <S.styledImgService src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-300ff763f3/icon-free-shipping-return.svg" />
                <S.styledContentService>
                  FREE SHIPPINGS & RETURNS
                </S.styledContentService>
              </S.styledServiceBoxes>
            </S.styledColService>
            <S.styledColService span={6}>
              <S.styledServiceBoxes>
                <S.styledImgService src="https://www.breitling.com/media/breitling/images/br-11-20/asset-version-402c0f9a53/icon-gifting-service.svg" />
                <S.styledContentService>GIVE A GIFT</S.styledContentService>
              </S.styledServiceBoxes>
            </S.styledColService>
            <S.styledColService span={6}>
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
        <S.styledCustomSlider>
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
        <S.styledCustomRowService>
          <S.styledCustomColWoman span={7}>
            <S.styledCustomWoman> </S.styledCustomWoman>
          </S.styledCustomColWoman>
          <S.styledCustomColWoman span={7}>
            <S.styledCustomWatchesWoman> </S.styledCustomWatchesWoman>
          </S.styledCustomColWoman>
          <S.styledCustomColWoman span={8}>
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
                See all the variations of the elegantly versatile Chronomat for
                women.
              </p>
              <S.styledCustomButton>DISCOVER</S.styledCustomButton>
            </S.styledTextWoman>
          </S.styledCustomColWoman>
        </S.styledCustomRowService>
      </S.styledWrapper>
      <div>
        <S.styledCustomRowNew>
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
        <S.styledCustomRowService>
          <S.styledColStrapsWrapper span={11}>
            <div>
              <S.styledTitleStrapsService>STRAPS</S.styledTitleStrapsService>
              <S.styledContentStrapsService>
                Made from leather, rubber , or ECONYL™ fabric, the Breitling
                straps will nicely complement your Breitling watch and give it a
                fresh new look.
              </S.styledContentStrapsService>
              <S.styledCustomButton>BUY NOW</S.styledCustomButton>
            </div>
          </S.styledColStrapsWrapper>
          <S.styledColServiceWrapper span={11}>
            <div>
              <S.styledTitleStrapsService>SERVICE</S.styledTitleStrapsService>
              <S.styledContentStrapsService>
                Explore our comprenhensive set of services and assistance
                designed for you and your Breitling.
              </S.styledContentStrapsService>
              <S.styledCustomButton>DISCOVER NOW</S.styledCustomButton>
            </div>
          </S.styledColServiceWrapper>
        </S.styledCustomRowService>
      </S.styledWrapper>
      <S.styledWrapper>
        <Row
          style={{
            width: "100%",
            flexGrow: "1",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <S.styledCustomColStore span={7}>
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

                <button>BOOK AN APPOINTMENT</button>
              </div>
            </div>
          </S.styledCustomColStore>
          <S.styledCustomColStore span={7}>
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

                <button>BOOK AN APPOINTMENT</button>
              </div>
            </div>
          </S.styledCustomColStore>
          <S.styledCustomColStore span={7}>
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

                <button>BOOK AN APPOINTMENT</button>
              </div>
            </div>
          </S.styledCustomColStore>
        </Row>
      </S.styledWrapper>
    </S.styledContainer>
  );
}
export default HomePage;
