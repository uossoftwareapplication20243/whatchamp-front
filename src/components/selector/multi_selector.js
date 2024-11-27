import React from 'react';
import { Box, Typography, Button, Grid} from '@mui/material';
import { active_color, inactive_color } from '../../const/color';

const MultiSelector = ({
  title,
  options,
  handleNext,
  handleJobToggle,
  selectedJobs,
  idx
}) => {
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
        {title}
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 600, mb: 4 }}>
        {options.map((option, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleJobToggle(option)}
              sx={{
                height: 100,
                backgroundColor: selectedJobs.includes(option) 
                ? active_color
                  : inactive_color,
                '&:hover': {
                  backgroundColor: active_color,
                },
              }}
            >
              <Typography
            align="center"
            sx={{ fontSize: '18px', fontWeight: 'bold'}} // Adjust the fontSize here
          >
              {option}
          </Typography>
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
          backgroundColor: active_color,
        }}
      >
        다음
      </Button>
      <Typography variant="body1" sx={{ mt: 2, opacity: 0.7 }}>
        {idx}/8
      </Typography>
    </Box>
  );
};

export default MultiSelector;