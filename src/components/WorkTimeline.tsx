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

export default function WorkTimeline() {
    const [t, i18n] = useTranslation('common');
    const data = [
        {
            key: "redsoft_dev",
            job: t('work.redsoft.job'),
            company: t('work.redsoft.company'),
            date: `2023 - ${t('others.now')}`,
            content: <>{t('work.redsoft.content')}</>,
            image: '/resources/img/pictures/redsoft.png',
        },
        {
            key: "pollux_dev",
            job: t('work.pollux.job'),
            company: t('work.pollux.company'),
            date: `2021 - 2023`,
            content: <>{t('work.pollux.content')}</>,
            image: '/resources/img/pictures/pollux.png',
        },
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
                        {item.image &&
                            <img
                                src={item.image}
                                width='100%'
                                height='auto'
                                style={{ marginTop: '10px' }}
                            />
                        }
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
