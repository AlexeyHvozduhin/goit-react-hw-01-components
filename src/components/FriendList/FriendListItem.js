import { ListElement, Name, Online } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListElement>
      <Online isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListElement>
  );
};
