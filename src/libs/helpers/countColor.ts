import { useTheme } from '@mui/material';

export const countColor = (count: number) => {
  const theme = useTheme();
  let color = '';
  if (count <= 10) {
    color = theme.palette.custom.red || '';
  } else if (count <= 50) {
    color = theme.palette.custom.orange || '';
  }else if (count <= 80)  { 
    color = theme.palette.custom.blue || '';
  }else if (count <= 100) { 
color = theme.palette.custom.green || ''
  }else { 
    color = theme.palette.custom.green || ''
  }

  return color;
};
