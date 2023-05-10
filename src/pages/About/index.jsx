import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../constant/routes";
import { logoutAction } from "../../redux/actions";
import * as S from "./styles";

function AboutPage() {
  return (
    <>
      <S.styleTitle>ABOUT</S.styleTitle>
      <S.customStyleRow>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/3/mini_square/asset-version-a7e1e03248/our-mission.jpg"
            alt=""
          />
          <span>#SQUADONAMISSION</span>
        </S.styleCategory>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/3/mini_square/asset-version-3bb833069f/since.jpg"
            alt=""
          />
          <span>#SINCE 1886</span>
        </S.styleCategory>
      </S.customStyleRow>
      <S.customStyleRow>
        <Col span={12}>
          <S.styleBackground>
            <h1>#SQUADONAMISSION</h1>
            <p>Discover Now</p>
          </S.styleBackground>
        </Col>
        <Col span={12}>
          <S.styleBackground>
            <h1>#SQUADONAMISSION</h1>
            <p>Discover Now</p>
          </S.styleBackground>
        </Col>
        <Col span={12}>
          <S.styleBackground>
            <h1>#SQUADONAMISSION</h1>
            <p>Discover Now</p>
          </S.styleBackground>
        </Col>
        <Col span={12}>
          <S.styleBackground>
            <h1>#SQUADONAMISSION</h1>
            <p>Discover Now</p>
          </S.styleBackground>
        </Col>
      </S.customStyleRow>
    </>
  );
}
export default AboutPage;
