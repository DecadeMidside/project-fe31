import React from "react";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Select,
  Checkbox,
  Space,
  Image,
} from "antd";
import styled from "styled-components";
export const WrapperDetail = styled(Col)`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  max-width: 1232px;
  height: 670px;
  background-color: #fafafa;
`;
export const CustomColDetail = styled(Col)`
  text-align: left;
  padding: 16px 0;
  max-height: 100%;
  > h5 {
    font-size: 16px;
    font-weight: 400;
    margin: 0px 0px 10px 3px;
    max-width: 440px;
  }
  > h1 {
    color: #0e2240;
    max-width: 500px;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    margin: 0px 0px -5px;
    max-width: 440px;
  }
  > h3 {
    color: #ffc62d;
    font-size: 20px;
    line-height: 31.4286px;
    margin: 3px 0px 0px;
    max-width: 440px;
  }
`;
export const styleTextOr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  font-size: 18px;
  padding: 8px 0;

  > span {
    position: relative;
    margin: 4px auto;
    padding: 0 8px;
    color: #d1d1d1;
    ::before {
      background: #d1d1d1;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translate(-100%, -50%);
      width: 50px;
    }
    ::after {
      background: #d1d1d1;
      content: "";
      height: 1px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(100%, -50%);
      width: 50px;
    }
  }
`;

export const styleButton = styled.button`
  display: block;
  margin-right: 1rem;
  width: 440px;
  font-weight: 600;
  padding: 0.75rem 1rem;
  background-color: ${(props) => (props.outline ? "#ffc62d" : "#ebebeb")};
  color: ${(props) => (props.outline ? "#333" : "#333")};
  font-size: 1rem;
  border: ${(props) => (props.outline ? "1px solid #fff" : "none")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.outline ? "#ffc62d" : "#ffc62d")};
    color: ${(props) => (props.outline ? "#fff" : "#fff")};
  }
`;
export const styleCall = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ffc62d;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
  margin: 8px 0;
  padding: 10px 0px;
  text-align: left;
  > span {
    margin: 0 8px;
    color: #0e2240;
    :hover {
      color: #ffc62d;
    }
  }
`;
export const styleRowService = styled(Row)`
  width: 440px;
  display: flex;
  align-items: center;
  font-size: 13px;
  justify-content: space-between;
  line-height: 22px;
  margin: 20px -15px 0px 0px;
`;
export const styleColService = styled(Col)`
  max-width: 100%;
  align-items: center;
  color: #111820;
  display: flex;
  flex-basis: 0px;
  flex-direction: column;
  font-size: 13px;
  line-height: 15.4px;
  margin: 10px 0;
  text-align: center;
  > div {
    width: 70px;
    height: 70px;
    align-items: center;
    background-color: #f5f5f5;
    border-color: #ebebeb;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    line-height: 15.4px;
    margin: 0px 28.3281px 10px;
    text-align: center;
  }
  > span {
    cursor: pointer;
    color: #0e2240;
    :hover {
      color: #ffc62d;
    }
  }
`;
export const styleRowFeature = styled(Row)`
  display: flex;
  justify-content: center;
  margin: 16px auto;
  padding: 16px;
  max-width: 1232px;
  flex-wrap: wrap;
  font-size: 14px;

  line-height: 22px;
  margin: 10px -5px 0px;
  text-align: start;
  > ul {
    list-style-type: none;
  }
`;
export const styleTechnical = styled.div`
  background-color: #ffffff;
  max-width: 1232px;
  margin: 16px auto;
  border-color: #ebebeb;
  border-style: solid none none;
  border-width: 1px 0px 0px;
  font-size: 14px;
  line-height: 22px;
  padding: 16px 0px 15px;
`;
export const styleTechnicalContent = styled(Col)`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0px 0px;
  padding: 0px 20px 8px 0px;
  > ul {
    list-style-type: none;
    margin: 8px;
  }
`;
export const styleText = styled(Col)`
  font-size: 14px;
  font-weight: 100;
  line-height: 19.6px;
  margin: 16px 0;
  text-align: left;
`;
export const styleWarrantyInfo = styled(Row)`
  background-color: #fafafa;
  border-color: #ebebeb;
  border-style: solid none;
  border-width: 1px 0px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 200;
  padding: 15px;
`;
export const StyledProductItem = styled(Card)`
  display: flex;
  position: relative;

  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
  height: 450px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 0 !important;
  > div {
    padding: 0 4px 0 !important ;
    margin: -24px;
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
export const HeartIconWrapper = styled.div`
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
// export const styleStartBox = styled.div`
//   align-items: center;
//   border-color: #dddddd;
//   border-radius: 7px;
//   border-style: solid;
//   border-width: 1px;
//   display: flex;
//   font-size: 14px;
//   justify-content: space-between;
//   line-height: 21px;
//   margin: 16px auto;
//   padding: 16px;
//   max-width: 1232px;
// `;
// export const styleReviewBar = styled.div`
//   font-size: 14px;
//   line-height: 14px;
// `;
export const styleReview = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  line-height: 14px;
  padding: 0px 0px 10px;
`;
export const styleReviewBtn = styled(Button)`
  width: 160px;
  height: 50px;
  background-color: #d1d1d1;

  font-size: 20 !important;
  font-weight: 700;
  border: none;
  :hover {
    background-color: #918d83;
  }
`;
