import styled from "styled-components";

export const styleFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 0 30px;
  font-size: 14px;
  color: #fff;
  background-color: #333;
  > li:hover {
    color: #ffc62d;
    cursor: pointer;
  }
`;
export const styleFooterHeading = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;

  > li {
    margin: 0 16px;
  }
`;
export const styleFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const styleFooterMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;

  > li {
    margin: 0 16px;
  }
  > li:hover {
    color: #ffc62d;
    cursor: pointer;
  }
`;
export const styleButton = styled.div`
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
