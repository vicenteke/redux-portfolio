import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton'
import WorkTimeline from '../components/WorkTimeline';

export default function MeetingRoomPage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.meetingRoom')}</Typography><br/>

            <Typography variant="body1" component="p">
                {t('meetingRoom.content1')}
            </Typography><br/>
            <br/>
            <WorkTimeline />
            <br/>
        </>
    );
}
