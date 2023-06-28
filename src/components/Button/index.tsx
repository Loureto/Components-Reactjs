import { ButtonProps } from "@/@types/button";
import { PulseLoader } from "react-spinners";
import * as S from "./styles";

export const Button = ({
  children,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button type="button" {...props}>
      {!loading && children}
      {loading && <PulseLoader color="#FFF" size={10} />}
    </S.Button>
  );
};
