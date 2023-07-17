import * as S from "./styles";

type InputHelpTextProps = {
  text?: string;
};

export const InputHelpText = ({ text }: InputHelpTextProps) => {
  return <S.HelpText>{text}</S.HelpText>;
};
