import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PeopleIcon from '@mui/icons-material/People';
import { Button, Stack, Typography, useTheme } from '@mui/material';

import { formatDate } from '../../../../libs/helpers';

interface NewsDetailTopProps {
  data?: {
    title?: string;
    by?: string;
    url?: string;
    time?: number;
    descendants?: number;
  };
}

const NewsDetailTop = ({ data }: NewsDetailTopProps) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        marginBottom={2}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Typography
          sx={{
            fontSize: {
              xs: '14px',
              sm: '16px',
              md: '17px',
              lg: '18px',
              xl: '20px',
            },
          }}
          fontWeight={'bold'}>
          {data?.title}
        </Typography>
        <Button
          title="перейти к новости"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.custom.white,
          }}
          target="_blank"
          href={data?.url || '/'}>
          <OpenInNewIcon />
        </Button>
      </Stack>

      <Stack
        marginBottom={2}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Stack gap={1} flexDirection={'column'} alignItems={'flex-start'}>
          <Typography fontWeight={'bold'} variant="body1">
            Автор: {data?.by}
          </Typography>
          <Typography>Дата: {formatDate(data?.time || 0)}</Typography>
        </Stack>

        <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
          <Typography variant="body1">{data?.descendants}</Typography>
          <PeopleIcon />
        </Stack>
      </Stack>
    </>
  );
};

export default NewsDetailTop;
