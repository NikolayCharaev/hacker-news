import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyGetStoryDetailsQuery } from '../../../../shared/model/news/api/news.api';
import { Box, Container, Typography } from '@mui/material';
import { Preloader } from '../../../../shared/ui/preloader';
import { useTheme } from '@mui/material/styles'; // Используем тему Material-UI

// Используем Record<string, string | undefined> для индексации параметров
const NewsDetail = () => {
  const { id } = useParams<Record<string, string | undefined>>(); // Получаем id из URL
  const theme = useTheme(); // Material-UI тема

  const [fetchStoryDetails, { isLoading, data }] = useLazyGetStoryDetailsQuery();

  useEffect(() => {
    if (id) {
      fetchStoryDetails(+id); // Запрашиваем детали новости, если id существует
    }
  }, [id, fetchStoryDetails]);

  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <Preloader />
      ) : (
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main, // Теперь palette доступна
          }}
          marginTop={10}
        >
          <Typography color="white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default NewsDetail;
