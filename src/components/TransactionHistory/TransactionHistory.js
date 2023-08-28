import data from './transactions.json';
import {
  TableBody,
  TableHead,
  TransactionTable,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = () => {
  return (
    <TransactionTable className="transaction-history">
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {data.map(element => {
          return (
            <TableRow key={element.id}>
              <td>{element.type}</td>
              <td>{element.amount}</td>
              <td>{element.currency}</td>
            </TableRow>
          );
        })}
      </TableBody>
    </TransactionTable>
  );
};
