import { Card } from "antd";
import styled from "styled-components";

export const ProductListWrapper = styled.div`
  max-width: 1216px;
  padding: 0 16px;
`;

export const WatchesWrapper = styled.div``;
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
