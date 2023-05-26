import styled from "styled-components";

export const styledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const styledTable = styled.div`
  max-width: 700px;
`;

export const styledCheckBtn = styled.button`
  display: inline-block;
  max-width: none;
  height: auto;
  margin: 16px 0 6px;
  padding: 16px 32px;
  font-weight: 700 !important;
  font-size: 14px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  background-color: #4ede4e;
  font-weight: 700;
  border: none;
  :hover {
    color: #ffc62d;
    cursor: pointer;
  }
`;
export const styledContinueBtn = styled(styledCheckBtn)`
  background-color: #ffc62d;
  :hover {
    color: aliceblue;
  }
`;
