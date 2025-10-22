import React from 'react';
import styles from './Text.module.scss'
import type {Size, TextProps, Weight} from "@/atoms/text/types.ts";

const classSizeMapping: Record<Size, string> = {
  small: styles.textSmall,
  medium: styles.textMedium,
  large: styles.textLarge,
  xlarge: styles.textXlarge,
  xxlarge: styles.textXxlarge,
}

const classWeightMapping: Record<Weight, string> = {
  book: styles.textBook,
  bold: styles.textBold,
  semibold: styles.textSemibold,
  regular: styles.textRegular,
}

const DefaultProps: Partial<TextProps> = {
  size: 'medium',
  weight: 'regular',
}

const Text: React.FC<TextProps> = (props) => {
  const { children, size, className, weight, ...rest } = { ...DefaultProps, ...props };
  return <div
    className={`${styles.text} ${classWeightMapping[weight as Weight]} 
      ${classSizeMapping[size as Size]} 
      ${className ?? ''}`
    }
    {...rest}
  >
    {children}
  </div>;
}

export default Text;