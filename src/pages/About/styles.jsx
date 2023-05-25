import { Button, Input, Col, Row, Form } from "antd";
import styled from "styled-components";
export const customStyleRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styleBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://www.breitling.com/media/image/3/double_entry_desktop_922/asset-version-33cb1fdb45/10-about-page-squadonamission-2.webp");
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 550px;
  object-fit: cover;
  font-size: 14px;
  line-height: 22px;
  padding: 30px;
  margin: 8px;
  text-align: center;
  > h1 {
    margin: 4px auto;
    font-size: 40px;
    font-weight: 700;
    line-height: 61px;
    color: #ffffff;
  }
  > p {
    display: inline-block;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    margin: 10px 0px 0px;
    text-align: center;
    text-decoration: underline;
    :hover {
      cursor: pointer;
      color: #ffc62d;
    }
  }
`;
export const styleTitle = styled.div`
  color: #111820;
  width: 100%;
  height: 68px;
  margin: 16px 0;
  background-color: #f1f1f1;
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;

  text-align: center;
`;
export const styleCategory = styled.div`
  width: 125px;
  align-items: center;
  color: #ffc62d;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  font-size: 14px;
  line-height: 22px;
  > img {
    width: 64px;
    height: 64px;
  }
  > span {
    color: #b39233;
    font-size: 13px;
    line-height: 15.6px;
    margin: 5px 0px 0px;
    text-align: center;
  }
`;
