import styled from "styled-components";
import { Col, Collapse, Row, Card } from "antd";
import {
  StyleSlider,
  StyleText,
  StyleTitle,
  StyleButtonCreate,
} from "../Account/styles";

export { StyleSlider, StyleText, StyleTitle, StyleButtonCreate };

export const styledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
`;
export const styledWrapper = styled.div`
  max-width: 100%;
  min-height: auto;
  margin: 30px;
`;
export const styledCarousel = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/home_slide_desktop_1920/asset-version-ef97cec7cf/banner-web-7.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 550px;
  max-width: 100%;
  object-fit: cover;
  /* padding-top: 56.25%; */
`;
export const styledCarousel2 = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/home_slide_desktop_1920/asset-version-e9c4ae309c/banner-web-jpg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 550px;

  width: 100%;
  object-fit: cover;
`;
export const styledCarousel3 = styled.div`
  background-image: url("https://www.breitling.com/media/image/3/home_slide_desktop_1920/asset-version-369177a57f/banner-web-3.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 550px;

  width: 100%;
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
  margin-bottom: 16px;
`;
export const styleRowFeature = styled(Row)`
  display: flex;
  justify-content: center;
  max-width: 1232px;
  font-size: 14px;

  > ul {
    list-style-type: none;
  }
`;
export const StyledProductItem = styled(Card)`
  display: flex;
  position: relative;

  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
  height: 450px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 0 !important;
  > div {
    padding: 0 4px 0 !important ;
  }

  &::before {
    content: "HOT";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 8px;
    margin: 8px;
    border-radius: 50%;
    box-shadow: #ffc62d 2px;
    border-top: solid 2px #ffc62d;
    border-bottom: solid 2px #ffc62d;
    background-color: #f30707;
    color: #fafafa;
    font-weight: 500;
  }
`;
export const HeartIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* padding: 0 8px; */
  margin: 4px;
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;

export const StyledBtnProduct = styled.button`
  width: 160px;
  height: 50px;
  margin-top: 12px;
  background-color: #ffc62d;
  border-radius: 0;
  font-weight: 700;
  border: none;
  :hover {
    color: white;
  }
`;
export const styledCustomButton = styled.button`
  display: inline-block;
  max-width: none;
  height: auto;
  margin: 16px 0 6px;
  padding: 16px 32px;
  font-weight: 700 !important;
  font-size: 14px;
  text-align: center;
  align-items: center;
  background-color: #ffc62d;
  border-radius: 0;
  font-weight: 700;
  border: none;
  :hover {
    color: white;
    cursor: pointer;
  }
`;
export const StyleButtonBook = styled.button`
  display: inline-block;
  max-width: none;
  height: auto;
  margin: 16px 0 6px;
  padding: 16px 32px;
  font-weight: 700 !important;
  font-size: 14px;
  text-align: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0;
  font-weight: 700;
  border: none;
  :hover {
    color: #ffc62d;
    cursor: pointer;
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
  width: 100%;
  /* justify-content: space-between; */
  /* align-items: center; */
`;
export const styledColService = styled(Col)`
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
  min-height: 550px;
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
  object-fit: cover;
  width: 100%;
  min-height: 550px;
`;
export const styledCustomWatchesWoman = styled(styledCustomWoman)`
  background-image: url("https://www.breitling.com/media/image/2/single_entry_double_image_435/asset-version-78bdd0719f/chronomat36-still-u103800101l1a1_3000.webp");
  /* margin: 0 8px; */
`;
export const styledCustomColWoman = styled(Col)`
  /* margin: 4px; */
`;
export const styledTextWoman = styled.div`
  text-align: center;
`;
export const styledCustomRowNew = styled(Row)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://www.breitling.com/media/image/2/enrichment_1920/asset-version-6a79fde39b/chronomat-b01-42-steel-cad-green-rvb_24954_16-07-20.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 550px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  padding: 50px 22px 30px;
`;
export const styledColStrapsWrapper = styled(Col)`
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  min-height: 550px;
  align-items: center;
  text-align: center;
  padding: 70px 22px 0;
`;
export const styledColServiceWrapper = styled(Col)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.breitling.com/media/image/2/section_cta_1324/asset-version-108f1e5d72/_mg_9785.webp");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  min-height: 550px;
  align-items: center;
  text-align: center;
  padding: 70px 22px 0;
`;
export const styledTitleStrapsService = styled.h2`
  font-weight: 700 !important;
`;
export const styledContentStrapsService = styled.div`
  color: white;
  max-width: 396px;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
`;
export const styledCustomColStore = styled(Col)`
  background-color: #ffc62d;
  text-align: center;

  min-height: 450px;
  max-width: 100%;
  justify-content: space-between;
  padding: 30px 50px;
`;
