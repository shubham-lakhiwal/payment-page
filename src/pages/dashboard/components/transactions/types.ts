export type TransactionType = 'debit' | 'credit' | 'refund';
export type TransactionCategory = 'shopping' | 'travel' | 'entertainment';

export type TransactionProps = {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  type: TransactionType;
  description: string;
  category: TransactionCategory
}