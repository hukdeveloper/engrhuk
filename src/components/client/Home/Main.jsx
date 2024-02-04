"use client";

import {
  ContactEmergency,
  DocumentScanner,
  FormatQuote,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SocialIcons from "../SocialIcons";

const Main = () => {
  const theme = useTheme();
  const match = useMediaQuery("(max-width:333px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        // justifyContent={"center"}
        minHeight={300}
        className="bgGradient"
        width="100%"
        p={"30px 10px"}
      >
        <SocialIcons />
        <Typography
          variant="h5"
          fontWeight={700}
          color={theme.palette.grey[800]}
          mt={2}
        >
          Haris Umar Khattak
        </Typography>
        <Typography
          variant="h6"
          color={theme.palette.grey[700]}
          mt={1}
          textAlign="center"
        >
          Web Developer & Software Engineer
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.grey[700]}
          maxWidth={"800px"}
          textAlign="center"
        >
          <FormatQuote /> As a dedicated web and software developer, I thrive on
          crafting modern and intuitive applications. My expertise in Next.js,
          React, Material UI, MongoDB, MySQL, and Java empowers me to tackle new
          challenges and seize opportunities for continuous learning.
        </Typography>
        <Stack direction={match ? "column" : "row"} mt={2} spacing={2}>
          <Button startIcon={<DocumentScanner />} variant="outlined">
            Get Resume
          </Button>
          <Button
            startIcon={<ContactEmergency />}
            variant="outlined"
            color="success"
          >
            Contact Now!
          </Button>
        </Stack>
      </Box>
      <Box
        display="flex"
        // mt={5}
        flexWrap="wrap"
        gap={{ xs: 1, md: 3 }}
        rowGap={{ xs: 4, md: 1 }}
        justifyContent={"center"}
        sx={{
          backgroundImage: `url(${"/assets/homebg.jpeg"})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pt: 7,
          pb: 7,
          width: "100%",
          ".MuiPaper-root": {
            p: "20px 15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "90%", sm: "auto" },
            maxWidth: "205px",
            maxHeight: "120px",
          },
          ".MuiAvatar-root": {
            height: 60,
            width: 60,
            transform: "translateY(-50px)",
          },
          ".MuiTypography-root": {
            color: theme.palette.grey[700],
            transform: "translateY(-50px)",
          },
        }}
      >
        <Paper elevation={2}>
          <Avatar src="/assets/frontend.png" />
          <Typography variant="body1" fontWeight={500}>
            Frontend Developer
          </Typography>
          <Typography variant="caption" textAlign="center">
            (Nextjs, React, Material UI, Redux, JavaScript)
          </Typography>
        </Paper>
        <Paper elevation={2}>
          <Avatar src="/assets/bacend.png" />
          <Typography variant="body1" fontWeight={500}>
            Backend & Database
          </Typography>
          <Typography variant="caption" textAlign="center">
            (Node, Next, Express, Authjs, Mongodb, MySQL, Java)
          </Typography>
        </Paper>
        <Paper elevation={2}>
          <Avatar src="/assets/software.png" />
          <Typography variant="body1" fontWeight={500}>
            Desktop Applications
          </Typography>
          <Typography variant="caption" textAlign="center">
            (Java, JavaFx, JavaSwing, AWT, MySQL, Netbeans)
          </Typography>
        </Paper>
        <Paper elevation={2}>
          <Avatar src="/assets/java.png" />
          <Typography variant="body1" fontWeight={500}>
            Programming Instructor
          </Typography>
          <Typography variant="caption" textAlign="center">
            (Java, Fundamental & OOP, Web Development)
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Main;
