"use client";

import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialIcons = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <IconButton color="primary">
        <LinkedIn />
      </IconButton>
      <IconButton color="primary">
        <GitHub />
      </IconButton>
      <IconButton color="primary">
        <Facebook />
      </IconButton>
      <IconButton color="primary">
        <Instagram />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
