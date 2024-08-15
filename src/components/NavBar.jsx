import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({ onMenuClick }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '1.2rem' }}>
            Learning Academy
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" sx={{ fontSize: '1rem' }}>Home</Button>
            <Button color="inherit" sx={{ fontSize: '1rem' }}>Courses</Button>
            <Button color="inherit" sx={{ fontSize: '1rem' }}>Account</Button>
            <Button color="inherit" sx={{ fontSize: '1rem' }}>Progress</Button>
            <Button color="inherit" sx={{ fontSize: '1rem' }}>Login</Button>
          </Box>

          <IconButton
            onClick={onMenuClick}
            sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}
            size="large"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
