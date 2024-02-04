"use client";

import { Chip, Container } from "@mui/material";
import { mainData } from "../../../utils/resumeData";

const OrgSkills = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {mainData.orgSkills.map((item, key) => (
        <Chip
          icon={item.icon}
          label={item.title}
          key={key}
          variant="outlined"
        />
      ))}
    </Container>
  );
};

export default OrgSkills;
