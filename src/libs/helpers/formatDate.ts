export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Умножаем на 1000, чтобы получить миллисекунды
    const day = String(date.getDate()).padStart(2, '0'); // Форматируем день
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = String(date.getFullYear()).slice(2); // Берем последние две цифры года
    return `${day}.${month}.${year}`;
  };