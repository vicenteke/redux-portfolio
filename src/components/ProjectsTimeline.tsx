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
            key: "vehicledevaluation",
            name: t('projects.vehicledevaluation.name'),
            skills: t('projects.vehicledevaluation.skills'),
            date: '2024',
            content: <div>
                {t('projects.vehicledevaluation.content')}{' '}
                <Link href="https://github.com/vicenteke/vehicle-devaluation-assessor"
                        target="_blank"
                        rel="noreferrer"
                        underline="hover"
                        variant="subtitle1"
                        whiteSpace='nowrap'>
                    https://github.com/vicenteke/vehicle-devaluation-assessor
                </Link>.
            </div>,
            image: '/resources/img/pictures/vehicle-devaluation-assessor.png',
        },
        {
            key: "worldhousingapi",
            name: t('projects.worldhousingapi.name'),
            skills: t('projects.worldhousingapi.skills'),
            date: '2024',
            content: <div>
                {t('projects.worldhousingapi.content')}{' '}
                <Link href="https://github.com/vicenteke/world-housing-api"
                        target="_blank"
                        rel="noreferrer"
                        underline="hover"
                        variant="subtitle1"
                        whiteSpace='nowrap'>
                    https://github.com/vicenteke/world-housing-api
                </Link>.
            </div>,
            image: '/resources/img/pictures/world-housing-api.png',
        },
        {
            key: "petalaquinto",
            name: t('projects.petalaquinto.name'),
            skills: t('projects.petalaquinto.skills'),
            date: '2023',
            content: <div>
                {t('projects.petalaquinto.content')}{' '}
                <Link href="https://petalaquinto.com.br" target="_blank" rel="noreferrer" underline="hover" variant="subtitle1">
                    https://petalaquinto.com.br
                </Link>.
            </div>,
            image: '/resources/img/pictures/petala-quinto.png',
        },
        {
            key: "portfolio",
            name: t('projects.portfolio.name'),
            skills: t('projects.portfolio.skills'),
            date: '2022',
            content: <span dangerouslySetInnerHTML={{__html: t('projects.portfolio.content')}} />,
            image: '/resources/img/pictures/portfolio.png',
        },
        {
            key: "air_quality",
            name: t('projects.airQuality.name'),
            skills: t('projects.airQuality.skills'),
            date: '2021',
            content: <span dangerouslySetInnerHTML={{__html: t('projects.airQuality.content')}} />,
            image: '/resources/img/pictures/air-quality-app.png',
        },
        {
            key: "lora_lisha",
            name: t('projects.loraLisha.name'),
            skills: t('projects.loraLisha.skills'),
            date: '2020',
            content: <span dangerouslySetInnerHTML={{__html: t('projects.loraLisha.content')}} />
        },
        {
            key: "think_tank",
            name: t('projects.thinkTank.name'),
            skills: t('projects.thinkTank.skills'),
            date: '2018 - 2019',
            content: <>
                <span dangerouslySetInnerHTML={{__html: t('projects.thinkTank.content')}} />
                {' '}
                <Link href="https://www.projetoresgate.org.br/en/thinktankprojetoresgate" target="_blank" rel="noreferrer" underline="hover">
                    https://www.projetoresgate.org.br/en/thinktankprojetoresgate
                </Link>.
            </>
        },
        {
            key: "kimak",
            name: t('projects.kimak.name'),
            skills: t('projects.kimak.skills'),
            date: '2020',
            content: <span dangerouslySetInnerHTML={{__html: t('projects.kimak.content')}} />
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
                        {item.image && <img src={item.image} width='100%' height='auto'/>}
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
