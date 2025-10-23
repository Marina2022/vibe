'use client'

import { useState, useEffect, useRef } from "react";
import s from './BurgerMenu.module.scss';
import Badge from "@/components-ui/Badge/Badge";
import Separator from "@/components-ui/Separator/Separator";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [ratingsOpen, setRatingsOpen] = useState(false);
  const handleRatingClick = () => {
    setRatingsOpen(prev => !prev)
  }

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Закрытие по клику вне меню
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={s.burgerWrapper} ref={menuRef}>
      <button className={s.burgerButton} onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? (
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9998 1.51471L1.02919 18.4853" stroke="#252526" strokeWidth="2" />
            <path d="M17.9988 18.4853L1.02822 1.5147" stroke="#252526" strokeWidth="2" />
          </svg>
        ) : (
          <svg className={s.menuIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4H0V6H24V4Z" fill="#252526" />
            <path d="M24.0001 9H8.00012V11H24.0001V9Z" fill="#252526" />
            <path d="M24.0001 19H8.00012V21H24.0001V19Z" fill="#252526" />
            <path d="M24 14H0V16H24V14Z" fill="#252526" />
          </svg>
        )}
      </button>

      {isOpen && (
        <ul className={s.burgerMenu}>
          <li className={s.menuItem}>
            <div className={s.innerItem + ' ' + s.noHover}>
              Виталий Осотов
              <Badge height={20}>ID 1</Badge>
            </div>
          </li>

          <Separator className={s.topSeparator}></Separator>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/structure">
              <div>
                Структура
                <span className={s.greyText}>Downline</span>
              </div>
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/income">
              <div>
                Доход
                <span className={s.greyText}>Statement</span>
              </div>
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/orders">
              Заказы
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/instruments">
              Инструменты
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/finances">
              Финансы
            </Link>
          </li>

          <li className={s.menuItem} onClick={handleRatingClick} style={{cursor: 'pointer'}}>
            <button className={s.innerItem}>
              Рейтинги
              <svg className={ratingsOpen ? s.upsidedown : ''} width="17" height="10" viewBox="0 0 17 10" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M16 1.5L8.5 8.5L1 1.5" stroke="#252526" strokeWidth="2"/>
              </svg>
            </button>
          </li>
          <div className={`${s.expandable} ${ratingsOpen ? s.show : s.hide}`}>
            <li className={s.menuItem}>
              <Link className={s.innerItem} href="/dashboard/qualifications-rating">
                Квалификаций
              </Link>
            </li>

            <li className={s.menuItem}>
              <Link className={s.innerItem} href="/dashboard/recruiter-rating">
                Рекрутеров
              </Link>
            </li>
          </div>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/support">
              Служба поддержки
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.innerItem} href="/dashboard/settings">
              Настройки
            </Link>
          </li>

          <li className={s.menuItem} onClick={() => alert('выход')}>
            <button className={s.innerItem}>
              Выход
            </button>
          </li>

          <Separator className={s.topSeparator}></Separator>

          <li className={s.menuItem}>
            <Link className={s.innerItem + ' ' + s.regularWeight} href="/">
              Главная
            </Link>
            <Link className={s.innerItem + ' ' + s.regularWeight} href="/">
              Магазин
            </Link>
            <Link className={s.innerItem + ' ' + s.regularWeight} href="/">
              Корзина
            </Link>
            <Link className={s.innerItem + ' ' + s.regularWeight} href="/">
              Контакты
            </Link>
          </li>

        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
