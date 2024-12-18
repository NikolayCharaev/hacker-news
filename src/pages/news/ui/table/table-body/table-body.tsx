import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { countColor } from '../../../../../libs/helpers';

// Тип для строки данных
interface Row {
  id: number;
  title: string;
  rating?: number;
  author: string;
  date: string;
  commentsCount?: number;
}

interface CustomTableBodyProps {
  rows: Row[]; // Массив строк данных
  page: number; // Номер текущей страницы
  rowsPerPage: number; // Количество строк на странице
}

const CustomTableBody: React.FC<CustomTableBodyProps> = ({ rows, page, rowsPerPage }) => {
  const navigate = useNavigate();

  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Отображаем только строки для текущей страницы
        .map((row, index) => (
          <TableRow
            onClick={() => {
              navigate(`/news/${row.id}`);
            }}
            sx={{ cursor: 'pointer' }}
            hover
            role="checkbox"
            key={index}>
            <TableCell>{row.title}</TableCell>
            <TableCell>
              <Typography variant="body1" color={countColor(row.rating || 0)}>
                {row.rating}
              </Typography>
            </TableCell>
            <TableCell sx={{fontWeight:'bold'}}>{row.author}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>
              <Typography variant="body1" color={countColor(row.rating || 0)}>
                {row.commentsCount}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default CustomTableBody;
