import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { theme } from '../App';
import { championsName } from '../const/championsName';
import {positions} from '../const/positions';
import { Link } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';


function get_images(champion_en){
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_en}_0.jpg`
}

function ResultPage() {
  const location = useLocation();
  const { username, tag } = location.state || {};
  const { questionMap, line } = useQuestionContext();
  const idx = line;
    
  return (
    <Box sx={{ maxWidth: 1400, margin: 'auto', textAlign: 'center', mt: 10 }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        왓챔?
      </Typography>
      </Link>
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
          {positions[idx].en}
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
              <Typography variant="h5">{championsName[champion].ko}</Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ResultPage;