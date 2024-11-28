import { TablePagination } from '@mui/material';
import React from 'react';


const CustomTablePagination = ({
  rows,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
    sx={{
      color: 'black',
      '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
        color: 'black',
      },
      '& .MuiTablePagination-actions': {
        color: 'black',
      },
      '& .MuiSelect-root': {
        color: 'black', // Цвет текста в select
      },
      '& .MuiMenuItem-root': {
        color: 'black', // Цвет текста в элементах меню
        '&.Mui-selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)', // Цвет фона для выбранного элемента
          color: 'black', // Цвет текста для выбранного элемента
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.16)', // Цвет фона при наведении
          color: 'black', // Цвет текста при наведении
        },
      },
    }}
      rowsPerPageOptions={[10, 25, 50]}
      component="div"
      count={rows.length} // Общее количество строк
      rowsPerPage={rowsPerPage} // Количество строк на странице
      page={page} // Текущая страница
      onPageChange={handleChangePage} // Изменение страницы
      onRowsPerPageChange={handleChangeRowsPerPage} // Изменение количества строк на странице
    />
  );
};

export default CustomTablePagination;
