import { Statistic } from './Statistics.styled';
import { Title } from './Title/Title.styled';
import { List } from './List/List';
import data from './data.json';

export const Statistics = () => {
  return (
    <Statistic>
      <Title>Upload stats</Title>
      <List data={data} />
    </Statistic>
  );
};
