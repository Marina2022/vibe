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
        <div className={s.innerItem}>
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


      <Separator className={s.topSeparator}></Separator>

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
    </ul>
  );
};

export default DashboardSidebar;