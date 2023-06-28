import theme from "@/styles/theme";
import { styled } from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${theme.colors.red_500};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${theme.colors.gray_50};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semibold};

  &:hover {
    filter: brightness(0.9);
  }
`;
