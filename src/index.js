import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c1f2a',
    },
    secondary: {
      main: '#ffbf00',
    },
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

