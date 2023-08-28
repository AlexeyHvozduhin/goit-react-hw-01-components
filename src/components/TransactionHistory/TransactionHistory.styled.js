import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 900px;
  margin-bottom: 40px;
`;
export const TableHead = styled.thead`
  background-color: #8bebff;
  color: white;
  font-size: 20px;
  height: 70px;
`;
export const TableBody = styled.tbody`
  color: gray;
  background-color: white;
  font-size: 20px;
  text-align: center;
`;

export const TableRow = styled.tr`
  height: 40px;
  &:nth-child(even) {
    background-color: #e6e3ef;
  }
`;
