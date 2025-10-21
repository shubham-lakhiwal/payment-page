import styles from "@/pages/dashboard/components/transactions/Transaction.module.scss";
import Text from "@/components/text/Text.tsx";
import React from "react";
import type {TransactionCategory, TransactionProps} from "@/pages/dashboard/components/transactions/types.ts";
import EntertainmentIcon from '@/assets/icons/transaction/entertainment.svg?react';
import TravelIcon from '@/assets/icons/transaction/travel.svg?react';
import ShoppingIcon from '@/assets/icons/transaction/shopping.svg?react';
import BusinessIcon from '@/assets/icons/business-and-finance.svg?react';
import NextIcon from '@/assets/icons/next.svg?react';

const IconsMapping: Record<TransactionCategory, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  entertainment: EntertainmentIcon,
  travel: TravelIcon,
  shopping: ShoppingIcon,
}

const Transaction: React.FC<TransactionProps> = ({category, merchant, date, type, amount, description}) => {
  const Icon = IconsMapping[category];
  return (
    <div className={styles.details}>
      <div className={styles.transaction}>
        <div className={`${styles.icon} ${styles[category]}`}>
          <Icon />
        </div>
        <div>
          <Text weight="semibold">{merchant}</Text>
          <Text size="medium" className={styles.date}>{date}</Text>
        </div>
        <div className={styles.charges}>
          <Text weight="bold" className={styles[type]}>
            {type === 'debit' ? '-' : '+' } S$ {amount}
          </Text>
          <NextIcon />
        </div>
      </div>
      <div className={styles.activity}>
        <div className={styles.activityIcon}>
          <BusinessIcon />
        </div>
        <Text size="small" weight="semibold">{description}</Text>
      </div>
    </div>
  )
}

export default Transaction;