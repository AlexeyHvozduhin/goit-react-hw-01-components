import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(element => {
        return (
          <FriendListItem
            key={element.id}
            avatar={element.avatar}
            name={element.name}
            isOnline={element.isOnline}
          />
        );
      })}
    </List>
  );
};
