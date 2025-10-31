'use client'

import s from './Achievements.module.scss';
import MonthDropdown from "@/components-ui/MonthDropdown/MonthDropdown";
import {useState} from "react";
import {StatByPeriodId} from "@/features/user/types/StatByPeriodId";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";
import {StatsPeriods} from "@/features/user/types/StatsPeriods";

type Props = {
  initialCurrentPeriod: PeriodStatByUser;
  periods: StatsPeriods;
}

const Achievements = ({initialCurrentPeriod, periods}: Props) => {

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState(initialCurrentPeriod);

    const achivements = {
      personal: [
        {
          title: 'А1',
          badge: 'Рост',
          description: 'Квалификация<br />периода',
        },
        {
          title: '84 124 ₽',
          badge: '+32%',
          description: 'Личный доход<br />за месяц'
        },
        {
          title: '450 786 ₽',
          badge: null,
          description: 'Суммарный доход<br />за всё время'
        },
      ],
      team:
        [
          {
            title: '234',
            badge: '+23 человека',
            description: 'Количество партнеров<br />в структуре'
          },
          {
            title: '650 990 ₽',
            badge: '+32%',
            description: 'Доход команды<br />за месяц'
          },
          {
            title: '1 250 990 ₽',
            badge: null,
            description: 'Доход команды<br />за всё время'
          },
        ],
      leadership:
        [
          {
            title: '10',
            badge: null,
            description: 'Количество активированных<br />партнеров за месяц'
          },
          {
            title: '+13%',
            badge: null,
            description: 'Процент прироста<br />товарооборота'
          },
          {
            title: '15',
            badge: null,
            description: 'Новые квалификации<br />в команде за месяц'
          }
        ]
    }

    return (
      <div className={s.achievements}>
        <div className={s.topBlock}>
          <h2 className={s.title}>Достижения</h2>
          <div>
            <MonthDropdown listOffset={50} leftAlign={false} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} monthOptions={periods} triggerClassName={s.trigger} />
          </div>
        </div>

        <h3 className={s.subtitle}>Личные</h3>
        <div className={s.row}>
          {
            achivements.personal.map((item, i) => {
              return <div className={` ${s.card} ${s.cardPersonal}`} key={i}>
                <div className={s.cardTop}>
                  <div className={s.cardTitle}>{item.title}</div>
                  {item.badge && <div className={`${s.badge} ${s.personalBadge}`}>{item.badge}</div>}
                </div>
                <div className={s.cardDescription} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            })
          }
        </div>

        <h3 className={s.subtitle}>Командные</h3>
        <div className={s.row}>
          {
            achivements.team.map((item, i) => {

              return <div className={` ${s.card} ${s.cardTeam}`} key={i}>
                <div className={s.cardTop}>
                  <div className={s.cardTitle}>{item.title}</div>
                  {item.badge && <div className={`${s.badge} ${s.teamBadge}`}>{item.badge}</div>}
                </div>
                <div className={s.cardDescription} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            })
          }
        </div>

        <h3 className={s.subtitle}>Лидерские</h3>
        <div className={s.row}>
          {
            achivements.leadership.map((item, i) => {

              return <div className={` ${s.card} ${s.cardLeader}`} key={i}>
                <div className={s.cardTop}>
                  <div className={s.cardTitle}>{item.title}</div>
                  {item.badge && <div className={`${s.badge} ${s.leaderBadge}`}>{item.badge}</div>}
                </div>
                <div className={s.cardDescription} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            })
          }
        </div>
      </div>
    );
  }
;

export default Achievements;