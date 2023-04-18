import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsDot } from "react-icons/bs";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <>
      <div className="bg-[#011431] text-slate-200 py-16 timeline border-slate-800 border-b shadow-lg">
        <h1 className="text-6xl font-bold mb-16 text-center">Timeline</h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#fff" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <h1 className="text-xl">2020 - present</h1>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="primary">
                <BsDot />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <h1 className="text-2xl">B.Tech</h1>
              <h1 className="text-xl">
                Pursuing B.Tech With Information Technology
              </h1>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#fff" }}
              variant="body2"
              color="text.secondary"
            >
              {" "}
              <h1 className="text-xl"> may 2022 - aug 2022</h1>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="primary">
                <BsDot />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Frontend Development
              </Typography>
              <Typography>HTML,CSS,React</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#fff" }}
              variant="body2"
              color="text.secondary"
            >
              <h1 className="text-xl">sep 2022 - Jan 2023</h1>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="primary">
                <BsDot />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Backend Development
              </Typography>
              <Typography>NodeJs,Express,MongoDB</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#fff" }}
              variant="body2"
              color="text.secondary"
            >
              {" "}
              <h1 className="text-xl"> Feb 2023 - Mar 2023</h1>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="primary">
                <BsDot />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Project-1
              </Typography>
              <Typography>Code with John</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>{" "}
    </>
  );
}
