import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ReturnButton from '../components/ReturnButton'

export default function LibraryPage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.library')}</Typography><br/>
            <Typography variant="body1" component="p">
            <div dangerouslySetInnerHTML={{__html: t('library.content1')}}></div> <Link href={String(t('library.ufscSite'))} target="_blank" rel="noreferrer" underline="hover">{t('library.ufscSite')}</Link>.
            </Typography><br/>
            <Typography variant="body1" component="p">
            <div dangerouslySetInnerHTML={{__html: t('library.content2')}}></div>
            </Typography><br/>
            <Typography variant="body1" component="p">
            {t('library.content3')}
            </Typography><br/>
            <Typography variant="body1" component="p">
            <div dangerouslySetInnerHTML={{__html: t('library.content4')}}></div>
            </Typography><br/>
            <Typography variant="body1" component="p">
                {t('library.content5')}
            </Typography>
        </>
    );
}
