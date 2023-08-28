import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import user from '../user.json';
import user from './props/user.json';
import data from './props/data.json';
import arrayFriend from './props/friends.json';
import items from './props/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#dbe3f3',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={arrayFriend} />

      <TransactionHistory items={items} />
    </div>
  );
};
