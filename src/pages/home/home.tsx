import { Container, Box, Stack, Typography, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { Preloader } from '../../shared/ui/preloader';
import { NewsTable } from '../news/ui';
import { useGetFormattedTopStoriesQuery } from '../../shared/model/news/api/news.api';
import { toast } from 'react-toastify';
import { columns } from '../news/constants';

const Home = () => {
  const notify = () => toast('Список обновлен');
  const {
    data: stories,
    isLoading,
    refetch,
  } = useGetFormattedTopStoriesQuery(undefined, {
    pollingInterval: 60000, // Обновление контента каждую минуту
    refetchOnFocus: true, // Обновление при возвращении в фокус
    refetchOnReconnect: true, // Обновление при переподключении
  });

  const [isRefetching, setIsRefetching] = useState(false);

  const handleRefetch = async () => {
    setIsRefetching(true);

    await refetch(); // Ждем завершения refetch
    notify();
    setIsRefetching(false);
  };

  return (
    <Container maxWidth="xl">
      {isLoading && <Preloader />}
      <Box marginTop={13}>
        {!isLoading && (
          <Stack spacing={4}>
            <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography variant="h6">Список новостей</Typography>
              <Button
                sx={{ backgroundColor: (theme) => theme.palette.secondary.main, color: '#FFF' }}
                onClick={handleRefetch}>
                {isRefetching ? (
                  <CircularProgress color="inherit" size={'26px'} />
                ) : (
                  'Обновить список'
                )}
              </Button>
            </Stack>
            <NewsTable columns={columns} news={stories || []} />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Home;
