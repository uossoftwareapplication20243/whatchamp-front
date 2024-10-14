import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';

const QuestionPage9 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  console.log(questionMap);

  const options = [
    "무조건 리더",
    "답답하면 리더",
    "그냥.. 열심히 해요",
    "버스타고 싶은데요? ㅎㅎ"
  ];

  const handleButtonClick = async (option) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    console.log(data);

    setQuestionMap({
      ...questionMap,
      q9: option,
    });

    navigate('/result');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f5f5f5', p: 3 }}
    >
      <Typography variant="h4" mb={4} gutterBottom sx={{ fontWeight: 'bold' }}>
        나의 조별과제 스타일은?
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 600, mb: 4 }}>
        {options.map((option, index) => (
          <Grid item xs={6} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(option)}
              sx={{
                height: 100,
                backgroundColor: 'rgba(68, 77, 242, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(68, 77, 242, 1)',
                }
              }}
            >
              <Typography
                align="center"
                sx={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                {option}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" sx={{ opacity: 0.7 }}>
        8/8
      </Typography>
    </Box>
  );
};

export default QuestionPage9;