'use client'

import s from './NextQualification.module.scss';
import {useState} from "react";
import ProgressBar from "@/components-ui/ProgressBar/ProgressBar";

const NextQualification = () => {

  const [isShow, setIsShow] = useState(false);

  const partners = [
    {
      name: 'Анна Каверина',
      info: '500 / 500 PV',
      value: 100
    },
    {
      name: 'Ольга Рогожина',
      info: '500 / 500 PV',
      value: 50
    },
    {
      name: 'Маргарита Измайлова',
      info: '500 / 500 PV',
      value: 100
    },
    {
      name: 'Анна Лазовская',
      info: '500 / 500 PV',
      value: 50
    },

  ]

  if (partners.length % 2 !== 0) partners.push({name: '', info: '', value: 0})

  return (
    <div className={s.nextQualification}>
      <div className={s.titleBlock}>
        <div className={s.label}>Следующая квалификация:</div>
        <div className={s.qualification}>Ambassador II</div>
      </div>

      <div className={s.topProgressBars}>
        <div className={s.firstRow}>
          <div className={s.firstBar}>
            <ProgressBar title="Активных партнеров на 1-м уровне" subtitle="1/4 партнеров" value={26}/>
          </div>

          <div className={s.secondBar}>
            <ProgressBar title="Накопительный объем, PV" subtitle="180 / 250 PV" value={64}/>
          </div>
        </div>

        <div className={s.secondRow}>
          <ProgressBar title="Количества веток с объемом, PV" subtitle="4 х 500 PV" value={25}/>
        </div>
      </div>

      {
        <div className={`${s.bottomProgressBars} ${isShow ? s.show : s.hide}`}>
          {
            partners.map((partner, i) => {
              const isOdd = i % 2 !== 0;
              return <div className={s.bottomProgressBarsItem} key={i}>
                <div className={isOdd ? s.borderLeft : ''}>

                  {
                    partner.name &&
                    <ProgressBar title={partner.name} subtitle={partner.info} value={partner.value} disabled={true}/>
                  }

                </div>
              </div>
            })
          }
        </div>
      }

      <div className={s.expandButtonBlock} onClick={() => setIsShow(prev => !prev)}>
        <button>
          <svg className={isShow ? s.upsidedown : ''} width="18" height="10" viewBox="0 0 18 10" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M16.5 1L9 8L1.5 0.999999" stroke="#252526" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NextQualification;