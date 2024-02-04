"use client";

import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";

const Services = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ xs: 1, md: 2 }}
      sx={{
        ".MuiStack-root": {
          maxWidth: "250px",
          boxShadow: theme.shadows[1],
          minHeight: "300px",
          border: `4px solid ${theme.palette.grey[300]}`,
          borderRadius: 2,
          cursor: "pointer",
          ":hover": {
            bgcolor: theme.palette.grey[100],
            border: `4px solid ${theme.palette.info.main}`,
          },
        },
        ".MuiAvatar-root": {
          height: "150px",
          width: "100%",
          borderRadius: 0,
        },
        ".MuiTypography-root": {
          p: "0 10px",
          color: theme.palette.grey[700],
        },
      }}
    >
      <Stack>
        <Avatar src="/assets/website.jpg" variant="rounded" />
        <Typography variant="button" mt={0.5} fontWeight={700}>
          Website Builder Services
        </Typography>
        <Typography variant="body2" marginBottom="15px">
          Crafting bespoke websites tailored to your needs—whether it's for
          e-commerce, business, or personal use.
        </Typography>
      </Stack>
      <Stack>
        <Avatar src="/assets/solutions.jpg" variant="rounded" />
        <Typography variant="button" mt={0.5} fontWeight={700}>
          Desktop Apps Solutions
        </Typography>
        <Typography variant="body2" marginBottom="15px">
          Delivering efficient desktop applications, including point-of-sale
          systems, for seamless business operations.
        </Typography>
      </Stack>
      <Stack>
        <Avatar src="/assets/fixing.png" variant="rounded" />
        <Typography variant="button" mt={0.5} fontWeight={700}>
          Site Fixing and Maintenance
        </Typography>
        <Typography variant="body2" marginBottom="15px">
          Swift and reliable fixes, updates, and maintenance for your existing
          websites, ensuring optimal performance.
        </Typography>
      </Stack>
      <Stack>
        <Avatar src="/assets/assest.png" variant="rounded" />
        <Typography variant="button" mt={0.5} fontWeight={700}>
          Programming Assessment
        </Typography>
        <Typography variant="body2" marginBottom="15px">
          Providing expert assessments in programming, specializing in
          object-oriented programming and Java proficiency.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Services;
