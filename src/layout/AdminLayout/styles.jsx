import styled from "styled-components";

export const MainWrapper = styled.div`
  flex: 1;
  margin-top: 86px;
  margin-left: 250px;
  padding: 16px;
  letter-spacing: 0;
  transition: all 0.4s;
  height: auto;
  ${(props) =>
    props.isFull &&
    `
    margin-left: 0;
  `}
`;
