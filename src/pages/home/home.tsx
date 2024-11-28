import { Box, Stack, Typography, Button, CircularProgress, useTheme } from '@mui/material';
import { Container } from '../../shared/ui/container';
import { useState } from 'react';
import { Preloader } from '../../shared/ui/preloader';
import { NewsTable } from '../news/ui';
import { useGetFormattedTopStoriesQuery } from '../../shared/model/news/api/news.api';
import { toast } from 'react-toastify';
import { columns } from '../news/constants';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { CatLoading } from './ui/preloader';


const Home = () => {
  const theme = useTheme()
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
    <Container>
      {isLoading && <Preloader />}
      <Box marginTop={13}>
        {!isLoading ? (
          <Stack spacing={4}>
            <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography color={theme.palette.custom.white} variant="h6" >Список новостей</Typography>
              <Button
                sx={{ backgroundColor: (theme) => theme.palette.secondary.main, color: '#FFF' }}
                onClick={handleRefetch}>
                {isRefetching ? (
                  <CircularProgress color="inherit" size={'26px'} />
                ) : (
                  <AutorenewIcon/>
                )}
              </Button>
            </Stack>
            <NewsTable columns={columns} news={stories || []} />
          </Stack>
        ) : <CatLoading/>}
      </Box>
      </Container>
  );
};

export default Home;
