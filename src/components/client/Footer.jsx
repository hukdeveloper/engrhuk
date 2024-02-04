"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Logo from "../global/Logo";
import Link from "next/link";
import { Copyright } from "@mui/icons-material";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      p={"30px 10px"}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={theme.palette.grey[300]}
      alignItems={"center"}
      flexDirection="column"
      gap={1}
      mt={"auto"}
      borderRadius={2}
    >
      <Logo />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={{ xs: 1, sm: 3 }}
        sx={{
          a: {
            color: theme.palette.primary.dark,
            textDecoration: "none",
          },
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Portfolio</Link>
      </Box>
      <SocialIcons />
      <Box
        display="flex"
        alignItems={"center"}
        gap={1}
        sx={{
          cursor: "pointer",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Copyright />
        <Typography variant="caption" fontSize={14}>
          Designed & Developed By HUK
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
