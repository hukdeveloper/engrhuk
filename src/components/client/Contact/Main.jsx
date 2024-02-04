"use client";

import { Email, LocationCity, MobileOff, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { montserrat } from "../../../utils/font";
import Logo from "../../global/Logo";

const data = [
  {
    title: "Email Address",
    icon: <Email />,
    value: "haris29268@gmail.com",
  },
  {
    title: "Phone No",
    icon: <WhatsApp />,
    value: "+92-3478481231",
  },
  {
    title: "Address",
    icon: <LocationCity />,
    value: "Karak, Pakistan",
  },
];

const Main = () => {
  const matches = useMediaQuery("(max-width:782px)");
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        flexDirection: matches && "column",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: matches ? "100%" : "60%",
          ".MuiBox-root": {
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            gap: 2,
          },
        }}
      >
        {data.map((item, key) => (
          <Box
            key={key}
            p={1}
            sx={{
              border: "2px solid #3C72FF",
              borderRadius: 2,
            }}
          >
            <Box className="iconGradient">{item.icon}</Box>
            <Stack spacing={0.1}>
              <Typography variant="body1">{item.title}</Typography>
              <span className={montserrat.className}>{item.value}</span>
            </Stack>
          </Box>
        ))}
      </Stack>
      <Paper
        sx={{
          p: 2,
          width: "100%",
        }}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <TextField
            type="text"
            fullWidth
            placeholder="Haris Umar"
            required
            variant="filled"
            label="Name"
            size="small"
          />
          <Stack direction="row" spacing={1}>
            <TextField
              type="email"
              fullWidth
              placeholder="example@gmail.com"
              required
              variant="filled"
              label="Email"
              size="small"
            />
            <TextField
              type="text"
              fullWidth
              placeholder="+92-XXX-XXXXXXX"
              required
              variant="filled"
              label="Phone"
              size="small"
            />
          </Stack>
          <TextField
            type="text"
            fullWidth
            lable="Message"
            placeholder="Example"
            required
            rows={6}
            multiline
            variant="filled"
            size="small"
          />
          <Button variant="outlined" color="success">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Main;
