// MainPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import QuestionProvider from '../context/questionContext';

function MainPage() {
  const [username, setUsername] = useState('');
  const [tag, setTag] = useState('#KR1');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/question', { state: { username, tag } });
  };

  return (
    <QuestionProvider>
    <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        왓챔?
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        플레이어에 맞는 리그오브레전드 챔피언 추천
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 4 }}>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            size="small"
            placeholder="사용자명"
            sx={{ flexGrow: 1 }}
          />
          <TextField
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: '160px' }}
          />
          <Button type="submit" variant="contained" color="primary">
            조회
          </Button>
        </Box>
      </form>
    </Box>
    </QuestionProvider>
  );
};
export default MainPage;