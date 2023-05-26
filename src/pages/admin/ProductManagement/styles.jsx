import styled from "styled-components";

export const FilterWrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border-radius: 4px;
  background-color: #c7c7c7;
`;
export const StyledBtnProduct = styled.button`
  margin: 1rem 0;
  width: 150px;
  font-weight: 600;
  border-radius: 20px;
  padding: 4px;
  margin: 8px 0;
  background-color: ${(props) => (props.outline ? "#ffc62d" : "#ebebeb")};
  color: ${(props) => (props.outline ? "#ebebeb" : "#333")};
  font-size: 1rem;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.outline ? "#ffc62d" : "#ffc62d")};
    color: ${(props) => (props.outline ? "#fff" : "#fff")};
  }
`;
export const StyledIcon = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid green;
`;
export const StyledIconDel = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid red;
`;
export const styleCreate = styled.button`
  width: 150px;
  height: 50px;
  box-shadow: #ffffff 0px 0px 0px 2px;
  border-radius: px;
  display: inline-block;
  background-color: #95ed95;
  font-size: 14px;
  font-weight: 700;

  padding: 16px;
  text-align: center;
`;
