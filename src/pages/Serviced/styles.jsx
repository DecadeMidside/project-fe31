import { Button, Input, Col, Row, Form } from "antd";
import styled from "styled-components";
export const customStyleRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styleBackground = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/double_entry_desktop_922/asset-version-33cb1fdb45/10-about-page-squadonamission-2.webp");
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  object-fit: cover;
  font-size: 14px;
  line-height: 22px;
  padding: 30px;
  margin: 16px;
  text-align: center;
  > h1 {
    margin: 16px auto;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    color: #ffc62d;
  }
  > p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    margin: 10px 0px 0px;
    text-align: center;
    :hover {
      cursor: pointer;
      color: #ffc62d;
    }
  }
`;
export const styleTitle = styled.div`
  color: #111820;
  width: 100%;
  height: 68px;
  margin: 16px 0;
  background-color: #f1f1f1;
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;

  text-align: center;
`;
export const styleCategory = styled.div`
  width: 125px;
  align-items: center;
  margin: 16px auto;
  color: #ffc62d;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  font-size: 14px;
  line-height: 22px;
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > span {
    color: #b39233;
    font-size: 13px;
    line-height: 15.6px;
    margin: 5px 0px 0px;
    text-align: center;
  }
`;
export const Slider = styled(Row)`
  background-image: url("https://www.breitling.com/media/image/3/hero_image_desktop_1920/asset-version-7cfd38b14b/service-block-need-a-service.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  max-width: 100%;
  min-height: 300px;
  margin: 20px 0 0 0;
`;
export const Content = styled(Row)`
  background-color: #f1f1f1;
  height: 200px;
  max-width: 100%;
  padding: 30px;
  margin: 16px 0;
`;
export const Title = styled.h1`
  width: 100%;
  height: 40px;
  font-size: 40px;

  text-align: center;
  color: White;
`;
export const styleButton = styled.button`
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
export const styleCol = styled(Col)`
  width: 300px;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: space-between;
  line-height: 22px;
  padding: 30px;
  text-align: center;
  > p {
    max-width: 300px;
  }
  > h1 {
    margin: 16px 0;
  }
  > img {
    max-width: 100%;
  }
  > button {
    width: 160px;
    height: 50px;
    margin: 16px 0;

    background-color: #ffc62d;
    border-radius: 0;
    font-weight: 700;
    padding: 16px;
    border: none;
    :hover {
      color: white;
    }
  }
`;
export const SliderFind = styled(Row)`
  background-image: url("https://www.breitling.com/media/image/3/enrichment_1400/asset-version-4df1ab6a86/18-service-page-find-boutique-image.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  padding: 50px;
  justify-content: center;
  max-width: 100%;
  min-height: 300px;
  margin: 20px 0 0 0;
`;
export const styleColNft = styled(Col)`
  align-items: center;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;

  justify-content: center;
  line-height: 22px;
  padding: 40px 15px;
  text-align: center;
`;
export const styleIcon = styled(Col)`
  width: 80px;
  height: 80px;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 100%;
  color: #111820;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 16px;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  > img {
    width: 30px;
    height: 30px;
  }
`;
