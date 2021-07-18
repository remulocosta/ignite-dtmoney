import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import * as Styles from './styles';


import { ITransaction } from './index.d';


function TransactionsTable(): JSX.Element {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => {
      setTransactions(response.data.transactions)
    });
  }, []);
  
  return (
    <Styles.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styles.Container>
  );
}


export {
 TransactionsTable
}
