import { Box, Card, Grid } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/maincomponent/Main';
import SideNavBar from './components/maincomponent/sideNavBar/SideNavBar';

function App() {
  return ( 
    <Card elevation={0}>
     <Box sx={{height:'15%',backgroundColor:'white'}} >
       <Navbar/>
     </Box>
     <Grid container>
      <Grid item md={3}>
      <SideNavBar/>
      </Grid>
      <Grid item md={9}>
        <Main/>
      </Grid>
     </Grid>
    </Card>
  );
}

export default App;
