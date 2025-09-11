import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import darkPurpleTheme from '../theme/personalTheme'; // Adjust path as needed

const Header = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkPurpleTheme}>
      <AppBar 
        position="static"
        sx={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
          boxShadow: '0 8px 32px rgba(0,0, 0, 0.4)',
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1,
              color: '#e8e9f3',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 600,
            }}
          >
            Harvey Rennison
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;