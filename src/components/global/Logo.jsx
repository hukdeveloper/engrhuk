"use client";

import { Avatar, Box, Typography, useTheme } from "@mui/material";

const Logo = () => {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems={"center"} gap={1}>
      <Avatar
        src="/assets/logo.jpeg"
        sx={{
          height: 35,
          width: 35,
        }}
      />
      <Typography
        variant="subtitle1"
        fontWeight={700}
        color={theme.palette.grey[700]}
      >
        Haris Umar
      </Typography>
    </Box>
  );
};

export default Logo;
