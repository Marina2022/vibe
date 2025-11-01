'use client'

import s from './Achievements.module.scss';
import MonthDropdown from "@/components-ui/MonthDropdown/MonthDropdown";
import {useEffect, useState} from "react";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";
import {StatsPeriods} from "@/features/user/types/StatsPeriods";
import {getUserStatByPeriod} from "@/features/user/actions/getUserStatByPeriod";
import {User} from "@/features/user/types/User";
import {getStatByStatId} from "@/features/user/actions/getStatByStatId";
import {StatByStatId} from "@/features/user/types/StatByStatId";
import {abbrQualList} from "@/features/user/consts";
import {formatPeopleCount} from "@/utils/lk-utils/common-lk-utils";

type Props = {
  periods: StatsPeriods;
  user: User;
  statsByStatId: StatByStatId;
  statsByStatIdPrevValue: StatByStatId | null;
}

const Achievements = ({statsByStatIdPrevValue, statsByStatId, periods, user}: Props) => {

    const [selectedMonth, setSelectedMonth] = useState(0);
    const [statsByStatIdCurrent, setStatsByStatIdCurrent] = useState(statsByStatId);
    const [statsByStatIdPreviousCurrent, setStatsByStatIdPreviousCurrent] = useState<StatByStatId | null>(statsByStatIdPrevValue);


    useEffect(() => {

      const getCurrentPeriodData = async () => {

        const data = await getUserStatByPeriod(periods[selectedMonth].id, user.id)
        const values = Object.values(data);
        const periodData = values[0] as PeriodStatByUser;
        const statsByStatId = await getStatByStatId(periodData?.id)
        setStatsByStatIdCurrent(statsByStatId)
      }

      const getPreviousPeriodData = async () => {

        // если предыдущего периода нет
        if (selectedMonth + 1 >= periods.length) {
          setStatsByStatIdPreviousCurrent(null)
        }

        const data = await getUserStatByPeriod(periods[selectedMonth + 1].id, user.id)

        const values = Object.values(data);
        const periodData = values[0] as PeriodStatByUser;

        let statsByStatId
        if (periodData) {
          statsByStatId = await getStatByStatId(periodData.id)
          setStatsByStatIdPreviousCurrent(statsByStatId)
        }

      }

      getCurrentPeriodData()
      getPreviousPeriodData()
    }, [selectedMonth, user.id, periods]);

    //Квалификация периода:
    let qualDynamic = ''
    if (statsByStatIdPreviousCurrent && statsByStatIdCurrent) {
      if (statsByStatIdCurrent.qual > statsByStatIdPreviousCurrent.qual) {
        qualDynamic = 'Рост'
      } else if (statsByStatIdCurrent.qual < statsByStatIdPreviousCurrent.qual) {
        qualDynamic = 'Падение'
      }
    }

    // Личный доход за месяц:
    const personalIncome = statsByStatIdCurrent.premium + statsByStatIdCurrent.premium_gift
    let personalIncomeBadge = ''
    if (statsByStatIdPreviousCurrent && statsByStatIdCurrent) {
      const personalIncomePrev = statsByStatIdPreviousCurrent.premium + statsByStatIdPreviousCurrent.premium_gift

      if (personalIncome > personalIncomePrev) {
        personalIncomeBadge = `+${Math.round((personalIncome - personalIncomePrev) / personalIncomePrev * 100)}%`
      }
      if (personalIncome < personalIncomePrev) {
        personalIncomeBadge = `-${Math.round((personalIncomePrev - personalIncome) / personalIncomePrev * 100)}%`
      }
    }

    // Количество партнеров в структуре total_count_partner
    let totalCountPartnerBadge = ''
    if (statsByStatIdPreviousCurrent && statsByStatIdCurrent) {
      const totalCountPartner = statsByStatIdCurrent.total_count_partner
      const totalCountPartnerPrev = statsByStatIdPreviousCurrent.total_count_partner

      if (totalCountPartner > totalCountPartnerPrev) {
        totalCountPartnerBadge = `+${formatPeopleCount(totalCountPartner - totalCountPartnerPrev)} `
      }
      if (totalCountPartner < totalCountPartnerPrev) {
        totalCountPartnerBadge = `-${formatPeopleCount(totalCountPartnerPrev - totalCountPartner)} человека`
      }
    }

    // Доход команды за месяц - income_structure
    let incomeStructureByPeriodBadge = ''
    const incomeStructureByPeriod = statsByStatIdCurrent.income_structure_period

    if (statsByStatIdPreviousCurrent && statsByStatIdCurrent) {
      const incomeStructureByPeriodPrev = statsByStatIdPreviousCurrent.income_structure_period
      if (incomeStructureByPeriod > incomeStructureByPeriodPrev) {
        incomeStructureByPeriodBadge = `+${Math.round((incomeStructureByPeriod - incomeStructureByPeriodPrev) / incomeStructureByPeriodPrev * 100)}%`
      }
      if (incomeStructureByPeriod < incomeStructureByPeriodPrev) {
        incomeStructureByPeriodBadge = `-${Math.round((incomeStructureByPeriodPrev - incomeStructureByPeriod) / incomeStructureByPeriodPrev * 100)}%`
      }
    }

    // Кол-во активированныех партнеров за месяц - new_partner
    let newPartnerBadge = ''
    const newPartner = statsByStatIdCurrent.new_partner
    if (statsByStatIdPreviousCurrent) {

      const newPartnerPrev = statsByStatIdPreviousCurrent.new_partner

      if (newPartner > newPartnerPrev) {
        newPartnerBadge = `+${formatPeopleCount(newPartner - newPartnerPrev)} `
      }
      if (newPartner < newPartnerPrev) {
        newPartnerBadge = `-${formatPeopleCount(newPartnerPrev - newPartner)}`
      }
    }

    const achivements = {
      personal: [
        {
          title: statsByStatIdCurrent.qual_name ? abbrQualList[statsByStatIdCurrent.qual_name] : '-' ,
          badge: qualDynamic ,
          description: 'Квалификация<br />периода',
        },
        {
          title: `${ personalIncome  ? Math.round(personalIncome).toLocaleString('ru-RU')  : 0 } ₽` ,
          badge: personalIncomeBadge,
          description: 'Личный доход<br />за месяц'
        },
        {
          title: `${ statsByStatIdCurrent?.income_total ? Math.round(statsByStatIdCurrent?.income_total).toLocaleString('ru-RU') : 0} ₽`,
          badge: null,
          description: 'Суммарный доход<br />за всё время'
        },
      ],
      team:
        [
          {
            title: statsByStatIdCurrent?.total_count_partner ? Math.round(statsByStatIdCurrent.total_count_partner) : 0,
            badge: totalCountPartnerBadge,
            description: 'Количество партнеров<br />в структуре'
          },
          {
            title: `${ incomeStructureByPeriod ? Math.round(incomeStructureByPeriod).toLocaleString('ru-RU') : 0} ₽`,
            badge: incomeStructureByPeriodBadge,
            description: 'Доход команды<br />за месяц'
          },
          {
            title: `${ statsByStatIdCurrent?.income_structure ? Math.round(statsByStatIdCurrent.income_structure).toLocaleString('ru-RU') : 0} ₽`,
            badge: null,
            description: 'Доход команды<br />за всё время'
          },
        ],
      leadership:
        [
          {
            title: newPartner ? newPartner : 0,
            badge: null,
            description: 'Количество активированных<br />партнеров за месяц'
          },
          {
            title: `${  statsByStatIdCurrent?.percent_diff_go ?  statsByStatIdCurrent?.percent_diff_go : '0%'}`,
            badge: null,
            description: 'Процент прироста<br />товарооборота'
          },
          {
            title: statsByStatIdCurrent?.new_qual ? statsByStatIdCurrent?.new_qual : 0,
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
            <MonthDropdown listOffset={50} leftAlign={false} selectedMonth={selectedMonth}
                           setSelectedMonth={setSelectedMonth} monthOptions={periods} triggerClassName={s.trigger}/>
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
                <div className={s.cardDescription} dangerouslySetInnerHTML={{__html: item.description}}/>
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
                <div className={s.cardDescription} dangerouslySetInnerHTML={{__html: item.description}}/>
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
                <div className={s.cardDescription} dangerouslySetInnerHTML={{__html: item.description}}/>
              </div>
            })
          }
        </div>
      </div>
    );
  }
;

export default Achievements;