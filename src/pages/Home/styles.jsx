import styled from "styled-components";
import { Col, Row } from "antd";
import {
  StyleSlider,
  StyleText,
  StyleTitle,
  StyleButtonCreate,
} from "../Account/styles";

export { StyleSlider, StyleText, StyleTitle, StyleButtonCreate };

export const styledCarousel = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/home_slide_desktop_1920/asset-version-ef97cec7cf/banner-web-7.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 521px;
  width: 1519px;
  object-fit: cover;
`;
export const styledCarousel2 = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/home_slide_desktop_1920/asset-version-e9c4ae309c/banner-web-jpg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 521px;
  width: 1519px;
  object-fit: cover;
`;
export const styledCarousel3 = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/home_slide_desktop_1920/asset-version-369177a57f/banner-web-3.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 521px;
  width: 1519px;
  object-fit: cover;
`;

export const styledCustomColContainer = styled(Col)`
  display: flex;
  height: 521px;
  top: 50%;
  text-align: right;
  justify-content: center;
  align-items: center;
`;
export const styledBoxContent = styled.div`
  font-weight: 700;
`;
export const styledTextTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;
export const styledCustomButton = styled.button`
  width: 169px;
  height: 49px;
  margin: 10px 0 6px;
  padding: 16px;
  font-weight: 700;
  font-size: 14px;
  background-color: #ffc62d;
  border-radius: 0;
  font-weight: 700;
  border: none;
  :hover {
    color: white;
  }
`;
export const styledCustomTitle = styled.h2`
  width: 100%;
  height: 40px;
  font-size: 40px;
  margin: 0 0 30px;
  text-align: center;
  color: black;
`;
export const styledContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
`;
export const styledCustomColProductItem = styled(Col)`
  height: 100%;
  width: 25%;
  padding: 8px;
`;
export const styledCustomRowService = styled(Row)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const styledColService = styled(Col)`
  width: 25%;
  font-size: 14px;
  padding: 8px;
  height: 164px;
`;
export const styledServiceBoxes = styled.div`
  height: 100%;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  padding: 30px 20px;
  background-color: #f4f2f2;
  cursor: pointer;
  :hover {
    color: #ffc62d;
    transition: all 0;
  }
`;
export const styledImgService = styled.img`
  height: 47px;
`;
export const styledContentService = styled.p`
  font-size: 20px;
  margin: 10px;
`;
export const styledCustomSlider = styled(StyleSlider)`
  background-image: url("https://www.breitling.com/media/image/2/enrichment_1920/asset-version-06c75efcef/blockchain3.webp");
  background-repeat: no-repeat;
  background-size: cover;
  height: 456px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;
export const styledCustomWoman = styled.div`
  background-image: url("https://www.breitling.com/media/image/2/single_entry_double_image_435/asset-version-dcbddec77c/charlize-theron-pr-non-exclu_site.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 440px;
`;
export const styledCustomWatchesWoman = styled(styledCustomWoman)`
  background-image: url("https://www.breitling.com/media/image/2/single_entry_double_image_435/asset-version-78bdd0719f/chronomat36-still-u103800101l1a1_3000.webp");
`;
export const styledCustomColWoman = styled(Col)`
  margin: 8px;
`;
export const styledTextWoman = styled.div`
  text-align: center;
`;
export const styledCustomRowNew = styled(Row)`
  background-image: url("https://www.breitling.com/media/image/2/enrichment_1920/asset-version-6a79fde39b/chronomat-b01-42-steel-cad-green-rvb_24954_16-07-20.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 456px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
`;
