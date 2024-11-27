import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      darkGrey: string;
      lightGrey: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      darkGrey?: string;
      lightGrey?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    custom: {
      darkGrey: '#333333',
      lightGrey: '#f0f0f0', // Пример другого кастомного цвета
    },
  },

  typography: {
    allVariants: {
      color: '#fff',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
