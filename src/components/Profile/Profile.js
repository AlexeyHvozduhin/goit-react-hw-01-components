import { Profiles } from './Profile.styled';

import { Description } from './Description/Description';
import { PersonStatistics } from './PersonalStatistics/PersonStatistics';
import user from './user.json';

export const Profile = () => {
  return (
    <Profiles>
      <Description url={user.avatar} userInfo={user} />
      <PersonStatistics stats={user.stats} />
    </Profiles>
  );
};
