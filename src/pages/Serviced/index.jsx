import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../constant/routes";
import { logoutAction } from "../../redux/actions";
import * as S from "./styles";

function ServicePage() {
  return (
    <>
      <S.styleTitle>SERVICE</S.styleTitle>
      <S.customStyleRow>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/3/mini_square/asset-version-7a7c303d35/service-bubble-need-a-service.jpg"
            alt=""
          />
          <span> NEED A SERVICE</span>
        </S.styleCategory>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-7f850f35f0/74qeo_zv-1.jpg"
            alt=""
          />
          <span> SERVICE PRICES</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-cb06bafdfa/_mg_7148-1-1.jpg"
            alt=""
          />
          <span>WATCH CARE</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/3/mini_square/asset-version-c97c0c9d46/service-bubble-theft.jpg"
            alt=""
          />
          <span> WARRANTY</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>
      </S.customStyleRow>
      <S.Slider></S.Slider>
      <S.Content justify="center" align="center">
        <S.Title>
          <span>MY WATCH NEED A SERVICE</span>
        </S.Title>
        <S.styleButton>DISCOVER</S.styleButton>
      </S.Content>
      <Row justify="center" align="center" gutter={[16, 16]}>
        <S.styleCol span={8}>
          <img
            src="https://www.breitling.com/media/breitling/images/service/2022/landing/asset-version-298240e9eb/icon-watch-our-services.svg"
            alt=""
          />
          <h3>OUR SERVICES</h3>
          <p>
            From complete maintenance to polishing and authentication, protect
            your investment with Breitling services.
          </p>
          <S.styleButton>DISCOVER</S.styleButton>
        </S.styleCol>
        <S.styleCol span={8}>
          <img
            src="https://www.breitling.com/media/breitling/images/service/2022/landing/asset-version-72945fabe0/icon-service-prices.svg"
            alt=""
          />
          <h3>SERVICES PRICES</h3>
          <p>
            Enter your watch’s serial or model number to see the full menu of
            service options and prices.
          </p>
          <S.styleButton>DISCOVER</S.styleButton>
        </S.styleCol>
        <S.styleCol span={8}>
          <img
            src="https://www.breitling.com/media/breitling/images/service/2022/landing/asset-version-3671c568e3/icon-watch-care.svg"
            alt=""
          />
          <h3>WATCH CARE</h3>
          <p>
            Learn how to care for your Breitling watch and protect it for years
            to come with a warranty extension.
          </p>
          <S.styleButton>DISCOVER</S.styleButton>
        </S.styleCol>
      </Row>
      <S.SliderFind>
        <S.Title>
          <span>FIND </span>A BOUTIQUE
        </S.Title>
        <S.styleButton>DISCOVER</S.styleButton>
      </S.SliderFind>
      <Row justify="center" align="center" gutter={[16, 16]}>
        <S.styleCol span={12}>
          <img
            src="https://www.breitling.com/media/breitling/images/service/2022/landing/asset-version-f7effb1050/icon-warranty-5.svg"
            alt=""
          />
          <h1>
            <span>INTERNATIONAL</span> WARRANTY
          </h1>
          <p>
            See what’s included in your Breitling International Warranty and
            understand its validity period.
          </p>
          <S.styleButton>DISCOVER</S.styleButton>
        </S.styleCol>
        <S.styleCol span={12}>
          <img
            src="https://www.breitling.com/media/breitling/images/service/2022/landing/asset-version-752bb8c37d/icon-warranty-3.svg"
            alt=""
          />
          <h1>
            <span>WARRANTY</span> EXTENSION
          </h1>
          <p>
            Ensure additional peace of mind now and into the future with a
            warranty extension.
          </p>
          <S.styleButton>DISCOVER</S.styleButton>
        </S.styleCol>
      </Row>
      <Row justify="center" align="center" gutter={[16, 16]}>
        <S.styleCol span={12}>
          <img
            src="https://www.breitling.com/media/image/3/normal_16_9/asset-version-f1b41c287f/service-block-learn-more-about-your-breitling.webp"
            alt=""
          />
        </S.styleCol>
        <S.styleColNft span={12}>
          <h1>
            <span>LEARN MORE</span> ABOUT YOUR BREITLING
          </h1>
          <Row
            justify="center"
            align="center"
            gutter={[16, 16]}
            style={{ width: "100%" }}
          >
            <Col span={8}>
              <S.styleIcon>
                <img
                  src="https://www.breitling.com/assets/images/br-11-20/asset-version-d86b7ce792/icon-manuals.svg"
                  alt=""
                />
                <p>USER </p>
              </S.styleIcon>
            </Col>
            <Col span={8}>
              <S.styleIcon>
                <img
                  src="https://www.breitling.com/assets/images/br-11-20/asset-version-540aa8d472/icon-blockchain.svg"
                  alt=""
                />
                <p>NFT</p>
              </S.styleIcon>
            </Col>
            <Col span={8}>
              <S.styleIcon span={8}>
                <img
                  src="https://www.breitling.com/assets/images/br-11-20/asset-version-34c029daf7/icon-faqs.svg"
                  alt=""
                />
                <p>FAQS</p>
              </S.styleIcon>
            </Col>
          </Row>
        </S.styleColNft>
      </Row>
    </>
  );
}
export default ServicePage;
