import { MouseEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../../assets';

import s from './SortByDropDown.module.css';

interface SortByDropDownProps {
  className?: string;
  optionsList: string[];
  onChange: (selectedItem: string) => void;
  defaultOption?: number;
}

const SortByDropDown = ({
  className,
  optionsList,
  onChange,
  defaultOption
}: SortByDropDownProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(optionsList[defaultOption || 0]);

  const popupRef = useRef<HTMLDivElement>(null);

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

  const handleItemSelect = (event: MouseEvent<HTMLUListElement>) => {
    setIsOpened(false);

    const target = event.target as Node;
    const selectedItemValue = target.textContent;
    setSelectedItem(selectedItemValue!);

    onChange(selectedItemValue!);
  };

  return (
    <div
      className={clsx(className, s.dropDown, { [s.dropDownOpened]: isOpened })}
      ref={popupRef}
    >
      <button
        className={s.toggleButton}
        type="button"
        onClick={() => setIsOpened(!isOpened)}
      >
        {selectedItem}
        <ChevronIcon width={20} height={20} />
      </button>
      <ul
        className={clsx(s.optionsList, { 'visually-hidden': !isOpened })}
        onClick={handleItemSelect}
      >
        {optionsList.map((option) => (
          <li
            key={option}
            className={clsx(s.optionsListItem, {
              [s.selectedItem]: selectedItem === option
            })}
          >
            <button
              className={s.optionButton}
              type="button"
              tabIndex={!isOpened ? -1 : undefined}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortByDropDown;
