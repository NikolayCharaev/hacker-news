import React from 'react';
import { TableHead, TableCell, TableRow } from '@mui/material';

const CustomTableHead = ({ rows }) => {
  return (
    <TableHead >
      <TableRow>
        {rows.map((column, index) => (
          <TableCell sx={{fontWeight: 'bold'}} key={index} >
            {column.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
