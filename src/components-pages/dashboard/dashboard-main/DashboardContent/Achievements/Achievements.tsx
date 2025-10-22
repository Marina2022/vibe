import s from './Achievements.module.scss';

const Achievements = () => {

    const achivements = {
      personal: [
        {
          title: 'А1',
          badge: 'up',
          description: 'Квалификация периода'
        },
        {
          title: 'А1',
          badge: '+32%',
          description: 'Личный доход за месяц'
        },
        {
          title: '450 786 ₽',
          badge: null,
          description: 'Суммарный доход за всё время'
        },
      ],
      team:
        [
          {
            title: '234',
            badge: '+23 человека',
            description: 'Количество партнеров в структуре'
          },
          {
            title: '650 990 ₽',
            badge: '+32%',
            description: 'Доход команды за месяц'
          },
          {
            title: '1 250 990 ₽',
            badge: null,
            description: 'Доход команды за всё время'
          },
        ],
      leadership:
        [
          {
            title: '15',
            badge: null,
            description: 'Новые квалификации в команде за месяц'
          },
          {
            title: '+13%',
            badge: null,
            description: 'Процент прироста товарооборота'
          },
          {
            title: '10',
            badge: null,
            description: 'Количество новых «Партнеров Плюс»'
          }
        ]
    }

    return (
      <div className={s.achievements}>
        <div className={s.topBlock}>
          <h2 className={s.title}>Достижения</h2>
          <div>Сентябрь</div>
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
                <div className={s.cardDescription}>{item.description}</div>
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
                <div className={s.cardDescription}>{item.description}</div>
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
                <div className={s.cardDescription}>{item.description}</div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
;

export default Achievements;