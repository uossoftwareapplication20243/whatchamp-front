import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const QuestionPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the job selection page (2/6)
    navigate('/question2');
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
          어디서 재미를 느끼나요?
        </Typography>
        <Box mb={4} mt={4}>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              m: 1,
              width: '200px',
              height: '100px',
              backgroundColor: 'rgba(68, 77, 242, 0.5)', // 60% opacity
              '&:hover': {
                backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
              },
            }}
          >
            게임에서 승리하기
          </Button>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              m: 1,
              width: '200px',
              height: '100px',
              backgroundColor: 'rgba(68, 77, 242, 0.5)', // 60% opacity
              '&:hover': {
                backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
              },
            }}
          >
            게임 안에서 놀기
          </Button>
        </Box>
        <Typography variant="body1" sx={{ opacity: 0.7 }}>
          1/6
        </Typography>
      </Box>
  );
};

export default QuestionPage;