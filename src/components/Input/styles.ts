import { css, styled } from "styled-components";
import theme from "@/styles/theme";
import { InputStyleProps } from "@/@types/input";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${theme.space._3};
  }
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.gray_800};
  margin-bottom: ${theme.space._1};
`;

export const Input = styled.input<InputStyleProps>`
  border: 2px solid ${theme.colors.gray_300};
  border-radius: 6px;
  padding: 0 10px;

  &:focus {
    outline-color: ${theme.colors.blue_300};
  }

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
    `}
  ${({ $maxHeight }) =>
    $maxHeight &&
    css`
      height: ${$maxHeight};
    `}
`;

export const HelpText = styled.p`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.red_500};
`;
