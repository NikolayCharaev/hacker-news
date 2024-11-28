import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomTableBody = ({ rows, page, rowsPerPage }) => {
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
