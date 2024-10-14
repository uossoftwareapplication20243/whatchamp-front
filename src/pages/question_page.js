import React, { useState } from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext.js';

const QuestionPage = () => {
  const navigate = useNavigate();
  const {questionMap, setQuestionMap} = useQuestionContext()

  console.log(questionMap)

  const lines = [
    "탑", "정글", "미드", "원딜", "서폿", "상관없음"
  ];


  const handleButtonClick = (job) => {
    setQuestionMap({
      ...questionMap,
      q1: job,
    })

    navigate('/question2');
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
        라인을 선택하세요
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 600, mb: 4 }}>
        {lines.map((job, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(job)}
              sx={{
                height: 100,
                backgroundColor: 'rgba(68, 77, 242, 0.5)',
                '&:hover': {
              backgroundColor: 'rgba(68, 77, 242, 1)', // 100% opacity
            }
              }}
            >
              <Typography
            align="center"
            sx={{ fontSize: '18px', fontWeight: 'bold'}} // Adjust the fontSize here
          >

              {job}
          </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuestionPage;