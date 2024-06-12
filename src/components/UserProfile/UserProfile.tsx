import clsx from 'clsx';

import { UserProfileIcon } from '../../assets';

import s from './UserProfile.module.css';

interface UserProfileProps {
  className?: string;
}

const UserProfile = ({ className }: UserProfileProps) => {
  return (
    <button className={clsx(s.userProfileButton, className)}>
      <div className={s.avatarContainer}>
        <UserProfileIcon width={24} height={24} />
      </div>
      <p>Ilona</p>
    </button>
  );
};

export default UserProfile;
