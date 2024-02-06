"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import {
  ContactEmergency,
  DocumentScanner,
  Home,
  Work,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { changeSidebar } from "../redux/slice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector((data) => data.sidebarOpen);
  const theme = useTheme();
  const router = useRouter();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(changeSidebar(open));
  };
  const handleClick = (url) => {
    router.push(url);
    dispatch(changeSidebar(false));
  };

  const navItems = [
    {
      title: "Home",
      url: "/",
      icon: <Home />,
    },
    {
      title: "Resume",
      url: "/resume",
      icon: <DocumentScanner />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <ContactEmergency />,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: <Work />,
    },
  ];

  return (
    <Drawer
      open={openMenu}
      onClose={toggleDrawer(false)}
      sx={
        {
          // zIndex: 1111111,
        }
      }
    >
      <Box
        width={240}
        height="100vh"
        sx={{
          overflowX: "hidden",
          overflowY: "auto",

          bgcolor: theme.palette.grey[300],
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleClick(item.url)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
