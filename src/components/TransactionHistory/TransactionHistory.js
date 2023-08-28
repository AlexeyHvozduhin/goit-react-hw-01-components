import {
  TableBody,
  TableHead,
  TransactionTable,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(element => {
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
