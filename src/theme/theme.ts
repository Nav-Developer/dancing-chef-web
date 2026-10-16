"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#e0a458" },
    secondary: { main: "#c0392b" },
    background: { default: "#0e0e0e", paper: "#1a1a1a" },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
});

export default theme;
