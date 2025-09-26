import React from "react";
import { Box, Typography, Stack, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 1.5,
        px: 3,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'grey.800',
      }}
    >
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        justifyContent="space-between" 
        alignItems="center"
      >
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 500,
            color: 'grey.400',
            ml:12
          }}
        >
          © 2025 Harvey Rennison
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{mr:12}}>

            <IconButton 
                component={Link} 
                href="https://github.com/harveyrennison" 
                target="_blank"
                size="small"
                sx={{ 
                color: 'grey.400', 
                '&:hover': {  // want to update the hover so it looks like the app itself
                    color: 'white'
                } 
                }}
            >
                <GitHub fontSize="medium" />
            </IconButton>

            <IconButton 
                component={Link} 
                href="https://linkedin.com/in/harvey-rennison" 
                target="_blank"
                size="small"
                sx={{ 
                '&:hover': { 
                    backgroundColor: 'action.hover'
                } 
                }}
            >
                <LinkedIn fontSize="medium" />
            </IconButton>

            <IconButton 
                href="https://mail.google.com/mail/?view=cm&to=harveyrennisonbusiness@gmail.com&su=Contact%20-%20Harvey%20Rennison%20Website&authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ 
                    '&:hover': { 
                    backgroundColor: 'action.hover'
                    } 
                }}
            >
                <Email fontSize="medium" />
            </IconButton>

        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;