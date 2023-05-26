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
