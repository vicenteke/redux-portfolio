import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function ProjectsTimeline() {
    const data = [
        {
            key: "portfolio",
            name: "Game Portfolio",
            skills: "JavaScript, ReactJS, Redux, SASS, Material UI",
            date: '2022',
            content: <><i>Game Prtfolio</i> is actually this page, as one might presume. It is essentially a front-end project, with no backend, which helped me develop a better knowledge of JavaScript, React and Redux. It's also developed over a framework named Material UI: an implementation of Google's Material Design guidelines.</>
        },
        {
            key: "air_quality",
            name: "Air Quality Mapping System",
            skills: "IoT, C/C++, embedded systems, microcontrollers",
            date: '2021',
            content: <>Personal project that acquires data about the air quality and sends that data to an <strong>Android app</strong> using a microcontroller and a Bluetooth module. It was a really complete system, going from electronic and mechanical hardware to a mobile app and storing data to the cloud. The app would control the frequency of the data acquaintance, store it on a <strong>Firebase cloud NoSQL database</strong> and display the quality on a Google Maps view. The system was completely mobile, so one could attach its 3D printed case to a vehicle and map the air quality of a certain region. This project originated a paper which was published on the <i>II Brazilian Interdisciplinary Congress in Science and Technology</i>.</>
        },
        {
            key: "lora_lisha",
            name: "LoRa Mesh",
            skills: "IoT, C/C++, embedded systems, hardware design",
            date: '2020',
            content: <>Research made at Software/Hardware Integration Lab (LISHA) UFSC aiming to integrate a LoRa Mesh module to the microcontroller and operating system developed at the lab. LoRa is a protocol for network communication focused on IoT, with a wide range and low power consumption. <i>Mesh</i> relates to the topology adopted by that module, and it's not an usual topology for LoRa. I ended up developing abstractions in C/C++ and a Printed Circuit Board (PCB) for that integration with the module.</>
        },
        {
            key: "think_tank",
            name: "Think Tank",
            skills: "Soft skills, Leadership, Design Thinking, Theory U",
            date: '2018 - 2019',
            content: <>It's a project idealized by the NGO <i>Projeto Resgate</i>, where leaders from several organizations and college students develop soft skills by applying Design Thinking and Theory U to solve real-world problems. First, I took part in the project as usual, then I moved into organizing it and training the leaders along with the creators of the project. Learn about the Think Tank Project: <Link href="https://www.projetoresgate.org.br/en/thinktankprojetoresgate" target="_blank" rel="noreferrer" underline="hover">{'https://www.projetoresgate.org.br/en/thinktankprojetoresgate'}</Link>.</>
        },
        {
            key: "kimak",
            name: "Kimak's Website",
            skills: "PHP, MySQL, Bootstrap, JQuery, web development (HTML, CSS and JS)",
            date: '2020',
            content: <>This was my first real-life CMS website project, developed using HTML, CSS, JavaScript, PHP, MySQL, Bootstrap and JQuery. You can find it at <Link href="https://www.kimak.com.br" target="_blank" rel="noreferrer" underline="hover">{'https://www.kimak.com.br'}</Link>.</>
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
                        <Typography variant="h6" component="span">{item.name}</Typography>
                        <Typography>{item.skills}</Typography>
                        <Typography component="small" color="text.secondary">{item.date}</Typography>
                    </TimelineContent>
                </TimelineItem>
                )
            )}
        </Timeline>
        </React.Fragment>
    );
}
