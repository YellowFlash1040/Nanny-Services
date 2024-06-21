import clsx from 'clsx';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import { UserProfileIcon } from '../../assets';
import { Theme } from '../../types';
import { changeAppTheme } from '../../helpers';

import s from './UserProfile.module.css';

interface UserProfileProps {
  className?: string;
}

const UserProfile = ({ className }: UserProfileProps) => {
  const optionsList = useRef(['Red', 'Blue', 'Green']);
  const popupRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    JSON.parse(localStorage.getItem('theme') || '"Red"')
  );

  const handleItemSelect = (event: MouseEvent) => {
    const newTheme = (event.target as HTMLButtonElement).textContent as Theme;
    localStorage.setItem('theme', JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    changeAppTheme(theme);
  }, [theme]);

  return (
    <div className={s.dropDown} ref={popupRef}>
      <button
        className={clsx(s.userProfileButton, className)}
        type="button"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className={s.avatarContainer}>
          <UserProfileIcon width={24} height={24} />
        </div>
        <p>Ilona</p>
      </button>
      <ul
        className={clsx(s.optionsList, { [s.optionsListOpened]: isOpened })}
        onClick={handleItemSelect}
      >
        {optionsList.current.map((option) => (
          <li key={option}>
            <button
              className={clsx(s.optionButton, { [s.selectedItem]: theme === option })}
              type="button"
              tabIndex={!isOpened ? -1 : undefined}
              onClick={() => setIsOpened(false)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
