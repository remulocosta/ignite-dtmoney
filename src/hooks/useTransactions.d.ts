import { ReactNode } from 'react';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}


export {
  ITransaction,
  ITransactionInput,
  ITransactionsContextData,
  ITransactionsProviderProps
}
