import React from "react";

export type Size = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
export type Weight = 'bold' | 'semibold' | 'book' | 'regular';

export type TextProps = {
  children?: React.ReactNode;
  size?: Size;
  className?:  string;
  weight?: Weight
}