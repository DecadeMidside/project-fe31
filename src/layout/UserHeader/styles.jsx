import { Button, Input, Col } from "antd";
import styled from "styled-components";

export const TopHeader = styled.div`
  height: auto;
  position: fixed;
  width: 100%;

  background-color: #fff;
  z-index: 999;
  top: 0;
  /* > div {
    text-align: end;
    padding-right: 16px;
    margin-top: -4px;
  } */
`;

export const navBar = styled.ul`
  display: flex;
  padding: 20px;
  font-size: 18px;
  justify-content: space-between;
  list-style-type: none;
  > li:hover {
    color: #ffc62d;
    cursor: pointer;
  }
  > li {
    font-weight: 500;
  }
`;

export const CustomCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  height: inherit;
`;
export const StyledListIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  width: 100%;
  padding: 20px;
`;
export const StyledIcon = styled.div`
  margin: 0 16px;
  :hover {
    color: #ffc62d;
    cursor: pointer;
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
  padding-top: 10px;
  margin-bottom: 0;
  text-decoration: none;
`;

export const StyledSearchInput = styled(Input)`
  width: 100%;
  padding: 1px 2px;
  background: transparent;
  border: 1px solid rgb(168, 188, 158);
  border-radius: 0;
  margin: 0 0 10px;
  max-width: 100%;
  text-indent: 10px;
  outline: none;
  height: 44px;

  :focus {
    box-shadow: 0 0 3px #47474333;
    min-height: 32px;
  }
`;

export const SearchBtn = styled(Button)`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  height: 44px;
  /* line-height: 150px; */
  width: 44px;
  background: transparent;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;

  :hover {
    border: dotted 1px black;
    border-radius: 0;
  }
`;

export const StyledImg = styled.img`
  max-width: 115px;
  height: auto;
  object-fit: cover;
`;
