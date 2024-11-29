import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { formatDate } from '../../../../libs/helpers';
import {
  useGetExpandedCommentsQuery,
  useLazyGetExpandedCommentsQuery,
} from '../../../../shared/model/news/api/news.api';
import { Preloader } from '../../../../shared/ui/preloader';
import { Comment } from '../../../../shared/model/news/types/news.types';
import { toast } from 'react-toastify';
import { Button, CircularProgress, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

interface RowProps {
  row: any; // Your data type
}

function Row({ row }: RowProps) {

  const [open, setOpen] = React.useState(false);
  const [trigger, { data, isLoading }] = useLazyGetExpandedCommentsQuery();

  const handleOpenCollapse = () => {
    if (!open && row.kids?.length > 0) {
      trigger(row.kids); // Подгружаем комментарии по идентификаторам
    }
    setOpen(!open);
  };

  return (
    <>
      <TableRow>
        {row.kids?.length > 0 ? (
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={handleOpenCollapse}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        ) : (
          <TableCell />
        )}
        <TableCell  sx={{fontWeight: 'bold'}}>{row.by}</TableCell>
        <TableCell>
          {row.deleted ? (
            'Комментарий удален'
          ) : (
            <div dangerouslySetInnerHTML={{ __html: row.text }} />
          )}
        </TableCell>
        <TableCell  sx={{fontWeight: 'bold'}}>{formatDate(row.time)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Ответы
              </Typography>
              {isLoading ? (
                <Preloader />
              ) : (
                <Table size="small" aria-label="comments">
                  <TableHead>
                    <TableRow>
                      <TableCell  sx={{fontWeight: 'bold'}}>Пользователь</TableCell>
                      <TableCell  sx={{fontWeight: 'bold'}} align="right">Комментарий</TableCell>
                      <TableCell  sx={{fontWeight: 'bold'}} align="right">Дата публикации</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((comment: Comment, index: number) => (
                      <TableRow key={index}>
                        <TableCell  sx={{fontWeight: 'bold'}}>{comment.by}</TableCell>
                        <TableCell align="right">
                          {<div dangerouslySetInnerHTML={{ __html: comment.text || '' }} />}
                        </TableCell>
                        <TableCell  sx={{fontWeight: 'bold'}} align="right">{formatDate(comment.time)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function NewsDetailComments({ comments }: { comments: number[] }) {
  const { data, isLoading, refetch } = useGetExpandedCommentsQuery(comments);
  const notify = () => toast('Список комментариев обновлен');
  const navigate = useNavigate()
  const [isRefetching, setIsRefetching] = React.useState(false);

  const handleRefetch = async () => {
    setIsRefetching(true);

    await refetch(); // Ждем завершения refetch
    notify();
    setIsRefetching(false);
  };
  return (
    <TableContainer component={Paper}>
      {isLoading ? (
        <Preloader />
      ) : (
        <Table aria-label="collapsible table">
          <Stack flexDirection={'row'} gap={3} sx={{position: 'absolute', top: '-10px', right: 0}}>
            <Button
              sx={{ backgroundColor: (theme) => theme.palette.secondary.main, color: '#FFF' }}
              onClick={() => { 
                navigate('/')
              }}>
             <HomeIcon/>
            </Button>
            <Button
              sx={{ backgroundColor: (theme) => theme.palette.secondary.main, color: '#FFF' }}
              onClick={handleRefetch}>
              {isRefetching ? (
                <CircularProgress color="inherit" size={'26px'} />
              ) : (
                <AutorenewIcon />
              )}
            </Button>


          </Stack>

          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell  sx={{fontWeight: 'bold'}}>Пользователь</TableCell>
              <TableCell  sx={{fontWeight: 'bold'}} align="right">Комментарий</TableCell>
              <TableCell  sx={{fontWeight: 'bold'}} align="right">Дата публикации</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((element, index) => (
              <Row key={index} row={element} />
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}

export default NewsDetailComments;
