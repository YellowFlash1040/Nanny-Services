import { MouseEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../../assets';

import s from './SortByDropDown.module.css';

interface SortByDropDownProps {
  className?: string;
}

const SortByDropDown = ({ className }: SortByDropDownProps) => {
  const optionsList = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater that 10$',
    'Popular',
    'Not popular',
    'Show all'
  ];

  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('A to Z');

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
      <ul className={s.optionsList} onClick={handleItemSelect}>
        {optionsList.map((option) => (
          <li
            key={option}
            className={clsx({ [s.selectedItem]: selectedItem === option })}
          >
            {/* <button className={s.optionButton} type="button"> */}
            {option}
            {/* </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortByDropDown;
