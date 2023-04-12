import { Card } from "antd";
import styled from "styled-components";

export const WatchesWrapper = styled.div`
  width: 25%;
`;
export const StyledProductItem = styled(Card)`
  display: flex;
  flex-direction: column;
  /* width: 25%; */
  height: 100%;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 0;
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
