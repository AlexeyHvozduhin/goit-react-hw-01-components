import { Statistic } from './Statistics.styled';
import { Title } from './Title/Title.styled';
import { List } from './List/List';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <List data={stats} />
    </Statistic>
  );
};
