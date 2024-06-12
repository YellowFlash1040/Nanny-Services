import clsx from 'clsx';

import { LogButton, UserProfile } from '../../components';

import s from './UserPanel.module.css';

interface UserPanelProps {
  className?: string;
}

const UserPanel = ({ className }: UserPanelProps) => {
  return (
    <div className={clsx(className, s.container)}>
      <UserProfile className={s.userProfile} />
      <LogButton title="out" />
    </div>
  );
};

export default UserPanel;
