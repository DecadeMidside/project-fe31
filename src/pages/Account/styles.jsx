import { Button, Input, Col, Row, Form } from "antd";
import styled from "styled-components";

export const StyleSlider = styled.div`
  background-image: url("https://www.breitling.com/media/breitling/images/account/login/asset-version-8436ff698b/header_1400.webp");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const StyleTitle = styled.div`
  text-align: center;
  color: #ffc62d;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0;
  margin: 40px auto;
`;
export const StyleText = styled.div`
  color: #ffffff;
  font-weight: lighter;
  line-height: 1.4;
  font-size: 14px;

  margin: 20px 0px 14px;
  padding: 40px;
  text-align: justify;
`;
export const StyleCustomRow = styled(Row)``;
export const StyleBoxContent = styled.div`
  margin: 40px;
  font-size: 14px;
  font-weight: 400;
`;
export const StyleCustomColLogin = styled(Col)`
  height: 400px;
  align-items: center;
  background-color: #ffc62d;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 30px 16px;
  text-align: center;
`;
export const StyleCustomColCreateAccount = styled(Col)`
  height: 400px;
  align-items: center;
  background-color: #0e2240;
  color: #fff;
  display: flex;

  justify-content: center;
  padding: 30px 16px;
  text-align: center;
`;
export const StyleCustomFormLogin = styled(Form)`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  height: inherit;
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
  max-width: 100%;
  padding: 8px 32px 3px 10px;
  width: 100%;
`;
export const StyleCustomButtonLogin = styled(Button)`
  background-color: #ffff;
  color: #333;
  border: none;
  border-radius: 0;
  font-weight: 700;
  height: auto;
  max-width: none;
  outline: none;
  padding: 16px 50px;
  text-align: center;
  :hover {
    color: #ffc62d !important;
    background-color: #fff !important;
  }
`;
export const StyleButtonCreate = styled.button`
  width: 250px;
  height: 50px;
  margin: 30px 0;
  font-weight: 700;
  font-size: 14px;
  background: transparent;
  box-shadow: inset 0 0 0 2px #fff;
  color: #fff;
  :hover {
    color: #fff;
    background-color: #ffc62d;

    cursor: pointer;
  }
`;
export const styleProfile = styled.div`
  background-color: #f1f1f1;
`;
export const StyleBoxProfile = styled.div`
  background-image: url("https://www.breitling.com/media/breitling/images/account/landing/asset-version-0d68d070c0/my-watches.jpg");
  background-repeat: no-repeat;
  width: 100%;
  min-height: 400px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
