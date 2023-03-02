import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton';
import AvatarShop from '../components/AvatarShop';


export default function StorePage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.store')}</Typography><br/>

            <Typography variant="body1" component="p">
                {t('store.content1')}
            </Typography><br/>
            <AvatarShop />
        </>
    );
}
