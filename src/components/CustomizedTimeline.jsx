import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsDot } from "react-icons/bs";

import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <>
      <div className="bg-white py-16 timeline shadow">
        <h1 className="text-6xl font-bold mb-16 text-center">Timeline</h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#000" }}
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
              sx={{ m: "auto 0", color: "#000" }}
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
              sx={{ m: "auto 0", color: "#000" }}
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
              sx={{ m: "auto 0", color: "#000" }}
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
              <Typography>E-commerce Application</Typography>
            </TimelineContent>
          </TimelineItem>



          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#000" }}
              variant="body2"
              color="text.secondary"
            >
              {" "}
              <h1 className="text-xl"> Apr 2023 - May 2023</h1>
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
                Project-2
              </Typography>
              <Typography>Learning Management System</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#000" }}
              variant="body2"
              color="text.secondary"
            >
              {" "}
              <h1 className="text-xl">Jun 19, 2023 - Sep 19, 2023</h1>
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
                Internship
              </Typography>
              <Typography>Completed Full Stack Internship (MERN Stack)</Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", color: "#000" }}
              variant="body2"
              color="text.secondary"
            >
              {" "}
              <h1 className="text-xl">Sep 20, 2023 - Present</h1>
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
                Micro Service + Second Internship
              </Typography>
              <Typography>Working on Micro Services Application (MERN Stack)</Typography>
            </TimelineContent>
          </TimelineItem>




        </Timeline>
      </div>{" "}
    </>
  );
}
