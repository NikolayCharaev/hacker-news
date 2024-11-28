import { Container, Box, Stack, Typography } from '@mui/material';
import { Preloader } from '../../shared/ui/preloader';
import { NewsTable } from '../news/ui';
import { useGetFormattedTopStoriesQuery } from '../../libs/model/news/api/news.api';

const Home = () => {
  const { data: stories, isLoading: loading } = useGetFormattedTopStoriesQuery();

  const columns = [
    { name: 'Название' },
    { name: 'Рейтинг' },
    { name: 'Автор' },
    { name: 'Дата публикации' },
    { name: 'Кол-во комментариев' },
  ];

  return (
    <Container maxWidth="xl">
      {loading && <Preloader />}
      <Box marginTop={13}>
        {!loading && (
          <Stack spacing={4}>
            <Typography variant="h6">Список новостей</Typography>
            <NewsTable columns={columns} news={stories || []} />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Home;
