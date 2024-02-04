"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { timelineItemClasses } from "@mui/lab/TimelineItem";

import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { mainData } from "@/utils/resumeData";
import Link from "next/link";

const WorkExperience = () => {
  const match = useMediaQuery("(max-width:918px)");
  return (
    // <Container>
    <Timeline
      position="alternate"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: match && 0,
          padding: match && 0,
          overflow: "hidden",
        },
      }}
    >
      {mainData.work.map((item, key) => (
        <TimelineItem key={key}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                p: 2,
                // a: {
                //   fontSize: 10,
                // },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                alignItems="center"
                sx={{
                  "@media (max-width:523px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                }}
              >
                <Typography variant="button" fontSize={18}>
                  {item.position}
                </Typography>
                <Typography variant="body2">
                  ({item.startDate}) to ({item.endDate})
                </Typography>
              </Box>

              <Typography variant="caption">{item.employer}</Typography>
              <Typography variant="body1" textAlign="left" mt={1} mb={1}>
                {item.desc}
              </Typography>
              <Link href={item.url} target="_blank">
                Vist Website
              </Link>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    //   </Container>
  );
};

export default WorkExperience;
