import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import { active_color, inactive_color } from '../const/color';

const QuestionPage3 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  const intro = "어떤 챔피언을 하고 싶나요?"
  const options = [
    "공격적인\n챔피언",
    "수비적인\n챔피언"
  ];

  const handleButtonClick = (option) => {
    setQuestionMap({
      ...questionMap,
      q3: option,
    });
    navigate('/question4');
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
        {intro}
      </Typography>
      <Box mb={4} mt={4}>
        {options.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleButtonClick(option)}
            sx={{
              m: 1,
              width: '200px',
              height: '100px',
              backgroundColor: inactive_color, // 60% opacity
              '&:hover': {
                backgroundColor: active_color, // 100% opacity
              },
            }}
          >
            <Typography
              align="center"
              sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'pre-line' }}
            >
              {option}
            </Typography>
          </Button>
        ))}
      </Box>
      <Typography variant="body1" sx={{ opacity: 0.7 }}>
        3/8
      </Typography>
    </Box>
  );
};

export default QuestionPage3;