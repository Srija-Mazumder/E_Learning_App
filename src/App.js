import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import CombinedDrawer from './components/SidePanel_stud';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <CombinedDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
