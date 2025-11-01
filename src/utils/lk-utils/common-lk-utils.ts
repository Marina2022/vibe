export function formatPeopleCount(num: number) {
  const lastTwo = num % 100;
  const last = num % 10;

  if (lastTwo >= 11 && lastTwo <= 19) return `${num} человек`;
  if (last === 1) return `${num} человек`;
  if (last >= 2 && last <= 4) return `${num} человека`;
  return `${num} человек`;
}



export function formatDropdownDate(input:string) {
  // Разделяем строку на год и месяц
  const yearPart = input.slice(0, 4); // "2025"
  const monthPart = input.slice(4).trim(); // "09 Сентябрь" → "Сентябрь"

  // Получаем год в формате 2025
  const year = yearPart;

  // Получаем месяц, убираем ведущий ноль
  const monthName = monthPart.replace(/^\d+\s*/, '');

  return `${monthName} ${year}`;
}