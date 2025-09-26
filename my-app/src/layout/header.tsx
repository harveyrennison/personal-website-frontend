import { AppBar, Toolbar, Typography, ThemeProvider, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import darkPurpleTheme from '../theme/personalTheme';

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
            <Box>
                <Button color="inherit" onClick={() => navigate("/")}>Harvey Rennison</Button>
            </Box>

          <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2, mr:4}}>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
            <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
