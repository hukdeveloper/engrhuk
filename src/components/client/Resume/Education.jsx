"use client";

import {
  Avatar,
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { mainData } from "@/utils/resumeData";

const Education = () => {
  const match = useMediaQuery("(max-width:793px)");
  return (
    <Container
      sx={{
        display: "grid",
        p: match && "0",
        gap: 2,

        gridTemplateColumns: match ? "auto" : "auto auto",
        flexWrap: { xs: "wrap", md: "no-wrap" },
        ".MuiPaper-root": {
          display: "flex",
          p: "25px 15px",
          gap: 2,
          width: "100%",
          ".MuiAvatar-root": {
            height: 75,
            width: 75,
          },
        },
      }}
    >
      {mainData.education.map((item, key) => (
        <Paper elevation={1} key={key}>
          <Avatar src={item.image} />
          <Stack direction="column" width="100%">
            <Box
              display="flex"
              gap={2}
              justifyContent="space-between"
              alignItems="center"
              sx={{
                "@media (max-width:446px)": {
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "flex-start",
                },
              }}
            >
              <Typography variant="body1">{item.title}</Typography>
              <Chip label={`${item.from}-${item.to}`} />
              {/* <Typography variant="body1">
                {item.from}-{item.to}
              </Typography> */}
            </Box>
            <Typography variant="caption">{item.institue}</Typography>
            <Typography variant="subtitle1" mt={1}>
              {item.address}, {item.country}
            </Typography>
          </Stack>
        </Paper>
      ))}
    </Container>
  );
};

export default Education;
