"use client";

import { Avatar, Box, Container } from "@mui/material";

const Clients = () => {
  return (
    <Box
      display="flex"
      gap={2}
      justifyContent={"center"}
      alignItems="center"
      flexWrap="wrap"
      mt={1}
      sx={{
        ".MuiAvatar-root": {
          height: 200,
          width: 200,
          filter: "grayscale(1)",
          ":hover": {
            filter: "grayscale(0)",
          },
        },
      }}
    >
      <Avatar src="/assets/kiulogo.jpg" />
      <Avatar src="/assets/sslogo.jpeg" />
      <Avatar src="/assets/qec.png" />
    </Box>
  );
};

export default Clients;
