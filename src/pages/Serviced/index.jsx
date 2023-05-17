import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../constant/routes";
import { logoutAction } from "../../redux/actions";
import * as S from "./styles";

function ServicePage() {
  return (
    <>
      <S.styleTitle>SERVICE</S.styleTitle>
      <S.customStyleRow>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/3/mini_square/asset-version-7a7c303d35/service-bubble-need-a-service.jpg"
            alt=""
          />
          <span> NEED A SERVICE</span>
        </S.styleCategory>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-7f850f35f0/74qeo_zv-1.jpg"
            alt=""
          />
          <span> SERVICE PRICES</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-cb06bafdfa/_mg_7148-1-1.jpg"
            alt=""
          />
          <span>WATCH CARE</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/3/mini_square/asset-version-c97c0c9d46/service-bubble-theft.jpg"
            alt=""
          />
          <span> WARRANTY</span>
        </S.styleCategory>{" "}
        <S.styleCategory>
          <img
            src="https://www.breitling.com/media/image/2/mini_square/asset-version-4dd85b6610/_mg_9660-1-1.jpg"
            alt=""
          />
          <span>OUR SERVICE</span>
        </S.styleCategory>
      </S.customStyleRow>
    </>
  );
}
export default ServicePage;
