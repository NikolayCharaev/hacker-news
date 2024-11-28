import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyGetStoryDetailsQuery } from '../../../../libs/model/news/api/news.api';
import { Container } from '@mui/material';
import { Preloader } from '../../../../shared/ui/preloader';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>(); // Получаем id из URL

  const [fetchStoryDetails, { data, isLoading, error }] = useLazyGetStoryDetailsQuery();

  useEffect(() => {
    if (id) {
      fetchStoryDetails(id); // Запрашиваем детали новости, если id существует
    }
  }, [id, fetchStoryDetails]);


  return (
    <Container maxWidth="xl">
      {isLoading && <Preloader />}

      {isLoading ? 'Loading...' : 'News Detail'}
    </Container>
  );
};

export default NewsDetail;
