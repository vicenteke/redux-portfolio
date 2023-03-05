import React from 'react';
import { useTranslation } from 'react-i18next';

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
    const [t, i18n] = useTranslation('common');

    const data = [
        {
            key: "petalaquinto",
            name: t('projects.petalaquinto.name'),
            skills: t('projects.petalaquinto.skills'),
            date: '2023',
            content: <><div>{t('projects.petalaquinto.content')} <Link href="https://petalaquinto.com.br" target="_blank" rel="noreferrer" underline="hover" variant="subtitle1">https://petalaquinto.com.br</Link>.</div></>
        },
        {
            key: "portfolio",
            name: t('projects.portfolio.name'),
            skills: t('projects.portfolio.skills'),
            date: '2022',
            content: <div dangerouslySetInnerHTML={{__html: t('projects.portfolio.content')}}></div>
        },
        {
            key: "air_quality",
            name: t('projects.airQuality.name'),
            skills: t('projects.airQuality.skills'),
            date: '2021',
            content: <div dangerouslySetInnerHTML={{__html: t('projects.airQuality.content')}}></div>
        },
        {
            key: "lora_lisha",
            name: t('projects.loraLisha.name'),
            skills: t('projects.loraLisha.skills'),
            date: '2020',
            content: <div dangerouslySetInnerHTML={{__html: t('projects.loraLisha.content')}}></div>
        },
        {
            key: "think_tank",
            name: t('projects.thinkTank.name'),
            skills: t('projects.thinkTank.skills'),
            date: '2018 - 2019',
            content: <><div dangerouslySetInnerHTML={{__html: t('projects.thinkTank.content')}}></div><Link href="https://www.projetoresgate.org.br/en/thinktankprojetoresgate" target="_blank" rel="noreferrer" underline="hover">{'https://www.projetoresgate.org.br/en/thinktankprojetoresgate'}</Link>.</>
        },
        {
            key: "kimak",
            name: t('projects.kimak.name'),
            skills: t('projects.kimak.skills'),
            date: '2020',
            content: <><div dangerouslySetInnerHTML={{__html: t('projects.kimak.content')}}></div><Link href="https://www.kimak.com.br" target="_blank" rel="noreferrer" underline="hover">{'https://www.kimak.com.br'}</Link>.</>
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
