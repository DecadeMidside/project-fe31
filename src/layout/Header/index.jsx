import { Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Logo from "../../images/breitling.svg";
import * as S from "./styles";

const onSearch = (value) => console.log(value);
function Header() {
  return (
    <div className="header">
      <S.TopHeader>
        <Row>
          <Col span={4}>
            <S.StyledImg src={Logo}></S.StyledImg>
          </Col>
          <Col span={12}>
            <S.navBar>
              <li>Watches</li>
              <li>Straps</li>
              <li>Stores</li>
              <li>Service</li>
              <li>Sustainability</li>
              <li>About</li>
            </S.navBar>
          </Col>
          <Col span={8}>
            <SearchOutlined />
          </Col>
        </Row>
      </S.TopHeader>
      <S.HeaderBar>
        <S.RowCenter>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}>col-8</Col>
        </S.RowCenter>
      </S.HeaderBar>
    </div>
  );
}
export default Header;
