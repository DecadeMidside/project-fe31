import * as S from "./styles";
import { TfiWorld } from "react-icons/tfi";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa";
function Footer() {
  return (
    <S.styleFooter>
      <S.styleFooterHeading>
        <li>
          <FaPhoneAlt /> +1 203-456-2458{" "}
        </li>
        <li>MON-FRI 09:00-18:00, SAT-SUN: CLOSED</li>
        <li>INFO.US@BREITLING.COM</li>
      </S.styleFooterHeading>
      <S.styleFooterWrapper>
        <S.styleFooterMenu style={{ fontWeight: 500 }}>
          <li>WATCHES</li>
          <li>STRAPS </li>
          <li>SERVICE </li>
          <li>STORES </li>
          <li>ABOUT </li>
          <li>MY ACCOUNT</li>
          <li>FAQS </li>
          <li>NEWSLETTER </li>
          <li>DOWNLOAD THE CATALOG </li>
          <li>CHECK YOUR ORDER</li>
        </S.styleFooterMenu>
        <div>
          <S.styleButton>
            <TfiWorld />
            UNITED STATES ENG
          </S.styleButton>
        </div>
      </S.styleFooterWrapper>

      <S.styleFooterSocial>
        <FaFacebook />
        <FaInstagram />
        <FaTelegram />
        <FaTiktok />
        <FaYoutube />
        <FaTwitter />
      </S.styleFooterSocial>

      <S.styleFooterMenu>
        <li>Terms of use</li>
        <li>Press lounge</li>
        <li>Career</li>
        <li>Human Rights statement</li>
        <li>Privacy policy</li>
        <li>Terms & conditions</li>
        <li>Contact</li>
        <li>Impressum</li>
        <li>Sitemap</li>
        <li>Accessibility</li>
      </S.styleFooterMenu>
    </S.styleFooter>
  );
}
export default Footer;
