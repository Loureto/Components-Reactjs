import { ReactNode } from "react";

type InputIconProps = {
  children: ReactNode;
};
export const InputIcon = ({ children }: InputIconProps) => {
  return <div>{children}</div>;
};
