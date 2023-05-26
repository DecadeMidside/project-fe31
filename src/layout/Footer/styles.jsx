import styled from "styled-components";

export const styleFooter = styled.div`
  max-width: 100%;
  height: auto;
  padding: 30px;
  font-size: 14px;
  color: #fff;
  background-color: #111820;
  bottom: 0 !important;
`;
export const styleFooterHeading = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 16px;

  > li {
    margin: 0 16px;
  }
  > li:hover {
    color: #ffc62d;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    /* Các thuộc tính và giá trị tương thích với màn hình nhỏ hơn 768px */
    display: block;
  }
`;
export const styleFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    /* Các thuộc tính và giá trị tương thích với màn hình nhỏ hơn 768px */
    display: none;
  }
`;
export const styleFooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 30px auto;
  width: 400px;
  font-size: 24px;
`;
export const styleFooterMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  font-size: 12px;

  > li {
    margin: 0 16px;
  }
  > li:hover {
    color: #ffc62d;
    cursor: pointer;
  }
`;
export const styleButton = styled.div`
  display: flex;
  border: 2px solid #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin-left: auto;
  padding: 12px 9px;
  text-align: center;
  text-transform: uppercase;
  transition: none;
  white-space: nowrap;

  :hover {
    color: #333;
    background-color: #ffc62d;
  }
`;
export const styleLanguage = styled.div`
  display: flex;

  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 22px;
  padding: 8px;
  text-align: center;
`;
