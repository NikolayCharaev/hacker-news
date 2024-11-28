export interface Story {
    id: number;
    title: string;
    by: string; // Автор
    score: number; // Рейтинг
    time: number; // UNIX-время
    descendants: number; // Количество комментариев
  }
  
  // Типизация отформатированных данных для использования в компоненте
  export interface FormattedStory {
    title: string;
    rating: number;
    author: string;
    date: string; // Читабельная дата
    commentsCount: number;
  }