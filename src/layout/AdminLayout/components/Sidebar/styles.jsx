import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  position: absolute;
  left: -350px;

  padding: 8px;
  width: 350px;
  height: calc(100% - 56px);
  background-color: #f1f1f1;
  overflow: hidden;
  transition: all 0.4s;

  ${(props) =>
    props.isShow &&
    css`
      left: 0;
    `}
`;

export const SidebarItem = styled(Link)`
  display: block;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #d8ae73;
    color: white;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #ffc26d;
      color: white;
    `}
`;
