import { forwardRef } from "react";
import { InputProps } from "@/@types/input";
import * as S from "./styles";

export const InputElement = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    return <S.Input ref={ref} {...rest} />;
  }
);
