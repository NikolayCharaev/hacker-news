import { TableHead, TableCell, TableRow } from '@mui/material';
import { ColumnsType } from '../../../constants';

const CustomTableHead = ({ rows } : any) => {
  return (
    <TableHead >
      <TableRow>
        {rows?.map((column: ColumnsType , index : number) => (
          <TableCell sx={{fontWeight: 'bold'}} key={index} >
            {column.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
