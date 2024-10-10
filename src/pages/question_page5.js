import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuestionPage5 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the next question page
    navigate('/question6');
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
        어떤 챔피언을 하고 싶나요?
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
          조작이 쉬운<br />챔피언

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
          어렵지만 화려한<br />챔피언

          </Typography>
        </Button>
      </Box>
      <Typography variant="body1" sx={{ opacity: 0.7 }}>
        4/8
      </Typography>
    </Box>
  );
};

export default QuestionPage5;