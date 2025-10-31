'use client';

import s from './MonthDropdown.module.scss';
import {useEffect, useRef, useState} from "react";
import {StatsPeriods} from "@/features/user/types/StatsPeriods";
import {formatDropdownDate} from "@/utils/lk-utils/common-lk-utils";

type MonthDropdownProps = {
  triggerClassName?: string;
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
  monthOptions: StatsPeriods;
  leftAlign?: boolean;
  listOffset?: number;
};

const MonthDropdown = ({
                         triggerClassName,
                         leftAlign = true,
                         selectedMonth,
                         setSelectedMonth,
                         monthOptions,
                         listOffset = 40
                       }: MonthDropdownProps) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  // Закрытие при клике вне дропдауна
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className={s.dropdownWrapper} ref={dropdownRef}>
      <div className={`${s.selectTrigger} ${triggerClassName || ''}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <span className={s.monthName}>{formatDropdownDate(monthOptions[selectedMonth].name)}</span>
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L7.5 6.5L14 1.5" strokeWidth="2"/>
        </svg>
      </div>

      {dropdownOpen && (
        <div
          style={{left: leftAlign ? 0 : 'unset', right: leftAlign ? 'unset' : 0, top: listOffset}}
          className={`${s.dropdownListWrapper} ${
            leftAlign ? s.leftAlign : s.rightAlign
          }`}
        >
          <ul className={s.dropdownList}>
            {monthOptions.map((option, i) => (
              <li
                className={s.dropdownItem}
                key={formatDropdownDate(option.name)}
                onClick={() => {
                  setSelectedMonth(i);
                  setDropdownOpen(false);
                }}
              >
                {formatDropdownDate(option.name)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MonthDropdown;
