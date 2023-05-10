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
  Modal,
  Collapse,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineHeart } from "react-icons/ai";
import { ROUTES } from "../../constant/routes";
import { PRODUCT_LIMIT } from "../../constant/paging";
import {
  getProductDetailAction,
  getProductListAction,
  addToCartAction,
} from "../../redux/actions";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

function CartPage() {
  const { cartList } = useSelector((state) => state.cart);
  console.log("🚀 ~ file: index.jsx:31 ~ CartPage ~ cartList:", cartList);

  const cartTotalPrice = cartList.reduce(
    (total, item) => total + item.price,
    0
  );
  function EmptyCart() {
    return (
      <S.Container>
        <S.styleTitle>
          <h1>
            SHOPPING <span> BAG</span>
          </h1>
        </S.styleTitle>
        <S.styleEmpty>
          <img src="https://www.breitling.com/media/breitling/images/store-2018/asset-version-baba55e64d/bag.png" />
          <h1>YOUR SHOPPING BAG IS EMPTY</h1>
          <p>Free shipping and returns</p>
          <button>CONTINUE</button>
        </S.styleEmpty>
        <S.NeedHelp>
          <S.styleTitle>
            <h1>NEED HELP</h1>
          </S.styleTitle>
          <div>
            <div>ONLINE BOUTIQUE USA</div>
            <div>HANGAR 7, 206 DANBURY ROAD WILTON</div>
            <S.styleButton>CONTACT US</S.styleButton>
          </div>
        </S.NeedHelp>

        <S.styledCollapse accordion expandIconPosition="end">
          <h1>QUESTIONS ABOUT BUYING</h1>
          <S.styleLabel header="How do I claim my gift with purchase?" key="1">
            <p>
              Complete your watch purchase while logged into My Account on
              Breitling.com, and we'll show our appreciation with a gift from
              our range of lifestyle and travel accessories. Your selected gift
              will be sent separately, approximately 45 days after you have
              received your order.
            </p>
          </S.styleLabel>
          <S.styleLabel
            header="Which breitling products can I order online?"
            key="2"
          >
            <p>
              Any watch or strap whose product page contain an "Add to Bag" or
              "Pre-Order Now" link are available for purchase online. Simply
              click the link to get started.
            </p>
          </S.styleLabel>
          <S.styleLabel header="HOW QUICKLY WILL I RECEIVE MY ORDER?" key="3">
            <p>
              Standard delivery is 2-3 business days for watches and 3-5
              business days for all other orders once your order is confirmed. A
              signature is required upon delivery.
            </p>
          </S.styleLabel>
        </S.styledCollapse>
      </S.Container>
    );
  }
  const renderCartList = useMemo(() => {
    return cartList.map((item) => {
      return (
        <S.styleProductItem key={item.id}>
          <img src={item.image} alt="" />

          <S.ProductInf>
            <h3>{item.name}</h3>
            <span>Remove</span>
            <p>Stainless steel - Blue</p>
            <h4>{item.price.toLocaleString()} USD </h4>
            <div>Excl. Sales Tax.</div>
            <S.AddOption>
              <span>Add a traps</span>
              <img
                src="https://www.breitling.com/media/breitling/images/checkout/asset-version-2a2d1b9a6b/checkout-strap.webp"
                alt=""
              />
            </S.AddOption>
            <S.AddOption>
              <span>Extend your warranty for anothers three years</span>
            </S.AddOption>
          </S.ProductInf>
        </S.styleProductItem>
      );
    });
  }, [cartList]);

  const renderPrice = useMemo(() => {
    return renderCartList.map((item) => {
      return (
        <Row key={item.id}>
          <S.Bill>
            <S.SubTotal>
              <div>SUBTOTAL</div>
              <div> {cartTotalPrice.toLocaleString()} USD </div>
            </S.SubTotal>
            <S.SubTotal>
              <div>DELIVERY FEE</div>
              <div>FREE</div>
            </S.SubTotal>
            <S.Total>
              <h3>TOTAL</h3>
              <h3>{cartTotalPrice.toLocaleString()} USD</h3>
            </S.Total>
            <S.Content>
              Free shipping to all US states, including Hawaii. All orders
              require a signature upon delivery.
            </S.Content>
            <S.styleButton outline={true}>BUY NOW</S.styleButton>

            <S.styleButton outline={false}> CHECK OUT</S.styleButton>
            <S.CardList>
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-07df0b6411/bit_pay.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-6601145ba9/applepay.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-dadba19646/mastercard.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-cdcb46bb4b/dinersclub.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-7a8a13d10e/jcb.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-1372de9552/discover.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-280faaf394/paypal.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-9b09ce7e50/affirm.svg"
                alt=""
              />
              <img
                src="https://www.breitling.com/media/breitling/images/store-2018/payment/asset-version-7bf01f4136/paywithgoogle.svg"
                alt=""
              />
            </S.CardList>
            <div>
              128-bit SSL encrypted payment. Breitling does not keep your
              payment details for your next orders.
            </div>
          </S.Bill>{" "}
        </Row>
      );
    });
  }, [renderCartList]);
  function ExistCart() {
    return (
      <S.Container>
        <S.styleTitle>
          <h1>SHOPPING BAG</h1>
        </S.styleTitle>
        <Row gutter={[16, 32]}>
          <Col span={16} style={{ minHeight: "500px" }}>
            {renderCartList}
          </Col>
          <S.Bill span={8}>{renderPrice}</S.Bill>
        </Row>
        <S.NeedHelp>
          <S.styleTitle>
            <h1>NEED HELP</h1>
          </S.styleTitle>
          <div>
            <div>ONLINE BOUTIQUE USA</div>
            <div>HANGAR 7, 206 DANBURY ROAD WILTON</div>
            <S.styleButton>CONTACT US</S.styleButton>
          </div>
        </S.NeedHelp>

        <S.styledCollapse accordion expandIconPosition="end">
          <h1>QUESTIONS ABOUT BUYING</h1>
          <S.styleLabel header="How do I claim my gift with purchase?" key="1">
            <p>
              Complete your watch purchase while logged into My Account on
              Breitling.com, and we'll show our appreciation with a gift from
              our range of lifestyle and travel accessories. Your selected gift
              will be sent separately, approximately 45 days after you have
              received your order.
            </p>
          </S.styleLabel>
          <S.styleLabel
            header="Which breitling products can I order online?"
            key="2"
          >
            <p>
              Any watch or strap whose product page contain an "Add to Bag" or
              "Pre-Order Now" link are available for purchase online. Simply
              click the link to get started.
            </p>
          </S.styleLabel>
          <S.styleLabel header="HOW QUICKLY WILL I RECEIVE MY ORDER?" key="3">
            <p>
              Standard delivery is 2-3 business days for watches and 3-5
              business days for all other orders once your order is confirmed. A
              signature is required upon delivery.
            </p>
          </S.styleLabel>
        </S.styledCollapse>
      </S.Container>
    );
  }
  return localStorage.getItem("cartList") ? ExistCart() : EmptyCart();
}
export default CartPage;
