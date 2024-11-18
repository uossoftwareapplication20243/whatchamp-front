import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { theme } from '../App';
import { cNameMap } from '../const/championsName';
import {positions} from '../const/positions';
import { Link } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import { server_url } from '../const/url';


function get_images(champion_en){
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_en}_0.jpg`
}

function NewResultPage() {
  const location = useLocation();
  const { questionMap, line, username, tag } = useQuestionContext();
  const [championList, setChampionList] = useState([]);
  const idx = line;
  // useEffect(() => {
  //   // Initial static data for demonstration
  //   setChampionList([]);
  // }, []);

  useEffect(() => {
    async function fetchChampionData() {
      try {
        console.log("Content-based 결과 서버에 요청");
        const response = await fetch(
          server_url + `/api/new/result`,
          { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(questionMap) }
        );

        if (response.status === 200) {
          console.log("Content-based 결과 데이터 반환성공");
          console.log(response.body);
          const data = await response.json();
          console.log(data);
          setChampionList(data.champions); 
        } else {
          console.log("Content-based 결과 데이터 반환실패");
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    }

    if (username && tag) {
      fetchChampionData();
    }
  }, [username, tag, line]);
    
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
          {championList.map((champion, index) => (
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
                src={get_images(cNameMap[champion].en)}
                alt={champion}
              />
              <Typography variant="h5">{champion}</Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default NewResultPage;
