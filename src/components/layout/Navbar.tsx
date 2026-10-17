"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const links = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(10px)", bgcolor: "rgba(15,13,12,0.6)" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          component={Link}
          href="/"
          variant="h6"
          sx={{
            fontFamily: "var(--font-playfair)",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Dancing Chef
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {links.map((l) => (
            <Button key={l.href} component={Link} href={l.href} color="inherit">
              {l.label}
            </Button>
          ))}
          <Button component={Link} href="/reservation" variant="contained">
            Reserve
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
