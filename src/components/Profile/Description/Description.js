import { DescriptionDiv, Pic, Name, Tag, Location } from './Description.styled';

export const Description = ({ url, userInfo: { username, tag, location } }) => {
  // console.log(username);
  return (
    <DescriptionDiv>
      <Pic src={url} alt="User avatar" className="avatar" />
      <Name className="name">{username}</Name>
      <Tag className="tag">@{tag}</Tag>
      <Location className="location">{location}</Location>
    </DescriptionDiv>
  );
};
