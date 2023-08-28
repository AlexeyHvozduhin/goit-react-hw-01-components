import { List, ListElement, Name, Online } from './FriendList.styled';
import arrayFriend from './friends.json';

const onlineFunction = result => {
  if (result) return 'green';
  else return 'red';
};

export const FriendList = () => {
  return (
    <List>
      {arrayFriend.map(element => {
        return (
          <ListElement className="item" key={element.id}>
            <Online
              style={{ backgroundColor: onlineFunction(element.isOnline) }}
            ></Online>
            <img
              className="avatar"
              src={element.avatar}
              alt="User avatar"
              width="48"
            />
            <Name className="name">{element.name}</Name>
          </ListElement>
        );
      })}
    </List>
  );
};
