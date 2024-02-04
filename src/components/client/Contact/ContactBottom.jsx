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
  Facebook,
  Instagram,
  LinkedIn,
  StackedLineChartTwoTone,
} from "@mui/icons-material";
import { montserrat } from "../../../utils/font";

const data = [
  {
    title: "Facebook",
    icon: <Facebook />,
    link: "/",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    link: "/",
  },
  {
    title: "LinkedIn",
    icon: <LinkedIn />,
    link: "/",
  },
  {
    title: "StackOverflow",
    icon: <StackedLineChartTwoTone />,
    link: "/",
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        neque laboriosam eaque, earum aliquid cumque rerum vero nostrum
        voluptates odit repellat labore. Rem sint cum velit, suscipit quo sit
        tempora.
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
        }}
      >
        {data.map((item, key) => (
          <Box
            key={key}
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
        ))}
      </Paper>
    </Container>
  );
};

export default ContactBottom;
