import './App.css';
import { Box, Container, Typography } from '@mui/material';
import FitnessCategoryList from './components/FitnessCategoryList';

function App() {
  return (
    <Box sx={{
      color: '#ffffff',
      width: '100%',
    }}>
      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 20 } }}>
        <Typography variant="h3" gutterBottom>
          Transform Your Fitness Routine Today!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Choose your favorite course right away and start your wellness journey right away!
        </Typography>
      </Container>
      <FitnessCategoryList />
    </Box>
  );
}

export default App;
