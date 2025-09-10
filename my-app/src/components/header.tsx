import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/about');
        break;
      case 2:
        navigate('/contact');
        break;
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Harvey Rennison
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Home" />
          <Tab label="About Me" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
