import { Button, Form, Input, Row } from "antd";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const TopHeader = styled.div`
  height: auto;
  width: 100%;

  padding: 20px;
`;

export const navBar = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;
export const HeaderBar = styled.div`
  font-size: 13px;
  font-weight: normal;
  border: 0;
  padding-top: 10px;
  margin-bottom: 0;
  text-decoration: none;
`;
export const RowCenter = styled(Row)`
  align-items: center;
`;
export const StyledFormSearch = styled(Form)`
  position: relative;
  /* line-height: 150px; */
  margin: 8px 0 0 8px;
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
export const SearchIcon = styled(FaSearch)`
  position: absolute;
  align-items: flex-start;
  line-height: 150px;
  font-size: inherit;
  letter-spacing: 1px;
`;
export const StyledLogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImg = styled.img`
  max-width: 115px;
  height: auto;

  object-fit: cover;
`;
