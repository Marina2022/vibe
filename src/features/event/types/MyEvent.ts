export type MyEvent = {
  id: string;
  date: string;        // ISO-дата, например "2026-06-01"
  date_text: string;   // человекочитаемая дата, например "июнь 2026"
  header: string;      // заголовок события
  location: string;    // место проведения
  content: string;     // HTML-контент
  badge: string;       // подпись/бейдж
  public: number;      // 1 или 0
};