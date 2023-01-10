import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import customTheme from './customTheme'
import TopBar from './components/TopBar';
import Main from './components/Main';

const theme = createTheme(customTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
