// export const getLastMonths = (count = 6) => {
//   const months = [];
//   const now = new Date();
//
//   for (let i = 0; i < count; i++) {
//     const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
//
//     // Форматируем месяц и год, убираем "г."
//     let label = date
//       .toLocaleString("ru-RU", { month: "long", year: "numeric" })
//       .replace(" г.", "");
//
//     // Делаем первую букву заглавной
//     label = label[0].toUpperCase() + label.slice(1);
//
//     // Значение в формате YYYY-MM
//     const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
//     months.push({ label, value });
//   }
//
//   return months; // по возрастанию
// };



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