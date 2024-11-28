import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

const CustomTableBody = ({ rows, page, rowsPerPage }) => {
  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Отображаем только строки для текущей страницы
        .map((row, index) => (
          <TableRow sx={{ cursor: 'pointer' }} hover role="checkbox" key={index}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.rating}</TableCell>
            <TableCell>{row.author}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.commentsCount}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default CustomTableBody;
