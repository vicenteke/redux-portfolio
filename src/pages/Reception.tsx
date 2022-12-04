import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton'
import FAQ from '../components/FAQ'

export default function ReceptionPage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.reception')}</Typography><br/>

            <Typography variant="body1" component="p">
                {t('reception.content1')}
            </Typography><br/>
            <Typography variant="body1" component="p">
                {t('reception.content2')}
            </Typography>
            <ul>
                <li>{t('reception.content3')}</li>
                <li>{t('reception.content4')}</li>
                <li>{t('reception.content5')}</li>
            </ul>
            <Typography variant="body1" component="p">
                {t('reception.content6')}
            </Typography><br/>
            <br/>
            <Typography variant="h2" component="h2">FAQ</Typography><br/>
            <FAQ />
        </>
    );
}
