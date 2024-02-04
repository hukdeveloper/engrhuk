"use client";

import { Menu, WhatsApp } from "@mui/icons-material";
import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import Logo from "../global/Logo";
import { useRouter } from "next/navigation";

const navLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Skills & Expertise",
    link: "/expertise",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Resume",
    link: "/resume",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const isScreenMatch = useMediaQuery("(max-width:768px)");
  const router = useRouter();

  // const handleRouting = (route) => {
  //   window.open(route, "_blank");
  // };
  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        p: "5px 0",
        backdropFilter: "blur(4px)",
        width: "100%",
        borderRadius: 2,
        mt: 2,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {isScreenMatch ? (
          <Stack direction={"row"}>
            <IconButton>
              <Menu />
            </IconButton>
          </Stack>
        ) : (
          <Logo />
        )}
        {!isScreenMatch ? (
          <ButtonGroup variant="contained" size="small" color="inherit">
            {navLink.map((item, key) => (
              <Button key={key} onClick={() => router.push(item.link)}>
                {item.title}
              </Button>
            ))}
          </ButtonGroup>
        ) : (
          <Logo />
        )}
        <Tooltip title="Quick Contact">
          <IconButton color="success">
            <WhatsApp />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
