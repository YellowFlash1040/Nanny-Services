import { MouseEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../../assets';

import s from './SortByDropDown.module.css';

interface SortByDropDownProps {
  className?: string;
}

const SortByDropDown = ({ className }: SortByDropDownProps) => {
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
    const target = event.target as HTMLLIElement;
    if (target.tagName === 'LI') {
      setIsOpened(false);

      const selectedItem = target.textContent;
      setSelectedItem(selectedItem!);
    }
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
        <li value={'A to Z'}>A to Z</li>
        <li>Z to A</li>
        <li>Less than 10$</li>
        <li>Greater that 10$</li>
        <li>Popular</li>
        <li>Not popular</li>
        <li>Show all</li>
      </ul>
    </div>
  );
};

export default SortByDropDown;
