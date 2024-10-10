import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuestionPage8 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the next question page
    navigate('/question9');
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
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        자신의 마인드는?
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
            <Typography
            align="center"
            sx={{ fontSize: '18px' , fontWeight: 'bold'}} // Adjust the fontSize here
          >
          일단 내가 잘해야 한다.

          </Typography>
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
            <Typography
            align="center"
            sx={{ fontSize: '18px' , fontWeight: 'bold'}} // Adjust the fontSize here
          >
          내가 지더라도 <br />팀이 이기면 괜찮다.

          </Typography>
        </Button>
      </Box>
      <Typography variant="body1" sx={{ opacity: 0.7 }}>
        8/9
      </Typography>
    </Box>
  );
};

export default QuestionPage8;