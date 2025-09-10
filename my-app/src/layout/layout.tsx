import React from "react";
import type { ReactNode } from "react";
import {
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import Header from "./header";
import Footer from "./footer"
import darkPurpleTheme from "../theme/personalTheme";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkPurpleTheme}>
      <CssBaseline />
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        
        <Box
          component="main"
          sx={{
            flex: 1,
            maxWidth: '1280px',
            width: '90%',
            margin: '2rem auto',
            padding: '2rem',
          }}
        >
          {children}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;