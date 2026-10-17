"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import assets from "@/assets";

const LOGO_SRC = assets.images.logo;

const links = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          bgcolor: "transparent",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 72, sm: 88 },
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={LOGO_SRC}
              alt="Dancing Chef"
              width={120}
              height={40}
              priority
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 56,
                borderRadius: "50px",
              }}
            />
          </Link>

          {/* Desktop */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {links.map((l) => (
              <Button
                key={l.href}
                component={Link}
                href={l.href}
                color="inherit"
              >
                {l.label}
              </Button>
            ))}
            <Button component={Link} href="/reservation" variant="contained">
              Reserve
            </Button>
          </Box>

          {/* Mobile */}
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "60vw",
              maxWidth: 380,
              bgcolor: "#0f0d0c",
              display: "flex",
              flexDirection: "column",
            },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src={LOGO_SRC}
              alt="Dancing Chef"
              width={120}
              height={40}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 48,
                borderRadius: "50px",
              }}
            />
          </Link>
          <IconButton
            aria-label="close menu"
            onClick={() => setOpen(false)}
            sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Links */}
        <List sx={{ px: 2, py: 0 }}>
          {links.map((l) => (
            <Box key={l.href}>
              <ListItemButton
                component={Link}
                href={l.href}
                onClick={() => setOpen(false)}
                sx={{ px: 0, py: 2 }}
              >
                <ListItemText
                  primary={l.label}
                  slotProps={{ primary: { sx: { fontWeight: 700 } } }}
                />
              </ListItemButton>
              <Divider />
            </Box>
          ))}
        </List>

        {/* Bottom actions */}
        <Box sx={{ px: 2, mt: 3 }}>
          <Button
            component={Link}
            href="/reservation"
            variant="contained"
            fullWidth
            size="large"
            onClick={() => setOpen(false)}
          >
            Reserve a table
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
