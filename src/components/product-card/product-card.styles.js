import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Price = styled.span`
  width: 10%;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: contain;
  margin-bottom: 5px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${BaseButton} {
    width: 50%;
    opacity: 0.7;
    position: absolute;
    top: 250px;
    display: none;
  }
  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${BaseButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;
