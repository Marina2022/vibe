'use client'

import s from './NextQualification.module.scss';
import {useState} from "react";
import ProgressBar from "@/components-ui/ProgressBar/ProgressBar";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";
import {nextQualList, qualInfoList} from "@/features/user/consts";
import {StatByPeriodId} from "@/features/user/types/StatByPeriodId";



type Props = {
  currentPeriod: PeriodStatByUser;
  statsByPeriod: StatByPeriodId;
}

const NextQualification = ({currentPeriod, statsByPeriod}:Props) => {

  const [isShow, setIsShow] = useState(false);

  //console.log('nextQualList[currentPeriod.qual_name]', nextQualList[currentPeriod.qual_name])

  const nextQual = qualInfoList.find(item => item.name === nextQualList[currentPeriod.qual_name]);
  if (!nextQual) throw new Error('Не найдена следующая квалификация')


  console.log('nextQual', nextQual)
  console.log('statsByPeriod', statsByPeriod)


  // todo надо потестировать на ненулевых данных

  const branch_count = statsByPeriod.branch_count
  const completeBranches = branch_count[nextQual.branch_go]

  let percent = 0
  if (completeBranches) {
    if (nextQual.branch) {
      percent = completeBranches / (nextQual.branch || 1)  * 100
    }
  }

  const kidsFromObject = Object.values(statsByPeriod.children_list)
  const kids = kidsFromObject.sort((a, b) => b.go - a.go).slice(0, 5);

  if (kids.length % 2 !== 0) kids.push(
    {
      id: '',
      login: '',
      last_name: '',
      first_name: '',
      go: 0
    })

  return (
    <div className={s.nextQualification}>
      <div className={s.titleBlock}>
        <div className={s.label}>Следующая квалификация:</div>
        <div className={s.qualification}>{nextQualList[currentPeriod.qual_name]}</div>
      </div>

      <div className={s.topProgressBars}>
        <div className={s.firstRow}>
          <div className={s.firstBar}>
            <ProgressBar title="Активных партнеров на 1-м уровне" subtitle={`${statsByPeriod.active}/${nextQual.active} партнеров`} value={statsByPeriod.active / nextQual.active * 100 }/>
          </div>

          <div className={s.secondBar}>
            <ProgressBar title="Накопительный объем, PV"  subtitle= {`${statsByPeriod.nlo}/${nextQual.nlo} PV`} value={statsByPeriod.nlo /nextQual.nlo * 100 }/>
          </div>
        </div>

        <div className={s.secondRow}>
          <ProgressBar title="Количество веток с объемом, PV" subtitle= { nextQual.branch_go ? `${nextQual.branch} х ${nextQual.branch_go} PV` : "—"}  value={percent}/>
        </div>
      </div>

      {
        <div className={`${s.bottomProgressBars} ${isShow ? s.show : s.hide}`}>
          {
             kids.map((partner, i) => {
              const isOdd = i % 2 !== 0;
              return <div className={s.bottomProgressBarsItem} key={i}>
                <div className={isOdd ? s.borderLeft : ''}>
                  {
                    partner.first_name && <ProgressBar title={`${partner.first_name} ${partner.last_name}`} subtitle={`${partner.go} / ${nextQual.branch_go} `} value={nextQual.branch_go ? partner.go / nextQual.branch_go : 0 } disabled={true}/>
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