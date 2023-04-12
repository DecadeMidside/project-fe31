import { Card } from "antd";
import * as S from "./styles";

function ProductItem() {
  return (
    <section className="newWatches">
      <S.WatchesWrapper>
        <S.StyledProductItem
          hoverable
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <h3>PREMIER B01 CHRONOGRAPH 42</h3>
          <h6>USD 20,200 </h6>
          <S.StyledBtnProduct>ADD TO CART</S.StyledBtnProduct>
        </S.StyledProductItem>{" "}
      </S.WatchesWrapper>
    </section>
  );
}
export default ProductItem;
