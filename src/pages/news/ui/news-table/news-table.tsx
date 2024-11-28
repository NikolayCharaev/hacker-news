import { Paper, Table, TableContainer } from '@mui/material';
import { useState } from 'react';
import CustomTableHead from '../table/table-head/table-head';
import CustomTableBody from '../table/table-body/table-body';
import CustomTablePagination from '../table/table-pagination/table-pagination';

// Типизация для новости (можно адаптировать в зависимости от структуры данных)
interface NewsItem {
  id: number;
  title: string;
  author: string;
  date: string;
  // добавьте другие свойства, соответствующие данным о новости
}

// Типизация для столбцов
interface Column {
  id?: string;
  label?: string;
  minWidth?: number;
  align?: 'center' | 'right' | 'left';
  name?: string;
}

interface NewsTableProps {
  news: NewsItem[];
  columns: Column[];
}

const NewsTable: React.FC<NewsTableProps> = ({ news, columns }) => {
  const [page, setPage] = useState(0); // Текущая страница
  const [rowsPerPage, setRowsPerPage] = useState(10); // Количество строк на странице

  // Обработка изменения страницы
  const handleChangePage = (
    //@ts-expect-error поправить надо
    event: React.MouseEvent<HTMLButtonElement>, newPage: number) => {
    setPage(newPage); // Устанавливаем новую страницу
  };

  // Обработка изменения количества строк на странице
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10); // Получаем новое количество строк
    if (!isNaN(newRowsPerPage)) {
      setRowsPerPage(newRowsPerPage);
      setPage(0); // Сброс страницы при изменении количества строк
    }
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <CustomTableHead rows={columns} />
          <CustomTableBody rows={news} page={page} rowsPerPage={rowsPerPage} />
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
