"use client";

import { Container, useTheme } from "@mui/material";

const Wrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <Container
      componet="main"
      maxWidth="lg"
      sx={{
        flexGrow: 1,
        // bgcolor: theme.palette.grey[100],
        // boxShadow: theme.shadows[1],
        p: "0 !important",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 6,
      }}
    >
      {children}
    </Container>
  );
};

export default Wrapper;
