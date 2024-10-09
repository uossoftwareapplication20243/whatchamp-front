import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuestionPage9 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the next question page
    // navigate('/question');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      <Typography variant="h4" gutterBottom>
        나의 조별과제 스타일은?
      </Typography>
      
      {/* Container for buttons, displayed in a 2x2 grid */}
      <Grid container spacing={2} sx={{ maxWidth: 600, mt: 4, mb: 4 }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleButtonClick}
            sx={{
              height: '100px',
              backgroundColor: 'rgba(68, 77, 242, 0.5)', // 60% opacity
              '&:hover': {
                backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
              },
            }}
          >
            <Typography align="center" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              무조건 리더
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleButtonClick}
            sx={{
              height: '100px',
              backgroundColor: 'rgba(68, 77, 242, 0.5)', // 60% opacity
              '&:hover': {
                backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
              },
            }}
          >
            <Typography align="center" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              답답하면 리더
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleButtonClick}
            sx={{
              height: '100px',
              backgroundColor: 'rgba(68, 77, 242, 0.5)', // 60% opacity
              '&:hover': {
                backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
              },
            }}
          >
            <Typography align="center" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              그냥.. 열심히 해요
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleButtonClick}
            sx={{
              height: '100px',
              backgroundColor: 'rgba(68, 77, 242, 0.5)', // 60% opacity
              '&:hover': {
                backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
              },
            }}
          >
            <Typography align="center" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              버스타고 싶은데요? ㅎㅎ
            </Typography>
          </Button>
        </Grid>
      </Grid>
      
      <Typography variant="body1" sx={{ opacity: 0.7 }}>
        9/9
      </Typography>
    </Box>
  );
};

export default QuestionPage9;