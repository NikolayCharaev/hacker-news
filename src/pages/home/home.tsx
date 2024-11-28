import { Container, Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useGetTopStoriesQuery } from '../../libs/model/news/api/news.api';
import { useLatestStories } from '../news/hooks';
import { Preloader } from '../../shared/ui/preloader';
import { NewsTable } from '../news/ui';
// import NewsTable from '../news/ui/news-table/news-table';
const Home = () => {
  //   const { data, isLoading, error } = useGetTopStoriesQuery();

  //   console.log(data);
  const { stories, loading } = useLatestStories();

  console.log(loading, stories);
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
      {/* <Box marginTop={20}>
        <Button
          sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}
          variant="contained">
          Hello world
        </Button>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt culpa animi a commodi maxime,
        exercitationem, quam aut temporibus architecto nihil molestias iste. Sed ea possimus
        voluptatibus aliquid, modi iusto tempora. тут будет таблица
      </Box> */}

      <Box marginTop={13}>
        {!loading && (
          <Stack spacing={4}>
            <Typography variant="h6">Список новостей</Typography>
            <NewsTable columns={columns} news={stories} />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Home;
