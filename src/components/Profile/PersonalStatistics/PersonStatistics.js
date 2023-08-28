import {
  StatsList,
  ElementList,
  Label,
  Quantity,
} from './PersonalStatistics.styled';

export const PersonStatistics = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <ElementList>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </ElementList>
      <ElementList>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </ElementList>
      <ElementList>
        <Label>Likes</Label>
        <Quantity> {likes} </Quantity>
      </ElementList>
    </StatsList>
  );
};
