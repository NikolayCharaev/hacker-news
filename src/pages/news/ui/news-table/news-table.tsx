import { Paper, Table, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import CustomTableHead from '../../../../shared/ui/table/table-head/table-head';
import CustomTableBody from '../../../../shared/ui/table/table-body/table-body';
import CustomTablePagination from '../../../../shared/ui/table/table-pagination/table-pagination';

const NewsTable = ({ news, columns }) => {
  const [page, setPage] = useState(0); // Текущая страница
  const [rowsPerPage, setRowsPerPage] = useState(10); // Количество строк на странице

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Сброс страницы при изменении количества строк
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <CustomTableHead rows={columns} />
          <CustomTableBody 
            rows={news} 
            page={page} 
            rowsPerPage={rowsPerPage} 
          />
        </Table>
      </TableContainer>
      <CustomTablePagination
      
        rows={news}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default NewsTable;
