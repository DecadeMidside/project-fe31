import { Carousel, Row, Col } from "antd";
import * as S from "./styles";

function HomePage() {
  return (
    <div>
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
      <div>
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
                TRENDING{" "}
              </span>
              NOW{" "}
            </S.styledCustomTitle>
          </Col>
          <S.styledContentWrapper></S.styledContentWrapper>
        </Row>
      </div>
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
      <div>
        <S.styledCustomSlider>
          <Col span={24}>
            <S.styledTextTitle>
              YOU DON'T HAVE YOUR <span>BREITLING NFT </span> YET ?
            </S.styledTextTitle>
            <p
              style={{
                color: "white",
              }}
            >
              Secure your ownership and access unique services <br /> Scan the
              QR code on your warranty card to get started
            </p>
            <S.styledCustomButton> DISCOVER</S.styledCustomButton>
          </Col>
        </S.styledCustomSlider>
      </div>
      <div>
        <S.styledCustomRowService>
          <S.styledCustomColWoman span={7}>
            <S.styledCustomWoman> </S.styledCustomWoman>
          </S.styledCustomColWoman>
          <S.styledCustomColWoman span={7}>
            <S.styledCustomWatchesWoman> </S.styledCustomWatchesWoman>
          </S.styledCustomColWoman>
          <S.styledCustomColWoman span={7}>
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
      </div>
      <div>
        <S.styledCustomRowNew>
          <Col
            span={24}
            style={{
              background: "linear",
            }}
          >
            <h2>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                TURN YOUR PREOWNED WATCH INTO YOUR NEXT BREITLING
              </span>
            </h2>
            <S.styledCustomButton>START</S.styledCustomButton>
          </Col>
        </S.styledCustomRowNew>
      </div>
    </div>
  );
}
export default HomePage;
