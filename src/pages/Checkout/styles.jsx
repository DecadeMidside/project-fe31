import styled from "styled-components";
import { Input, Button, Card, Row, Col, Select, Collapse } from "antd";

export const checkoutWrapper = styled(Row)`
  max-width: 1224px;
  display: flex;
  justify-content: space-between;
  margin: 8px auto;
`;
export const styleCard = styled(Card)`
  border-radius: 0;
`;
export const styleTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  /* line-height: 78.5714px; */
  padding: 16px;

  text-align: center;
  > h1 {
    color: #ffc62d;
    display: inline;
    font-size: 50px;
    font-weight: 700;
    /* line-height: 78.5714px; */
    text-align: center;
    > span {
      color: black;
    }
  }
`;
export const StyledBtnProduct = styled.button`
  width: 160px;
  height: 50px;
  background-color: #ffc62d;
  border-radius: 0;
  font-size: 20px;
  border: none;
  :hover {
    color: white;
    cursor: pointer;
  }
`;
export const styleTotal = styled.div`
  background-color: #ffc62d;
  color: #fff;
  text-align: center;
  padding: 8px;
  font-size: 20px;
  font-weight: 600;
`;
