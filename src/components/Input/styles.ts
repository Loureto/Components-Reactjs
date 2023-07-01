import { css, styled } from "styled-components";
import theme from "@/styles/theme";
import { InputStyleProps } from "@/@types/input";

export const ContainerGroup = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border: 2px solid ${theme.colors.gray_300};
  border-radius: 6px;
  padding: 0 10px;
  gap: 6px;

  &:focus-within {
    border-color: ${theme.colors.blue_300};
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & + & {
    margin-top: ${theme.space._3};
  }
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.gray_800};
  margin-bottom: ${theme.space._1};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const HelpText = styled.p`
  text-align: end;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.red_500};
`;
