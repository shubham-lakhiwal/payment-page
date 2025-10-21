import styles from "./Transaction.module.scss";
import Transaction from "@/pages/dashboard/components/transactions/Transaction.tsx";
import type {TransactionProps} from "@/pages/dashboard/components/transactions/types.ts";
import Text from "@/components/text/Text.tsx";

const TRANSACTIONS: TransactionProps[] = [
  {
    id: '1234abcd',
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'credit',
    description: 'Refund on debit card',
    category: 'shopping'
  },
  {
    id: '4321defr',
    merchant: 'Hamleys',
    date: '15 May 2020',
    amount: 200,
    type: 'debit',
    description: 'Charged to debit card',
    category: 'travel'
  },
  {
    id: '1234abcdre',
    merchant: 'Hamleys',
    date: '15 May 2020',
    amount: 200,
    type: 'debit',
    description: 'Charged to debit card',
    category: 'entertainment'
  },
  {
    id: '1234abcd231',
    merchant: 'Hamleys',
    date: '15 May 2020',
    amount: 200,
    type: 'debit',
    description: 'Charged to debit card',
    category: 'shopping'
  }
]

const Transactions: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {TRANSACTIONS.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
      </div>
      <Text weight="semibold" className={styles.viewAll}>View all card transactions</Text>
    </>
  )
}

export default Transactions;