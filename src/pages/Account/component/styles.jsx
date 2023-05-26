import { Button, Input, Col, Row, Form } from "antd";
import styled from "styled-components";
export const StyleTitle = styled.div`
  text-align: center;
  color: #ffc62d;
  font-size: 20px;
  font-weight: 700;
`;
export const styleFormContent = styled.div`
  width: 500px;

  text-align: center;
`;
export const StyleCustomRow = styled(Row)`
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyleCustomRowForm = styled(Row)`
  background-color: #f1f1f1;
  padding: 4px auto;
  /* margin: 0 16px auto; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyleCustomInput = styled(Input)`
  border: none;
  border-bottom: 1px solid hsla(0, 0%, 39%, 0.3);
  border-radius: 0;
  box-sizing: border-box;
  color: #111820;
  /* background-color: hsla(0, 0%, 100%, 0.3); */
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  width: 100%;
  padding: 8px;
`;
export const StyleCustomInputPass = styled(Input.Password)`
  border: none;
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
export const StyleButtonCreate = styled.button`
  width: 250px;
  height: 50px;
  margin: 30px 0;
  font-weight: 700;
  font-size: 14px;
  background: transparent;
  box-shadow: inset 0 0 0 2px #fff;
  color: #333;
  :hover {
    color: #fff;
    background-color: #ffc62d;

    cursor: pointer;
  }
`;
export const styledHistoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const styledTable = styled.div`
  max-width: 700px;
  margin-bottom: 20%;
`;
