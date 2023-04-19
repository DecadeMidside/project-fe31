import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 1rem;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #888;
  margin-top: 1rem;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.button`
  margin-right: 1rem;
  padding: 0.75rem 1rem;
  background-color: ${(props) => (props.outline ? "transparent" : "#000")};
  color: ${(props) => (props.outline ? "#000" : "#fff")};
  font-size: 1rem;
  border: ${(props) => (props.outline ? "2px solid #000" : "none")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.outline ? "transparent" : "#222")};
    color: ${(props) => (props.outline ? "#222" : "#fff")};
  }
`;
