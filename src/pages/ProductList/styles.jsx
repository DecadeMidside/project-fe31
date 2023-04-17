import { Card, Row, Col } from "antd";
import styled from "styled-components";

export const ProductListWrapper = styled.div`
  max-width: 1216px;
  padding: 0 16px;
  margin: 16px auto;
`;
export const StyleSlider = styled.div`
  position: relative;
  background-image: url("https://www.breitling.com/media/breitling/images/br-11-20/collections/asset-version-ac66aa5027/hero-collection.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const StyleTitle = styled.div`
  text-align: center;
  color: #333;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0;
  margin: 40px auto;
`;
export const WrapperCollection = styled(Row)`
  background-color: #f1f1f1;
  height: auto;
  width: 100%;
  display: flex;
  font-size: 14px;
  justify-content: center;
`;
// export const WrapperFilter = styled(Row)`
//   display: flex;
//   background-color: #fff;
//   padding: 16px;
//   margin: 0;
//   width: 100%;
//   height: inherit;
//   font-size: 14px;
//   justify-content: center;
// `;
export const CustomCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 100%;
`;
export const CustomColSort = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  height: inherit;
`;
export const StyledCollection = styled(Card)`
  flex-direction: column;
  /* background-color: ; */

  width: 100%;
  height: auto;
  text-align: center;
  font-size: 8px;
  border: none;

  border-radius: 0 !important;
  padding: 0;
`;

export const StyledProductItem = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;

  width: 100%;
  height: 500px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 0 !important;
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
