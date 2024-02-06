"use client";

import { Chip, Container } from "@mui/material";

const Languages = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
      }}
    >
      <Chip variant="filled" label="English (fluent)" />
      <Chip variant="filled" label="Urdu (national)" />
      <Chip variant="filled" label="Pashto (native)" />
    </Container>
  );
};

export default Languages;
