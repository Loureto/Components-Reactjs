import { forwardRef, useId } from "react";
import { InputProps } from "@/@types/input";
import * as S from "./styles";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = "",
      type = "text",
      name = "",
      helpText = "",
      maxWidth = 240,
      maxheight = 40,
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const hasLabel = label.length > 0;
    const hasError = helpText.length > 0;

    return (
      <S.Container>
        {hasLabel && <S.Label htmlFor={inputId}>{label}</S.Label>}
        <S.Input
          id={inputId}
          ref={ref}
          type={type}
          name={name}
          $maxWidth={`${maxWidth}px`}
          $maxHeight={`${maxheight}px`}
          {...props}
        />
        {hasError && <S.HelpText>{helpText}</S.HelpText>}
      </S.Container>
    );
  }
);
