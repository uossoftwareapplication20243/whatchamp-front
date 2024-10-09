import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuestionPage7 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the next question page
    navigate('/question8');
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
        심리싸움 좋아하십니까
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
          네! 심리싸움 이기면 <br />너무 재밌죠

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
          아뇨. 저한테만 <br />집중하고 싶습니다.

          </Typography>
        </Button>
      </Box>
      <Typography variant="body1" sx={{ opacity: 0.7 }}>
        7/9
      </Typography>
    </Box>
  );
};

export default QuestionPage7;