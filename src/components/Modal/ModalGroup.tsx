import { ReactNode } from "react";
import * as S from "./styles";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

export const ModalGroup = ({ children, isOpen, onClick }: ModalProps) => {
  if (isOpen) {
    return 
    
    
    
    <S.Container onClick={onClick}>
      
      
      
      children}</S.Container>;
  }

  return <></>;
};
