import { Button, Input, Col, Menu } from "antd";
import styled from "styled-components";

export const TopHeader = styled.div`
  height: auto;
  position: fixed;
  width: 100%;
  height: 86px;
  padding: 0 8px;
  background-color: #fff;
  z-index: 999;
  top: 0;
`;

export const navBar = styled.ul`
  display: flex;
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
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: inherit;
  }
`;
export const customMenu = styled(Menu)`
  display: flex;
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
  justify-content: flex-end;
  font-size: 18px;
  width: 100%;
`;
export const StyledIcon = styled(Col)`
  margin: 0 16px;
  :hover {
    color: #ffc62d;
    cursor: pointer;
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

export const CustomColLogo = styled(Col)`
  display: flex;
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
