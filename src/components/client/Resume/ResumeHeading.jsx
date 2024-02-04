"use client";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { montserrat } from "../../../utils/font";

const ResumeHeading = ({ title, icon }) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      mt={1}
      alignItems={"center"}
      gap={1}
      sx={{
        ".MuiButtonBase-root": {
          bgcolor: theme.palette.grey[800],
        },
        ".MuiSvgIcon-root": {
          color: theme.palette.grey[100],
        },
      }}
    >
      <IconButton>{icon}</IconButton>
      <Box
        variant="body2"
        fontSize={20}
        className={montserrat.className}
        fontWeight={600}
      >
        {title}
      </Box>
    </Box>
  );
};

export default ResumeHeading;
