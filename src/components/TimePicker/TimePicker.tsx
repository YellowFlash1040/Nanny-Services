import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { ClockIcon } from '../../assets';

import { timeOptions } from './timeOptions';

import s from './TimePicker.module.css';

interface TimePickerProps {
  className?: string;
  buttonClassName?: string;
  dropDownClassName?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (time: string) => void;
}

const TimePicker = ({
  className,
  buttonClassName,
  dropDownClassName,
  value,
  defaultValue = '00:00',
  onChange
}: TimePickerProps) => {
  const [internalTime, setInternalTime] = useState(defaultValue);
  const [isOpened, setIsOpened] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const time = value ?? internalTime;

  const handleOnChange = (newTime: string) => {
    if (onChange) {
      onChange(newTime);
    } else {
      setInternalTime(newTime);
    }
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

  return (
    <div className={clsx(className, s.container)} ref={popupRef}>
      <button
        className={clsx(s.button, buttonClassName)}
        type="button"
        onClick={() => setIsOpened(!isOpened)}
      >
        {time}
        <ClockIcon />
      </button>
      <div
        className={clsx(dropDownClassName, s.dropDown, { [s.dropDownOpened]: isOpened })}
      >
        <p className={s.meetingTimeLabel}>Meeting time</p>
        <ul className={s.timeOptionsList}>
          {timeOptions.map((option) => (
            <li key={option} className={s.timeOption}>
              <button
                type="button"
                tabIndex={!isOpened ? -1 : undefined}
                onClick={() => {
                  setIsOpened(false);
                  handleOnChange(option);
                }}
              >
                <span>{option.split(':')[0]}</span>:<span>{option.split(':')[1]}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimePicker;
