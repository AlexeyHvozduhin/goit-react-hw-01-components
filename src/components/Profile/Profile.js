import { Profiles } from './Profile.styled';

import { Description } from './Description/Description';
import { PersonStatistics } from './PersonalStatistics/PersonStatistics';

export const Profile = ({ username, tag, avatar, location, stats }) => {
  return (
    <Profiles>
      <Description
        url={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <PersonStatistics stats={stats} />
    </Profiles>
  );
};
