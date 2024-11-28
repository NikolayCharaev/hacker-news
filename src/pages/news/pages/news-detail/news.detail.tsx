import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyGetStoryDetailsQuery } from '../../../../shared/model/news/api/news.api';
import { Container } from '@mui/material';
import { Preloader } from '../../../../shared/ui/preloader';

// Используем Record<string, string | undefined> для индексации параметров
const NewsDetail = () => {
  const { id } = useParams<Record<string, string | undefined>>(); // Получаем id из URL

  // Типизируем результат useLazyGetStoryDetailsQuery
  const [fetchStoryDetails, { isLoading, data }] = useLazyGetStoryDetailsQuery();

  useEffect(() => {
    if (id) {
      fetchStoryDetails(+id); // Запрашиваем детали новости, если id существует
    }
  }, [id, fetchStoryDetails]);


  console.log(data)
  return (
    <Container maxWidth="xl">
      {isLoading && <Preloader />}

      {isLoading ? 'Loading...' : 'News Detail'}
    </Container>
  );
};

export default NewsDetail;
