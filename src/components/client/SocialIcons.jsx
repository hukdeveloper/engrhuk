"use client";

import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Link
        href={"https://www.linkedin.com/in/haris-umar-76a21b1b5/"}
        target="_blank"
      >
        <IconButton color="primary">
          <LinkedIn />
        </IconButton>
      </Link>
      <Link href={"https://github.com/hukdeveloper"} target="_blank">
        <IconButton color="inherit">
          <GitHub />
        </IconButton>
      </Link>
      <Link
        href={"https://www.facebook.com/harisdeveloper10101"}
        target="_blank"
      >
        <IconButton color="secondary">
          <Facebook />
        </IconButton>
      </Link>
      <Link href={"https://www.instagram.com/engrhuk"} target="_blank">
        <IconButton color="error">
          <Instagram />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialIcons;
