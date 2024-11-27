import React, { useEffect } from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import { active_color, inactive_color } from '../const/color';

const QuestionPage8 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap, username, tag } = useQuestionContext();

  const options = [
    "무조건 리더",
    "답답하면 리더",
    "그냥.. 열심히 해요",
    "버스타고 싶은데요? ㅎㅎ"
  ];

  const handleButtonClick = (option) => {
    // Update questionMap with the answer for q8
    setQuestionMap({
      ...questionMap,
      q8: option,
    });
    navigate('/new_result');
  };

  // useEffect(() => {
  //   // Check if q8 has been set in questionMap before sending to backend
  //   if (questionMap.q8) {
  //     const sendQuestionMap = async () => {
  //     try {
  //         console.log(questionMap);
  //         const response = await fetch(
  //         `http://3.35.3.104:3000/api/answers/${username}${tag}`, {
  //             method: "POST",
  //             headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(questionMap)
  //           }
  //         );
  //         const data = await response.json();
  //         console.log(data);
  //         navigate('/new_result');
  //       } catch (error) {
  //         console.error('Error sending data:', error);
  //     }
  //     };

  //     sendQuestionMap();
  //   }
  // }, [questionMap, username, tag, navigate]);

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
                backgroundColor: inactive_color,
                '&:hover': {
                  backgroundColor: active_color,
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

export default QuestionPage8;
