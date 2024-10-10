import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { theme } from '../App';
import { championsName } from '../const/championsName';
import {positions} from '../const/positions';


function get_images(champion_en){
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_en}_0.jpg`
}

function ResultPage() {
  const location = useLocation();
  const { username, tag } = location.state || {};
    
  return (
    <Box sx={{ maxWidth: 1400, margin: 'auto', textAlign: 'center', mt: 10 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        왓챔?
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {username} {tag}
      </Typography>
      <Paper 
        elevation={3} 
        sx={{ 
          backgroundColor: theme.palette.primary.main, 
          color: 'white',
          p: 3,
          mt: 3
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {positions[0].en}
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {[102, 82].map((champion, index) => (
            <Grid item key={index}>
              <Box
                component="img"
                mt = {3}
                sx={{
                  width: 600,
                  height: 350,
                  backgroundColor: index === 2 ? '#6b1b54' : '#1e3a5f',
                  borderRadius: 2,
                  mb: 1
                }}
                src={get_images(championsName[champion].en)}
                alt={champion}
              />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{championsName[champion].ko}</Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ResultPage;