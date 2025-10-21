import React from 'react';
import type {InputProps} from "@/components/input/types.ts";
import Text from "@/components/text/Text.tsx";
import styles from "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  name,
  placeholder,
  error,
  disabled,
 }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label}>
        <Text weight="semibold">{label}</Text>
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
      />
      {error && <Text className={styles.error} size="small">{error}</Text>}
    </div>
  );
};

export default Input;