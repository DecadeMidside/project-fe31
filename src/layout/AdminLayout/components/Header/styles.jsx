import { Button, Input, Col, Menu, Card } from "antd";
import styled from "styled-components";

export const TopHeader = styled.div`
  height: auto;
  position: fixed;
  width: 100%;
  height: 86px;
  background-color: #fff;
  z-index: 999;
  top: 0;
`;

export const navBar = styled.ul`
  display: flex;
  height: 100%;
  padding: 20px;
  font-size: 18px;
  justify-content: center;
  list-style-type: none;

  > li {
    font-weight: 500;
    :hover {
      color: #ffc62d;
      cursor: pointer;
    }

    > a {
      text-decoration: none;
      color: #333;
      :hover {
        color: #ffc62d;
        cursor: pointer;
      }
    }
  }
`;

export const CustomColMenu = styled(Col)`
  display: flex;

  padding: 0 20px;
`;
export const customMenu = styled(Menu)`
  color: black !important;
  display: none;
  @media screen and (min-width: 768px) {
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;
  }
`;
export const customMenuHide = styled(Menu)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  padding: 20px;
  left: 0;
  top: 0;

  height: 100%;
  /* @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: inherit;
  } */
`;

export const StyledListIcon = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: flex-end;
  font-size: 18px;
  width: 100%;
  > i {
    text-decoration: none;
    color: #333;
    :hover {
      color: #ffc62d;
      cursor: pointer;
    }
  }
`;
export const StyledIcon = styled.div`
  margin: 0 16px;
  :hover {
    color: #ffc62d;
    cursor: pointer;
  }
`;
export const StyledIconMenu = styled.button`
  width: 20px;
  height: 20px;
  margin: auto 20px;
`;

export const StyledCardReview = styled(Card)`
  margin: 8px;
  border-radius: none;
  :hover {
    cursor: pointer;
    scale: 1.1;
    transition: 0.4s;
  }
`;
export const StyledIconPhone = styled.div`
  &:hover {
    &::after {
      content: "0123456789";
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #ffffff;
      box-shadow: #ccc 0px 0px 10px 0px;
      font-size: 14px;
      line-height: 22px;
      padding: 20px 30px 22px;
      text-align: center;
    }
  }
`;

export const CustomColLogo = styled.div`
  display: flex;
  /* background-color: #f1f1f1; */
  width: 250px;

  justify-content: center;
  align-items: center;
`;
export const HeaderBar = styled.div`
  font-size: 13px;
  font-weight: normal;
  border: 0;
  margin-bottom: 0;
  text-decoration: none;
`;

export const StyledImg = styled.img`
  max-width: 115px;
  height: auto;
  object-fit: cover;
`;
export const StyledBtnProduct = styled.button`
  margin: 1rem 0;
  width: 100px;
  font-weight: 600;
  border-radius: 20px;
  padding: 4px;
  margin: 8px 0;
  background-color: ${(props) => (props.outline ? "#ffc62d" : "#ebebeb")};
  color: ${(props) => (props.outline ? "#ebebeb" : "#333")};
  font-size: 12px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.outline ? "#ffc62d" : "#ffc62d")};
    color: ${(props) => (props.outline ? "#fff" : "#fff")};
  }
`;
