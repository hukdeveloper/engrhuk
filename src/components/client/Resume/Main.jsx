"use client";

import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { mainData } from "@/utils/resumeData";

const Main = () => {
  const theme = useTheme();

  return (
    <Box
      // maxWidth="100%"
      sx={{
        display: "flex",
        gap: 2,
        "@media (max-width:700px)": {
          flexDirection: "column-reverse",
          alignItems: "center",
        },
        ".MuiAvatar-root": {
          maxWidth: { xs: 280, md: 300, lg: 500 },
          maxHeight: { xs: 280, md: 300, lg: 500 },
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Box display="flex" flexDirection="column" width="100%">
        {mainData.personel.map((item, key) => (
          <Stack
            direction="row"
            key={key}
            sx={{
              bgcolor: !item.isStripped
                ? theme.palette.grey[100]
                : theme.palette.grey[500],
            }}
          >
            <Typography variant="body1" minWidth={120} p="8px">
              {item.title}
            </Typography>
            <Typography variant="body1" minWidth={120} p="8px">
              {item.value}
            </Typography>
          </Stack>
        ))}
      </Box>
      <Avatar src="/assets/myprofile.jpg" variant="rounded" />
    </Box>
  );
};

export default Main;
