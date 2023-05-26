import { useEffect, useMemo } from "react";
import { Link, generatePath } from "react-router-dom";
import { Card, Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../../../constant/routes";
import { getFavoriteListAction } from "../../../../redux/actions";

function FavoriteProduct() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  console.log(
    "🚀 ~ file: index.jsx:13 ~ FavoriteProduct ~ userInfo:",
    userInfo
  );
  const { favoriteList } = useSelector((state) => state.favorite);
  console.log(
    "🚀 ~ file: index.jsx:14 ~ FavoriteProduct ~ favoriteList:",
    favoriteList
  );

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(
        getFavoriteListAction({
          userId: userInfo.data.id,
        })
      );
    }
  }, [userInfo.data.id]);

  const renderProductList = useMemo(() => {
    return favoriteList.data.map((item) => {
      return (
        <Col key={item.id} xs={12} xl={8}>
          llll
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: item.product.id,
            })}
          >
            <Card title={item.product.name} size="small">
              <p>{item.product.price.toLocaleString()} VND</p>
            </Card>
          </Link>
        </Col>
      );
    });
  }, [favoriteList.data]);

  return (
    <Spin spinning={favoriteList.load}>
      <Row gutter={[16, 16]}>{renderProductList}</Row>
    </Spin>
  );
}

export default FavoriteProduct;
