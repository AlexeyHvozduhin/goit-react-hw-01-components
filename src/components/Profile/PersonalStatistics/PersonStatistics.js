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
        <Label className="label">Followers</Label>
        <Quantity className="quantity">{followers}</Quantity>
      </ElementList>
      <ElementList>
        <Label className="label">Views</Label>
        <Quantity className="quantity">{views}</Quantity>
      </ElementList>
      <ElementList>
        <Label className="label">Likes</Label>
        <Quantity className="quantity"> {likes} </Quantity>
      </ElementList>
    </StatsList>
  );
};
