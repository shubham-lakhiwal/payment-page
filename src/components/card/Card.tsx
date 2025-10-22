import Logo from '@/assets/icons/logo.svg?react';
import Visa from '@/assets/icons/card/visa.svg?react';
import React from "react";
import styles from "./Card.module.scss";
import type { CardProps } from "@/components/card/types.ts";
import Text from "@/components/text/Text.tsx";

function formatCardNumber(digits: string) {
  if (!digits) return "";

  return digits.match(/.{1,4}/g)?.join(" ") ?? digits;
}

function maskNumber(formattedCardNumber: string) {
  const chars = formattedCardNumber.split("");
  for (let i = chars.length - 1; i >= 0; i--) {
    if (i <= 13 && /\d/.test(chars[i])) {
      chars[i] = "•";
    }
  }
  return chars.join("").split(' ').map((digit) => <span>{digit}</span>);
}

export const Card: React.FC<CardProps> = ({
    number,
    name,
    expiry,
    cvv,
    masked = true,
    className,
  }) => {
  const formatted = formatCardNumber(number);
  const visibleNumber = masked ? maskNumber(formatted) : formatted;

  return (
    <div
      role="group"
      aria-label={`Credit card for ${name} expiring ${expiry}`}
      className={`${styles.card} ${className || ''}`}
    >
      <div className={styles.cardTop}>
        <Logo className={styles.logo} />
      </div>

      <div
        className={`${styles.ownerName}`}
        aria-label="Card owner Name"
      >
        <Text size="xxlarge" weight="bold" >{name}</Text>
      </div>

      <Text
        weight="bold"
        className={`${styles.number}`}
        aria-label="Card number"
      >
        {visibleNumber}
      </Text>

      <div className={styles.otherDetails}>
        <div className={`${styles.expiry}`}>
          <Text weight="bold">Thru:</Text>
          <Text weight="bold" aria-label="Expiry date" className={styles.expiryValue}>
            {expiry}
          </Text>
        </div>

        <div className={`${styles.cvv}`}>
          <Text weight="bold">CVV:</Text>
          <Text size="xxlarge" weight="bold" aria-label="CVV" className={styles.cvvValue}>
            {masked ? cvv.replace(/\d/g, "*") : cvv}
          </Text>
        </div>
      </div>

      <div className={styles.cardBottom}>
        <Visa className={styles.brandLogo} />
      </div>
    </div>
  );
};

export default Card;
