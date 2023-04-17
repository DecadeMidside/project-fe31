import { Row, Col, Form, Input, Checkbox, Button, Card } from "antd";

import ProductItem from "./productItem";
import * as S from "./styles";

function ProductList() {
  return (
    <S.ProductListWrapper>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>rrr</Card>
        </Col>
        <Col span={18}>
          <Row gutter={[16, 16]}>
            <Col span={6}>{ProductItem()}</Col>
            <Col span={6}>{ProductItem()}</Col>
            <Col span={6}>{ProductItem()}</Col>
            <Col span={6}>{ProductItem()}</Col>
          </Row>
          <Row justify={"center"}>
            <Button>Showmore</Button>
          </Row>
        </Col>
      </Row>
    </S.ProductListWrapper>
  );
}
export default ProductList;
