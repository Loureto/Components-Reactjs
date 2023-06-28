import { InputHTMLAttributes } from "react";

export type InputProps = {
  label?: string;
  type?: string;
  name?: string;
  helpText?: string;
  maxWidth?: number;
  maxheight?: number;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputStyleProps = {
  $maxWidth?: string;
  $maxHeight?: string;
};
