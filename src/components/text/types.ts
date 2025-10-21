import React from "react";

const sizeOptions = ['small', 'medium', 'large', 'xlarge', 'xxlarge'];
const weightOptions = ['bold', 'semibold', 'book', 'regular'];
export type Size = typeof sizeOptions[number];
export type Weight = typeof weightOptions[number];

export type TextProps = {
  children?: React.ReactNode;
  size?: Size;
  className?:  string;
  weight?: Weight
}