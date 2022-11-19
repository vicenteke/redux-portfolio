import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

export default function WorkTimeline() {
    const data = [
        {
            key: "pollux_dev",
            job: "Software Developer",
            company: "Pollux, Part of Accenture - Joinville, Brazil",
            date: '2021 - Now',
            content: <>Full-Stack developer, not only with backend and frontend responsibilities, but also handling IIoT with RaspberryPi's and servers setups. The company is focused on robotics and automation as part of Accenture's Industry X services. The stack is basically comprised of Python, relational databases (PostgreSQL and SQLite), Bootstrap and jQuery.</>
        },
        {
            key: "ufsc_lisha",
            job: "Student Researcher",
            company: "Software/Hardware Integration Lab (LISHA) UFSC - Joinville, Brazil",
            date: '2019 - 2020',
            content: <>Researches on embedded systems using microcontrollers. The first research was concerned with DDR memories for highly intense data flux from microcontrollers, then moved to to IoT with a LoRa network implemented as a mesh topology. The code was made in C and C++, as it was an embedded environment.</>
        }
    ]
    return (
        <React.Fragment>
        <Timeline position="alternate">
            {data.map((item) =>
                (
                <TimelineItem key={item.key}>
                    <TimelineOppositeContent color="text.secondary">
                        <br/>
                        {item.content}
                        <br/>
                        <br/>
                        <br/>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">{item.job}</Typography>
                        <Typography>{item.company}</Typography>
                        <Typography component="small" color="text.secondary">{item.date}</Typography>
                    </TimelineContent>
                </TimelineItem>
                )
            )}
        </Timeline>
        </React.Fragment>
    );
}
