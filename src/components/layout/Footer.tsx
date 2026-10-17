import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: "center", opacity: 0.6 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Dancing Chef. All rights reserved.
      </Typography>
    </Box>
  );
}
