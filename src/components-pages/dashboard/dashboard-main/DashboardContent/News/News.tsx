import s from './News.module.scss';
import Link from "next/link";
import Badge from "@/components-ui/Badge/Badge";
import {NewsItem} from "@/features/news/types/NewsItem";
import {formatDateForNews} from "@/features/news/news-utils";

const News = ({news}:{news: NewsItem[]}) => {

  const cards = [
    {
      title: 'Новые продукты VIBE разошлись за 48 часов',
      description: 'Компания VIBE объявила о запуске новой коллекции продуктов для кожи и энергии.',
      date: '1 октября 2025',
      new: true
    },
    {
      title: 'Новые продукты VIBE разошлись за 28 часов',
      description: 'Компания VIBE объявила о запуске новой коллекции продуктов для кожи и энергии.',
      date: '20 сентября 2025',
      new: false
    },
  ]

  return (
    <div className={s.news}>
      <div className={s.topBlock}>
        <h2 className={s.title}>Новости</h2>
        <Link href='/dashboard/news' className={s.link}>Смотреть все</Link>
      </div>

      <ul className={s.cards}>
        {
          news.map((card, i) => {
            return <li key={i} className={s.card}>
              <div className={s.cardTitle}>{card.header}</div>
              <div
                dangerouslySetInnerHTML={{__html: card.announce}}
                className={s.description}
              ></div>
              <div className={s.bottomPart}>
                <div className={s.date}>{formatDateForNews(card.date)}</div>
                {card.new && <Badge className={s.badge} height={20}>New</Badge>}
              </div>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default News;