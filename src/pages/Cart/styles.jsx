import React from "react";
import { Input, Button, Card, Row, Col, Select, Collapse } from "antd";
import styled from "styled-components";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { AiOutlineNodeCollapse } from "react-icons/ai";

export const Container = styled.div`
  max-width: 1440px;
  justify-content: center;
  padding: 32px;
  margin: 0 auto;
  background-color: #fafafa;
`;
export const styleEmpty = styled.div`
  text-align: center;

  > img {
    height: 118px;
    width: 88px;
    margin: 16px 0;
  }
  > button {
    margin: 1rem 0;
    width: 249px;
    font-weight: 600;
    padding: 0.75rem 1rem;
    margin: 8px 0;
    background-color: ${(props) => (props.outline ? "#ffc62d" : "#ebebeb")};
    color: ${(props) => (props.outline ? "#333" : "#333")};
    font-size: 1rem;
    border: 3px solid black;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.outline ? "#ffc62d" : "#ffc62d")};
      color: ${(props) => (props.outline ? "#fff" : "#fff")};
    }
  }
`;
export const styleTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  line-height: 78.5714px;
  padding: 36px 6px;

  text-align: center;
  > h1 {
    color: #ffc62d;
    display: inline;
    font-size: 50px;
    font-weight: 700;
    line-height: 78.5714px;
    text-align: center;
    > span {
      color: black;
    }
  }
`;
export const styleProductItem = styled(Row)`
  display: flex;
  background-color: #ffff;
  > img {
    width: 150px;
    height: 206px;
    display: inline;
    font-size: 14px;
    line-height: 22px;
  }
`;
export const ProductInf = styled.div`
  position: relative;

  color: #111820;
  font-size: 20px;
  line-height: 26px;
  padding: 16px;
  flex: 1;

  > p {
    color: #77777a;
    font-size: 12px;
    font-weight: 100;
    line-height: 18.8571px;
  }
  > h4 {
    color: #0e2240;
    font-size: 20px;
    line-height: 26px;
    text-align: right;
  }
  > span {
    position: absolute;
    right: 16px;
    font-size: 14px;
    cursor: pointer;
    top: 16px;
  }
  > div {
    text-align: right;
    color: #77777a;
    font-size: 12px;
    font-weight: 100;
    line-height: 15.6px;
  }
`;
export const AddOption = styled.div`
  align-items: center;
  border-color: #ebebeb;
  border-style: solid none none;
  border-width: 1px 0px 0px;
  color: #0e2240;
  display: flex;
  font-family: Open Sans;
  font-size: 14px;
  line-height: 22px;
  padding: 10px 0px;
  > span {
    color: #0e2240;
    font-size: 14px;
    line-height: 22px;
    :hover {
      cursor: pointer;
      color: #ffc62d;
    }
  }
  > img {
    color: #ffc62d;
    display: inline;
    font-size: 14px;
    line-height: 22px;
    margin: 0px 0px -5px 25px;
    width: 80px;
    height: 48px;
  }
`;
export const SubTotal = styled.div`
  color: #111820;
  font-size: 20px;

  align-items: center;
  display: flex;
  justify-content: space-between;
  line-height: 22px;
`;
export const Total = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-color: #ebebeb;
  border-style: solid none none;
  border-width: 1px 0px 0px;
  font-size: 20px;
  line-height: 14px;
  margin: 30px 0px;
  padding: 8px 0;
`;
export const Content = styled.div`
  background-color: #f1f1f1;
  color: #0e2240;
  font-size: 12px;
  font-weight: 100;
  line-height: 18.8571px;
  margin: 30px 0px;
  padding: 10px;
`;
export const styleButton = styled.button`
  margin: 1rem 0;
  width: 420px;
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
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  justify-content: center;
  line-height: 22px;
  margin: 0px -6px;
  text-align: center;
  > img {
    margin: 16px;
    width: 48px;
    height: 30px;
    display: inline;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`;
export const Bill = styled(Col)`
  background-color: #ffffff;
  font-size: 14px;
  line-height: 22px;
  padding: 25px 0px 0px;
  > div {
    font-size: 12px;
    font-weight: 100;
    line-height: 18.8571px;
    padding: 10px 0px 30px;
    text-align: center;
  }
`;
export const NeedHelp = styled(Row)`
  display: block;
  background-color: #0e2240;
  font-size: 14px;
  line-height: 22px;
  margin: 25px auto;
  padding: 25px 16px 30px;
  text-align: center;
  justify-content: center;
  > div {
    color: #ffffff;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`;
export const styledCollapse = styled(Collapse)`
  width: 600px;
  font-size: 14px;
  line-height: 22px;
  margin: 32px auto;
  border-radius: 0 !important;

  > h1 {
    color: #0e2240;
    font-size: 30px;
    font-weight: 700;
    line-height: 62.8571px;
    text-align: center;
  }
`;
export const styleLabel = styled(CollapsePanel)`
  width: 100%;
  align-items: center;
  background-color: #0e2240;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  border-radius: 0 !important;
  line-height: 19.6px;

  > p {
    font-weight: 100;
    line-height: 19.6px;

    text-align: justify;
    background-color: #fff;
  }
`;
