"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import FadeIn from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <FadeIn>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
          >
            Where every dish is a performance
          </Typography>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Typography sx={{ my: 3, opacity: 0.8 }}>
            Fire, flavour and a little bit of theatre.
          </Typography>
          <Button
            component={Link}
            href="/reservation"
            variant="contained"
            size="large"
          >
            Book a table
          </Button>
        </FadeIn>
      </Container>
    </Box>
  );
}
