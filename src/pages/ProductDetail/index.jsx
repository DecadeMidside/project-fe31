import * as S from "./styles";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Select,
  Checkbox,
  Space,
  Image,
} from "antd";
function ProductDetail() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Image src="https://www.breitling.com/media/image/3/gallery_square/asset-version-e8254c39f6/ab01761a1k1x1-top-time-b01-chevrolet-corvette-soldier.webp"></Image>
        </Col>
        <Col span={12}>
          <h5>AB0145171C1A1</h5>
          <h1>PREMIER B01 CHRONOGRAPH 42</h1>
          <h3>USD 9,500</h3>
          <h5>Boutique delivery available</h5>
          <button>ADD TO BAG</button>
          <button>GIVE AS A GIFT</button>
          <div>
            <div>icon</div>
            <div>CALL TO BUY</div>
          </div>
          <div>
            <div>icon</div>
            <div>BOOK AN APPOINTMENT</div>
          </div>
          <ul>
            <li>FREE SHIPPING</li>
            <li>FREE RETURN</li>
            <li>EXCLUSIVE BENEFITS</li>
          </ul>
        </Col>
      </Row>
      <h1>KEY FEATURES</h1>
      <Row>
        <ul style={{ display: "flex" }}>
          <li>
            <img src="" alt="ex" />
            <h5>Case material</h5>
            <strong>123</strong>
          </li>
          <li>
            <img src="" alt="ex" />
            <h5>Water resistance</h5>
            <strong>123</strong>
          </li>
          <li>
            <img src="" alt="ex" />
            <h5>Diameter</h5>
            <strong>123</strong>
          </li>
          <li>
            <img src="" alt="ex" />
            <h5>Thickness</h5>
          </li>
          <li>
            <img src="" alt="ex" />
            <h5>Product Weight (Approx.)</h5>
            <strong>123</strong>
          </li>
          <li>
            <img src="" alt="ex" />
            <h5>Power reserve</h5>
            <strong>123</strong>
          </li>
        </ul>
      </Row>
      <h1>WARRANTY</h1>
      <Row style={{ display: "flex" }}>
        <Col span={8}>
          <Row>
            <Col span={16}>
              <div>
                Whether it's a chronograph or Breitling watch, we've got you
                covered on all your needs. Find all the details under our terms
                and conditions – Breitling International Warranty and Warranty
                Period. Warranty Duration (Years): 5 Visit Breitling's Terms &
                Conditions for warranty details.
              </div>
            </Col>
            <Col span={8}>
              <img src="" alt="chứng nhận" />
            </Col>
          </Row>
          <Row>
            <h4>+3 YEARS</h4>
            <h5>MECHANICAL MANUFACTURE BREITLING MOVEMENTS </h5>
            <h6>
              Extend the warranty on your Breitling watch by an additional 3
              years for Breitling mechanical manufacture movements or 2 years
              for other Breitling movements. Give your watch the best care
              possible.
            </h6>
            <h4>EXTEND MY WARRANTY</h4>
          </Row>
        </Col>
        <Col span={16}>
          <Row>
            <Col span={8}>
              <Image src="https://www.breitling.com/assets/images/br-11-20/be-3365-temp/asset-version-e304bf56ec/warranty-care.jpg"></Image>
            </Col>
            <Col span={16}>
              <h2>CARING FOR YOUR BREITLING WATCH</h2>
              <div>
                A Breitling watch lasts a lifetime. It adapts to any lifestyle.
                It also needs a bit of care from time to time. Ensure your
                Breitling performs at its peak performance by treating it to our
                #BreitlingCare services. Explore our comprehensive set of
                services and assistance designed for you and your Breitling.
              </div>
              <h4>EXPLORE #BREITLINGSERVICE</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default ProductDetail;
