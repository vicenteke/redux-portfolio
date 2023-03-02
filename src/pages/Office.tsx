import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton'
import ProjectsTimeline from '../components/ProjectsTimeline';


export default function OfficePage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.office')}</Typography><br/>
            <Typography variant="body1" component="p">
                {t('office.content1')}
            </Typography><br/>
            <br/>
            <ProjectsTimeline />
            <br/>
        </>
    );
}
