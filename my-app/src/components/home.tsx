import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
        sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        {/* Left side */}
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3, // vertical space between inner boxes
            }}
        >
            <Box>
                <Typography variant="h2">Hello!</Typography>
                <Typography variant="h3">I'm Harvey Rennison</Typography>
            </Box>
            <Box>
                <Typography variant="h6">A passionate frontend developer from Christchurch, New Zealand</Typography>
            </Box>
        </Box>
        {/* Right side */}
        <Box>
            <Typography variant="h3">insertImageHere</Typography>
        </Box>
    </Box>
  );
};


export default Home; 