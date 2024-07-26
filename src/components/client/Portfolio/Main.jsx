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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "NEXTJS",
    data: [
      {
        title: "Shaheen & Sons Company Website",
        desc: "Company website that includes all the sectors of Shaheen & Sons. Mining, Construction, Health and Hoteling. Further provides all the details about the Mega projects done by Shaheen & Sons. It is one of the best project that is now live on google.",
        tages: ["Material UI", "Prime React", "Redux"],
        github: "https://shaheenandsons.com.pk/",
        link: "https://shaheenandsons.com.pk/",
      },
      {
        title: "Shaheen & Sons Accounting & Finance Software",
        desc: "Designed & Developed the finance system of Shaheen & Sons Company. Key points include financial activities, bank statements, employees management, employee card, amanath & zakath, yearly reports etc",
        tages: ["Material UI", "Authjs", "Redux", "MUI Datagrid", "Mongodb"],
        github: "https://github.com/",
        link: "https://github.com/",
      },
    ],
  },
  {
    name: "JAVA",
    data: [
      {
        title: "Hospital Management System",
        desc: "Web based HMS. The hand-on project based on Spring, a Java framework, with MySQL database. Front side in Boostrap. Main features are about the doctor appointment. ",
        tages: ["JSP", "MySQL", "Servlet", "Spring", "Bootstrap", "JavaScript"],
        github:
          "https://github.com/hukdeveloper/Hospital-Management-System-Java-",
        link: "https://github.com/hukdeveloper/Hospital-Management-System-Java-",
      },
      {
        title: "Pharmacy App",
        desc: "A stand-alone desktop application for managing medicines that include sells, purchases with the additional features of Company, Dealer details. Includes two actors the Admin and the User.Just for educational, academic and practice practice.",
        tages: ["Java", "MySQL", "JavaSwing", "Netbeans"],
        github:
          "https://github.com/hukdeveloper/Pharmacy-Project-mini-project-",
        link: "https://github.com/hukdeveloper/Pharmacy-Project-mini-project-",
      },
    ],
  },

  {
    name: "NODE",
    data: [
      {
        title: "Business Dashboard",
        desc: "The complete professional dashboard builds in React + Material UI with thesupport of some other libraries such as Nivo, Date Packer, MUI Grid and others",
        tages: ["Mongodb", "Material UI", "React", "MERN"],
        link: "https://github.com/hukdeveloper/Full-Stack-MERN-Ecommerce-Dashboard",
        github:
          "https://github.com/hukdeveloper/Full-Stack-MERN-Ecommerce-Dashboard",
      },
    ],
  },
  {
    name: "REACT",
    data: [
      {
        title: "HUK Portfolio",
        desc: "My personnel website that includes everything about myself. Like General Information, Working experience, Projects, Resume and much more. Also developed voluntarily for some professors.",
        tages: ["Nextjs", "React", "Material UI", "Prime React"],
        link: "https://engrhuk.vercel.app/",
        github: "https://github.com/hukdeveloper/engrhuk",
      },
      {
        title: "Air BnB Clone",
        desc: "A static page clone of Airbnb using React and Material UI. It is not dynamic but can easily be integrated with the backend developed in any language. Inspired from Lama Dev.",
        tages: ["Material UI", "SCSS"],
        github: "https://hukairbnd.netlify.app/",
        link: "https://hukairbnd.netlify.app/",
      },
    ],
  },
];

export const GetCategory = ({ data, isAll }) => {
  const theme = useTheme();
  const match = useMediaQuery("max-width:600px");
  const match1 = useMediaQuery("max-width:400px");
  const match2 = useMediaQuery("max-width:200px");
  return data.data.map((item, key) => (
    <Stack
      direction="column"
      spacing={1}
      key={key}
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: theme.shadows[4],
        maxWidth: match ? 340 : match1 ? 300 : match2 ? "auto" : 350,
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
            "@media (max-width:356px)": {
              transform: "translate(60%, -300%) !important",
            },
          }}
        >
          <Link href={item.github} target="_blank">
            <IconButton size="large">
              <GitHub />
            </IconButton>
          </Link>
          <Link href={item.link} target="_blank">
            <IconButton size="large">
              <RemoveRedEye />
            </IconButton>
          </Link>
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
