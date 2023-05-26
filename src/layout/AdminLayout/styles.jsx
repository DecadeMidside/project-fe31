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
export const styleLoading = styled.div`
  height: 500px;
`;
export const styleBar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 23;
`;

export const styleLoad = styled.div`
  position: relative;
  height: 50px;
  width: 500px;
  border: 2px solid green;
  background-color: transparent;
  :hover {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: left;
    background-color: black;
    animation: progress 1s infinite;
  }
  @keyframes progress {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  :after {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    content: "Please Wait ...";
    text-align: center;
    mix-blend-mode: difference;
    color: white;
    text-transform: uppercase;
    font-weight: 800;
  }
`;
