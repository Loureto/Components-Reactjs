import { LabelHTMLAttributes, ReactNode } from "react";

type InputLabelProps = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return <label {...props}>{children}</label>;
};
