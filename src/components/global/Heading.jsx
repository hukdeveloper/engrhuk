"use client";

import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";

const Heading = ({ title, desc, icon }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
      gap={"1px"}
      maxWidth="100%"
      p={"20px 0"}
      sx={{
        ".MuiSvgIcon-root": {
          fontSize: "30px",
        },
      }}
    >
      <Box display="flex" gap={1} alignItems="center">
        {icon}
        <Typography fontSize={25} variant="body1" fontWeight={700}>
          {title}
        </Typography>
      </Box>
      <Divider
        sx={{
          width: "100%",
          maxWidth: "500px",
        }}
      />
      <Typography
        variant="body1"
        mt={0.5}
        color={theme.palette.grey[700]}
        textAlign="center"
      >
        ({desc})
      </Typography>
    </Box>
  );
};

export default Heading;
