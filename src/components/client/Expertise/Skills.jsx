"use client";

import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const skills = [
  {
    title: "Nextjs",
    bgcolor: "#B8F3C1",
    imgUrl: "/assets/skills/nextjs.png",
  },
  {
    title: "React",
    bgcolor: "#002042",
    imgUrl: "/assets/skills/react.png",
  },
  {
    title: "Material UI",
    bgcolor: "#000",
    imgUrl: "/assets/skills/mui.png",
  },
  {
    title: "Java",
    bgcolor: "#d0d1d3",
    imgUrl: "/assets/skills/java.png",
  },
  {
    title: "Nodejs",
    bgcolor: "#440300",
    imgUrl: "/assets/skills/nodejs.png",
  },
  {
    title: "Mongodb",
    bgcolor: "#17086e",
    imgUrl: "/assets/skills/mongo.png",
  },
  {
    title: "MySQL",
    bgcolor: "#2a2644",
    imgUrl: "/assets/skills/mysql.png",
  },
  {
    title: "Redux",
    bgcolor: "#cdc6f5",
    imgUrl: "/assets/skills/redux.png",
  },
  {
    title: "Redux",
    bgcolor: "#1C1B25",
    imgUrl: "/assets/skills/authjs.png",
  },
  {
    title: "Sanity",
    bgcolor: "#29224e",
    imgUrl: "/assets/skills/sanity.png",
  },
  {
    title: "Github",
    bgcolor: "#6f6f6f",
    imgUrl: "/assets/skills/github.png",
  },
];

const Skills = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        ".MuiBox-root": {
          height: 80,
          width: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        },
      }}
    >
      {skills.map((item, key) => (
        <Stack key={key} spacing={1}>
          <Box bgcolor={item.bgcolor}>
            <Image alt="" width={50} height={50} src={item.imgUrl} />
          </Box>
          <Typography variant="body1" textAlign="center">
            {item.title}
          </Typography>
        </Stack>
      ))}
    </Container>
  );
};

export default Skills;
