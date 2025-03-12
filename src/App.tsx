import './App.css';
import { Box, Container, Grid, Grid2, Typography } from '@mui/material';
import FitnessCategoryList from './components/FitnessCategoryList';

function App() {
  return (
    <Box sx={{
      color: '#ffffff',
      width: '100%',
    }}>
      <Container maxWidth={'xl'} sx={{ py: { xs: 10, md: 20 } }}>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" gutterBottom>
              Transform Your Fitness Routine Today!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Choose your favorite course right away and start your wellness journey right away!
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="images/bg.png" alt="Fitness" style={{ width: '70%', height: '70%', objectFit: 'cover' }} />
          </Grid2>
        </Grid2>
      </Container>
      <FitnessCategoryList />
    </Box >
  );
}

export default App;
