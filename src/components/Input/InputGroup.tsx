import { ReactNode } from "react";
import * as S from "./styles";

type InputGroupProps = {
  children: ReactNode;
};

export const InputGroup = ({ children }: InputGroupProps) => {
  return <S.ContainerGroup>{children}</S.ContainerGroup>;
};
