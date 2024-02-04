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
import { mainData } from "../../../utils/resumeData";
import Link from "next/link";
import { montserrat } from "../../../utils/font";

const Specialization = () => {
  const match = useMediaQuery("(max-width:894px)");

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
          "@media (max-width:325px)": {
            flexDirection: "column",
            alignItems: "center",
          },
          ".MuiAvatar-root": {
            height: 75,
            width: 75,
          },
        },
      }}
    >
      {mainData.specializations.map((item, key) => (
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
              <Chip label={`${item.date}`} />
            </Box>
            <Typography variant="caption">{item.institue}</Typography>
            <Typography variant="subtitle1" mt={1}>
              Issued by {item.issuedBy}{" "}
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                maxWidth: "100%",
                overflow: "hidden",
                a: {
                  fontSize: { xs: 10, sm: 14 },
                },
                "@media (max-width:325px)": {
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <span className={montserrat.className}>LicenseID - </span>
              <Link href={item.link} target="_blank">
                {item.licendID}
              </Link>
            </Stack>
          </Stack>
        </Paper>
      ))}
    </Container>
  );
};

export default Specialization;
