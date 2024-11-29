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
import { formatDate } from '../../../../libs/helpers';
import {
  useGetExpandedCommentsQuery,
  useLazyGetExpandedCommentsQuery,
} from '../../../../shared/model/news/api/news.api';
import { Preloader } from '../../../../shared/ui/preloader';
import { Comment } from '../../../../shared/model/news/types/news.types';
// interface Comment {
//   user: string;
//   text: string;
//   date: string;
// }


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
        <TableCell>{row.by}</TableCell>
        <TableCell>
          {row.deleted ? (
            'Комментарий удален'
          ) : (
            <div dangerouslySetInnerHTML={{ __html: row.text }} />
          )}
        </TableCell>
        <TableCell>{formatDate(row.time)}</TableCell>
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
                      <TableCell>Пользователь</TableCell>
                      <TableCell align="right">Комментарий</TableCell>
                      <TableCell align="right">Дата публикации</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((comment: Comment, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{comment.by}</TableCell>
                        <TableCell align="right">
                          {<div dangerouslySetInnerHTML={{ __html: comment.text || '' }} />}
                        </TableCell>
                        <TableCell align="right">{formatDate(comment.time)}</TableCell>
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
  const { data } = useGetExpandedCommentsQuery(comments);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Пользователь</TableCell>
            <TableCell align="right">Комментарий</TableCell>
            <TableCell align="right">Дата публикации</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((element, index) => (
            <Row key={index} row={element} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NewsDetailComments;
