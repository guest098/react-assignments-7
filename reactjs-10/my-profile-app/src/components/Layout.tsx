import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#2C3E50' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h6" noWrap>Profile Cards</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
