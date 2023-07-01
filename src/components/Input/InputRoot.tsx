import { ReactNode } from "react";
import * as S from "./styles";

type InputRootProps = {
  children: ReactNode;
};

export const InputRoot = ({ children }: InputRootProps) => {
  return <S.Container>{children}</S.Container>;
};
