import { DescriptionDiv, Pic, Name, Tag, Location } from './Description.styled';

export const Description = ({ url, username, tag, location }) => {
  return (
    <DescriptionDiv>
      <Pic src={url} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionDiv>
  );
};
