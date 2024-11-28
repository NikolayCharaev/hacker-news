import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyGetStoryDetailsQuery } from '../../../../shared/model/news/api/news.api';
import { Box } from '@mui/material';
import { Preloader } from '../../../../shared/ui/preloader';
import { useTheme } from '@mui/material/styles';
import { Container } from '../../../../shared/ui/container';
import NewsDetailTop from './news.detail.top';

const NewsDetail = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const theme = useTheme();

  const [fetchStoryDetails, { isLoading, data }] = useLazyGetStoryDetailsQuery();

  useEffect(() => {
    if (id) {
      fetchStoryDetails(+id);
    }
  }, [id, fetchStoryDetails]);

  console.log(data);

  return (
    <Container>
      {isLoading ? (
        <Preloader />
      ) : (
        <Box
          padding={2}
          borderRadius={2}
          sx={{
            backgroundColor: theme.palette.custom.white,
            color: theme.palette.custom.black, 
          }}
          marginTop={10}>
          <NewsDetailTop data={data} />
        </Box>
      )}
    </Container>
  );
};

export default NewsDetail;
