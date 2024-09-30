// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main_page';
import ResultPage from './pages/result_page';
import QuestionPage from './pages/question_page';
import QuestionPage2 from './pages/question_page2';
import { createTheme, ThemeProvider } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard Variable',
  },
  palette: {
    primary: {
      main: '#444DF2',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/question2" element={<QuestionPage2 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default App;