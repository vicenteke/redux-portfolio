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
            key: "pollux_dev",
            job: t('work.pollux.job'),
            company: t('work.pollux.company'),
            date: `2021 - ${t('others.now')}`,
            content: <>{t('work.pollux.content')}</>
        },
        {
            key: "ufsc_lisha",
            job: t('work.lisha.job'),
            company: t('work.lisha.company'),
            date: '2019 - 2020',
            content: <>{t('work.lisha.content')}</>
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
