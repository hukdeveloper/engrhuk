"use client";

import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "../../global/Logo";
import {
  Code,
  Facebook,
  Instagram,
  LinkedIn,
  StackedLineChartTwoTone,
} from "@mui/icons-material";
import { montserrat } from "../../../utils/font";
import Link from "next/link";

const data = [
  {
    title: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/harisdeveloper10101",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/engrhuk",
  },
  {
    title: "LinkedIn",
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/haris-umar-76a21b1b5/",
  },
  {
    title: "Github",
    icon: <Code />,
    link: "https://github.com/hukdeveloper",
  },
];

const ContactBottom = () => {
  const matches = useMediaQuery("(max-width:782px)");
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Logo />
      <Typography variant="body1" textAlign="center">
        Feel free to contact me anytime. I strive to respond promptly, but
        please be patient as time zone differences might cause some delays. I
        will get back to you as soon as possible.
      </Typography>
      <Paper
        sx={{
          border: "2px solid #3C72FF",
          borderRadius: 3,
          display: "flex",

          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          p: 1,
          a: {
            color: "inherit",
            textDecoration: "none",
          },
        }}
      >
        {data.map((item, key) => (
          <Link key={key} href={item.link} target="_blank">
            <Box
              p={1}
              sx={{
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {item.icon}
              <span className={montserrat.className}>{item.title}</span>
            </Box>
          </Link>
        ))}
      </Paper>
    </Container>
  );
};

export default ContactBottom;
