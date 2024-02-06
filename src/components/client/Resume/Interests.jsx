"use client";

import {
  Book,
  CodeOutlined,
  School,
  SportsCricket,
  Work,
} from "@mui/icons-material";
import { Chip, Container } from "@mui/material";

const Interests = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
      }}
    >
      <Chip icon={<CodeOutlined />} variant="outlined" label="Coding" />
      <Chip icon={<Book />} variant="outlined" label="Novels Reading" />
      <Chip icon={<SportsCricket />} variant="outlined" label="Cricket" />
      <Chip icon={<Work />} variant="outlined" label="Social Work" />
      <Chip icon={<School />} variant="outlined" label="Teaching" />
    </Container>
  );
};

export default Interests;
