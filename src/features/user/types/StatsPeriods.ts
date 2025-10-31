
export type Period = {
  date_open: string;      // timestamp в строковом виде
  name: string;           // например "202509 Сентябрь"
  date_close: string;     // timestamp в строковом виде
  id: string;             // UUID
  state: 'open' | 'close';
  period_prev?: string;   // может отсутствовать у самого первого периода
};

export type StatsPeriods = Period[];