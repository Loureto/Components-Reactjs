import { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
