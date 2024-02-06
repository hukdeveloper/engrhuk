"use client";

import { Radio, RadioButtonChecked } from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { mainData } from "../../../utils/resumeData";

const Volunteering = () => {
  const match = useMediaQuery("(max-width:918px)");
  return (
    <Container
      maxWidth="100%"
      sx={{
        ".MuiSvgIcon-root": {
          mt: 0.4,
        },
      }}
    >
      {mainData.volunteering.map((item, key) => (
        <Box display="flex" gap={2} key={key} p="10px 0">
          <RadioButtonChecked />
          <Stack direction="column">
            <Box display="flex" gap={1} justifyContent={"space-between"}>
              <Typography variant="h6">{item.title}</Typography>
              <Chip label={item.year} />
            </Box>
            <Typography variant="caption">{item.employer}</Typography>
            <Typography variant="body1" mt={1}>
              {item.desc}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Container>
  );
};

export default Volunteering;
