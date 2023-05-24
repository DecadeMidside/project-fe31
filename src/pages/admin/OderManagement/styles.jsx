import styled from "styled-components";

export const FilterWrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border-radius: 4px;
  background-color: #c7c7c7;
`;
export const StyledBtnProduct = styled.button`
  margin: 1rem 0;
  width: 100pxpx;
  font-weight: 600;
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
