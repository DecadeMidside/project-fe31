import styled from "styled-components";
import { Input, Select, Button } from "antd";
export const Wrapper = styled.div`
  height: 100%;
`;

export const TopWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  z-index: 97;
`;
export const StyleCustomSelect = styled(Select)`
  border-bottom: 1px solid hsla(0, 0%, 39%, 0.3);
  border-radius: 0;
  box-sizing: border-box;
  color: #111820;
  /* background-color: hsla(0, 0%, 100%, 0.3); */
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  width: 100%;
  padding: 8px 32px 3px 10px;
`;
export const StyledBtnProduct = styled(Button)`
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
