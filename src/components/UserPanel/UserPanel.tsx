import clsx from 'clsx';

import { LogButton, UserProfile } from '../../components';
import { useAppContext } from '../../hooks';

import s from './UserPanel.module.css';

interface UserPanelProps {
  className?: string;
}

const UserPanel = ({ className }: UserPanelProps) => {
  const { logOut } = useAppContext();

  const handleOnClick = async () => {
    await logOut();
  };

  return (
    <div className={clsx(className, s.container)}>
      <UserProfile className={s.userProfile} />
      <LogButton title="out" onClick={handleOnClick} />
    </div>
  );
};

export default UserPanel;
