import React, { useState } from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';

const QuestionPage2 = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const jobs = [
    '전사', '마법사', '암살자',
    '원거리 딜러', '탱커', '서포터'
  ];

  const handleJobToggle = (job) => {
    setSelectedJobs(prev => 
      prev.includes(job) ? prev.filter(j => j !== job) : [...prev, job]
    );
  };

  const handleNext = () => {
    console.log('Selected jobs:', selectedJobs);
    // Here you would typically handle navigation or data submission
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
      <Typography variant="h4" mb={4} gutterBottom>
        좋아하는 직업군은?
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 600, mb: 4 }}>
        {jobs.map((job, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleJobToggle(job)}
              sx={{
                height: 100,
                backgroundColor: selectedJobs.includes(job) 
                  ? 'rgba(68, 77, 242, 1)' 
                  : 'rgba(68, 77, 242, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(68, 77, 242, 1)',
                },
              }}
            >
              {job}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{
          width: 200,
          height: 50,
          backgroundColor: 'rgba(68, 77, 242, 1)',
          '&:hover': {
            backgroundColor: 'rgba(68, 77, 242, 0.8)',
          },
        }}
      >
        다음
      </Button>
      <Typography variant="body1" sx={{ mt: 2, opacity: 0.7 }}>
        2/6
      </Typography>
    </Box>
  );
};

export default QuestionPage2;