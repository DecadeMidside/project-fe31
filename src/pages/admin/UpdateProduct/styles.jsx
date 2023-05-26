import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const TopWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  z-index: 97;
`;
export const StyledBtnProduct = styled.button`
  margin: 1rem 0;
  width: 100px;
  font-weight: 600;
  padding: 4px;
  margin: 8px 0;
  background-color: #95ed95;
  border: 1px solid #27f027;
  cursor: pointer;

  &:hover {
    background-color: #27f027;
  }
`;
