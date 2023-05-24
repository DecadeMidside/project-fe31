import { Card, Row, Col, Input, Button } from "antd";
import styled from "styled-components";

export const ProductListWrapper = styled.div`
  max-width: 1216px;
  padding: 0 16px;
  margin: 16px auto;
`;
export const StyleSlider = styled.div`
  position: relative;
  background-image: url("https://www.breitling.com/media/breitling/images/br-11-20/collections/asset-version-ac66aa5027/hero-collection.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 200px;

  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    /* Các thuộc tính và giá trị tương thích với màn hình nhỏ hơn 768px */
    min-height: 150px;
    font-size: 30px;
  }

  @media (max-width: 480px) {
    /* Các thuộc tính và giá trị tương thích với màn hình nhỏ hơn 480px */
    min-height: 100px;
    font-size: 20px;
  }
`;
export const StyleTitle = styled.div`
  text-align: center;
  color: #333;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0;
  margin: 40px auto;
`;

export const WrapperCollection = styled(Row)`
  background-color: #f1f1f1;
  height: 100px;
  width: 100%;
  display: flex;
  font-size: 14px;
  justify-content: center;
  @media (max-width: 1024px) {
    /* Các thuộc tính và giá trị tương thích với màn hình nhỏ hơn 768px */
    display: none;
  }

  @media (max-width: 480px) {
    /* Các thuộc tính và giá trị tương thích với màn hình nhỏ hơn 480px */

    display: none;
  }
`;

export const CustomCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
`;
export const CustomInput = styled(Input)`
  background-color: #ffffff;
  border-color: #d5d5d5;
  border-radius: 5.28px 5.28px 0px 0px;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  font-size: 17.6px;
  font-weight: 100;
  line-height: 21.12px;
  padding: 11.44px 35.2px 9.68px 17.6px;
`;
export const CustomColSort = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  height: inherit;
`;
export const StyledCollection = styled(Card)`
  background-color: rgba(256, 256, 256, 0);
  margin-top: -100%;
  width: 100%;
  height: 145px;
  text-align: center;
  font-size: 8px;
  border: none;
  border-radius: 0 !important;
  > img {
    margin-top: 20px;
    padding: 0;
    width: 100%;
    height: 60px;
    margin-bottom: 0;
  }
  > div {
    padding: 0 4px 0 !important ;
    margin-top: -24px;
  }
  :hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

export const StyledProductItem = styled(Card)`
  display: flex;
  position: relative;

  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
  min-height: 450px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 0;
  > div {
    padding: 0 4px 0;
  }

  &::before {
    content: "NEW";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 8px;
    margin: 8px;
    border-top: solid 2px #ffc62d;
    border-bottom: solid 2px #ffc62d;
    background-color: #fafafa;
    color: #333;
    font-weight: 500;
  }
`;
export const HeartIconWrapper = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  /* padding: 0 8px; */
  margin: 4px;
  color: #333;
  font-size: 24px;

  cursor: pointer;
`;

export const StyledBtnProduct = styled.button`
  width: 160px;
  height: 50px;
  background-color: #ffc62d;
  border-radius: 0;
  font-weight: 700;
  border: none;
  :hover {
    color: white;
  }
`;
export const StyledFilter = styled(Card)`
  justify-content: center;
  position: sticky;
  top: 86px;
  padding: 0 8px;
  border-radius: 0;
  background-color: #f1f1f1;
  margin-top: 30px;
  min-height: 600px;
  @media (max-width: 768px) {
    display: none; // Ẩn phần filter trên màn hình nhỏ hơn 768px
  }
`;
