'use client'

import s from './DashboardSidebar.module.scss';
import Badge from "@/components-ui/Badge/Badge";
import Separator from "@/components-ui/Separator/Separator";
import Link from "next/link";
import {useState} from "react";

const DashboardSidebar = () => {

  const [ratingsOpen, setRatingsOpen] = useState(false);

  const handleRatingClick = () => {
    setRatingsOpen(prev => !prev)
  }

  return (
    <ul className={s.sidebar}>
      <li className={s.menuItem}>
        Виталий Осотов
        <Badge height={20}>ID 1</Badge>
      </li>

      <Separator className={s.topSeparator}></Separator>

      <li className={s.menuItem}>
        <Link href="/dashboard/structure">
          Структура
          <span className={s.greyText}>Downline</span>
        </Link>
      </li>

      <li className={s.menuItem}>
        <Link href="/dashboard/income">
          Доход
          <span className={s.greyText}>Statement</span>
        </Link>
      </li>

      <li className={s.menuItem}>
        <Link href="/dashboard/orders">
          Заказы
        </Link>
      </li>

      <li className={s.menuItem}>
        <Link href="/dashboard/instruments">
          Инструменты
        </Link>
      </li>

      <li className={s.menuItem}>
        <Link href="/dashboard/finances">
          Финансы
        </Link>
      </li>

      <li className={s.menuItem} onClick={handleRatingClick} style={{cursor: 'pointer'}}>
        Рейтинги
        <svg className={ratingsOpen ? s.upsidedown : undefined} width="17" height="10" viewBox="0 0 17 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M1 8.5L8.5 1.5L16 8.5" stroke="black" strokeWidth="2"/>
        </svg>
      </li>

      {
        ratingsOpen && <>

          <li className={s.menuItem}>
            <Link href="/dashboard/qualifications-rating">
              Квалификаций
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link href="/dashboard/recruiter-rating">
              Рекрутеров
            </Link>
          </li>

        </>
      }

      <Separator className={s.topSeparator}></Separator>

      <li className={s.menuItem}>
        <Link href="/dashboard/settings">
          Настройки
        </Link>
      </li>

      <li className={s.menuItem} onClick={() => alert('выход')}>
        <div>
          Выход
        </div>
      </li>
    </ul>
  );
};

export default DashboardSidebar;