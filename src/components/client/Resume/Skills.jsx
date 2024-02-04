"use client";

import { Chip, Container } from "@mui/material";
import { mainData } from "../../../utils/resumeData";

const Skills = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {mainData.skills.map((item, key) => (
        <Chip label={item.title} key={key} />
      ))}
    </Container>
  );
};

export default Skills;
