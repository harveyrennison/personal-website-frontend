import { createTheme } from "@mui/material";

const darkPurpleTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1a1a2e",
    },
    text: {
      primary: "#e8e9f3",
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
        },
        body: {
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)",
          minHeight: "100%",
          margin: 0,
        },
        "#root": {
          minHeight: "100%",
        },
      },
    },
  },
});

export default darkPurpleTheme;
