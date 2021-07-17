import * as Styles from './styles';


function TransactionsTable (): JSX.Element {
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
          <tr>
            <td>Computador</td>
            <td className="deposit">R$1.000,00</td>
            <td>Venda</td>
            <td>17/02/2021</td>
          </tr>
          <tr>
            <td>Refeição</td>
            <td className="withdraw">- R$50,00</td>
            <td>Alimentação</td>
            <td>16/02/2021</td>
          </tr>
          <tr>
            <td>SSD 2.5 500GB"</td>
            <td className="withdraw">- R$450,00</td>
            <td>Manutenção</td>
            <td>16/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Styles.Container>
  );
}


export {
 TransactionsTable
}
