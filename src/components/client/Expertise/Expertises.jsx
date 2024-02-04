"use client";

import {
  AddBusiness,
  AirplaneTicket,
  CorporateFare,
  HealthAndSafety,
  Person,
  School,
  ShoppingCart,
} from "@mui/icons-material";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

const expertise = [
  {
    icon: <AddBusiness />,
    title: "E-Commerce Applications",
  },
  {
    icon: <AirplaneTicket />,
    title: "Booking & Traveling Websites",
  },
  {
    icon: <School />,
    title: "Educational LMS",
  },
  {
    icon: <ShoppingCart />,
    title: "Point of Sale Softwares",
  },
  {
    icon: <Person />,
    title: "Personnel Blogs & Portfolio",
  },
  {
    icon: <CorporateFare />,
    title: "Enterprise & Bussiness Apps",
  },
  {
    icon: <HealthAndSafety />,
    title: "Health & Pharmacy Websites",
  },
];
const Expertises = () => {
  const theme = useTheme();
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
          borderRadius: "54% 46% 53% 47% / 28% 33% 67% 72%",
          backgroundImage: "linear-gradient(45deg,#B8F3C1 0%,#298a6c 100%)",
        },
        ".MuiStack-root": {
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 2,
          //   border: 1,
          borderRadius: 1,
          boxShadow: theme.shadows[1],
          width: 200,
          height: 180,
        },
        ".MuiSvgIcon-root": {
          fontSize: 35,
          color: "#1f0076",
        },
      }}
    >
      {expertise.map((item, key) => (
        <Stack key={key} spacing={1}>
          <Box bgcolor={item.bgcolor}>{item.icon}</Box>
          <Typography variant="body1" textAlign="center">
            {item.title}
          </Typography>
        </Stack>
      ))}
    </Container>
  );
};

export default Expertises;
