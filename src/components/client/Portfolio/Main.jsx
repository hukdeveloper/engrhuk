"use client";

import { GitHub, RemoveRedEye } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const categories = [
  {
    name: "JAVA",
    data: [
      {
        title: "Hospital Management System",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["JSP", "MySQL", "Servlet", "Spring"],
      },
      {
        title: "Pharmacy App",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["Java", "MySQL", "JavaSwing", "Netbeans"],
      },
    ],
  },
  {
    name: "NEXTJS",
    data: [
      {
        title: "Shaheen & Sons Company",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["Material UI", "Prime React", "Authjs", "Mongodb", "Redux"],
      },
      {
        title: "KIU Financial Office",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["Material UI", "Authjs", "MUI Datagrid", "Mongodb"],
      },
    ],
  },
  {
    name: "NODE",
    data: [
      {
        title: "Weather App",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["Mongodb", "Boostrap"],
      },
    ],
  },
  {
    name: "REACT",
    data: [
      {
        title: "HUK Portfolio",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["SCSS", "Sanitys"],
      },
      {
        title: "Air BnB Clone",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem unde ad earum ex dolorem consectetur debitis doloremque suscipit vel repudiandae incidunt perspiciatis quia magni cupiditate odit, quisquam expedita.",
        tages: ["Material UI", "SCSS"],
      },
    ],
  },
];

export const GetCategory = ({ data, isAll }) => {
  const theme = useTheme();
  return data.data.map((item, key) => (
    <Stack
      direction="column"
      spacing={1}
      key={key}
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: theme.shadows[4],
        maxWidth: { xs: 270, sm: 350 },
      }}
    >
      <Box
        sx={{
          ".MuiAvatar-root": {
            height: 250,
            width: "auto",
            position: "relative",
            zIndex: 1,
          },
          ":hover": {
            ".MuiAvatar-root": {
              zIndex: 0,
              filter: "brightness(61%)",
            },
          },
        }}
      >
        <Avatar src={"/assets/solutions.jpg"} variant="rounded" />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: "absolute",
            // top: "50%",
            // left: "50%",
            transform: "translate(90%, -300%)",
            ".MuiSvgIcon-root": {
              fontSize: 25,
              color: "#fff",
            },
            ".MuiButtonBase-root": {
              backgroundColor: "rgba(0,0,0,.5)",
            },
          }}
        >
          <IconButton size="large">
            <GitHub />
          </IconButton>
          <IconButton size="large">
            <RemoveRedEye />
          </IconButton>
        </Stack>
        {isAll ? (
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{
              bgcolor: "#fff",
              transform: "translateY(65)",
            }}
          >
            ({data.name})
          </Typography>
        ) : null}
      </Box>
      <Typography variant="body1" textAlign="center">
        {item.title}
      </Typography>
      <Typography variant="caption" textAlign="justify">
        {item.desc}
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {item.tages.map((tag, key) => (
          <Chip key={key} label={tag} size="small" />
        ))}
      </Box>
    </Stack>
  ));
};
const Main = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cat, setCat] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    const value = event.target.innerText;

    value === "ALL"
      ? setCat([])
      : setCat(categories.find((item) => item.name === value));
  };

  return (
    <Stack direction="column" spacing={3}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        // alignItems={"center"}
        gap={5}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          scrollButtons="auto"
          variant="scrollable"
        >
          <Tab label="All" />
          {categories.map((item, key) => (
            <Tab label={item.name} key={key} />
          ))}
        </Tabs>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        // alignItems={"center"}
        justifyContent="center"
        gap={5}
      >
        {cat.length === 0 ? (
          categories.map((item, key) => (
            <GetCategory key={key} data={item} isAll={true} />
          ))
        ) : (
          <GetCategory data={cat} />
        )}
      </Box>
    </Stack>
  );
};

export default Main;
