"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";
import FadeIn from "@/components/animations/FadeIn";
import assets from "@/assets";
import { menu } from "@/data/menu";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        bgcolor: "secondary.main",
        color: "primary.dark",
        px: 2,
        py: 0.5,
        fontWeight: 800,
        fontSize: "0.8rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </Box>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          bgcolor: "primary.main",
          color: "#fff",
          pt: { xs: 14, md: 18 },
          pb: { xs: 10, md: 14 },
          overflow: "hidden",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.09) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: 8, md: 6 },
            alignItems: "center",
          }}
        >
          <FadeIn>
            <Tag>Welcome to Dancing Chef</Tag>
            <Typography
              variant="h1"
              sx={{
                mt: 2,
                fontSize: { xs: "2.8rem", md: "4.6rem" },
                lineHeight: 1.05,
                color: "#fff",
              }}
            >
              Where every dish is a{" "}
              <Box
                component="span"
                sx={{ color: "secondary.main", fontStyle: "italic" }}
              >
                performance
              </Box>
            </Typography>
            <Typography
              sx={{ my: 3, maxWidth: 480, opacity: 0.9, lineHeight: 1.8 }}
            >
              Fire, flavour and a little bit of theatre. Come hungry, leave
              entertained.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                component={Link}
                href="/reservation"
                variant="contained"
                color="secondary"
                size="large"
              >
                Book a table
              </Button>
              <Button
                component={Link}
                href="/menu"
                variant="outlined"
                size="large"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: "secondary.main",
                    color: "secondary.main",
                  },
                }}
              >
                View menu
              </Button>
            </Box>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Box
              sx={{
                position: "relative",
                width: { xs: "82%", md: "min(100%, 420px)" },
                aspectRatio: "1",
                mx: "auto",
                border: "3px solid",
                borderColor: "secondary.main",
                p: "10px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -14,
                  border: "1px solid",
                  borderColor: "secondary.main",
                  pointerEvents: "none",
                },
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={assets.images.logo}
                  alt="Dancing Chef"
                  fill
                  priority
                  sizes="(max-width: 900px) 80vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </FadeIn>
        </Container>
      </Box>

      {/* Our Special */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, textAlign: "center" }}
      >
        <Container maxWidth="lg">
          <FadeIn>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.4rem", md: "4rem" },
                textTransform: "uppercase",
                color: "#1a0f0d",
              }}
            >
              Our Special
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Tag>Dancing Chef</Tag>
            </Box>
          </FadeIn>

          <Box
            sx={{
              mt: 6,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
              textAlign: "left",
            }}
          >
            {menu.slice(0, 3).map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    border: "1px solid rgba(142,27,27,0.18)",
                    borderTop: "4px solid",
                    borderTopColor: "primary.main",
                    p: 3,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "var(--font-bodoni)", fontWeight: 700 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ my: 1.5, color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                  <Typography sx={{ fontWeight: 800, color: "primary.main" }}>
                    ₹{item.price}
                  </Typography>
                </Box>
              </FadeIn>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
