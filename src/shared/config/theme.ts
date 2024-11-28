import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale'; // Импорт русской локали

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      darkGrey: string;
      lightGrey: string;
      white: string;
      black: string
    };
  }
  interface PaletteOptions {
    custom?: {
      darkGrey?: string;
      lightGrey?: string;
      white?: string; // Уже присутствует здесь
      black?: string;
    };

  }
}

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#1976d2',

      },
      secondary: {
        main: '#dc004e',
      },
      custom: {
        darkGrey: '#333333',
        white: '#ffffff', // Пример белого цвета
        lightGrey: '#f0f0f0',
        black: '#000000',
      },
    },

    typography: {
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
  },
  ruRU,
);

export default theme;
