import React from "react";
import type {ButtonProps} from "@/components/button/types.ts";
import Text from "@/components/text/Text.tsx";
import styles from "./Button.module.scss";

const defaultProps: Partial<ButtonProps> = {
  onClick: () => {},
  variant: 'primary',
  type: "button",
}

const stylesMapping: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
  tertiary: styles.buttonTertiary,
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, icon:Icon, onClick, variant, className, type, disabled } = {...defaultProps, ...props};
  return (
    <button
      className={`${styles.button} ${stylesMapping[variant as NonNullable<ButtonProps['variant']>]} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {Icon ? <div className={styles.icon}> <Icon /></div> : ''}
      {text ? <Text>{text}</Text> : ''}
    </button>
  )
}

export default Button