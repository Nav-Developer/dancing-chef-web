import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#e8a33d" },
    background: { default: "#0f0d0c", paper: "#1a1715" },
    text: { primary: "#f5efe6" },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: { fontFamily: "var(--font-playfair), serif", fontWeight: 700 },
    h2: { fontFamily: "var(--font-playfair), serif", fontWeight: 700 },
    h3: { fontFamily: "var(--font-playfair), serif", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: "none", fontWeight: 600 } },
    },
  },
});

export default theme;
