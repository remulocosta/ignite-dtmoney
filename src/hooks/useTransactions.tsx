import { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../services/api';


import { ITransaction } from './useTransactions.d';
import { ITransactionInput } from './useTransactions.d';
import { ITransactionsContextData } from './useTransactions.d';
import { ITransactionsProviderProps } from './useTransactions.d';


const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => {
      setTransactions(response.data.transactions)
    });
  }, []);

  async  function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}


export {
  useTransactions,
  TransactionsProvider
}
