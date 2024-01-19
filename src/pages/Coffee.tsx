import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ReturnButton from '../components/ReturnButton'

export default function CoffeePage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.coffee')}</Typography><br/>
            <Typography variant="body1" component="p">
                {t('coffee.content1')}
            </Typography><br/>
            <Typography variant="h2" component="h2">Music</Typography><br/>
            <Typography variant="body1" component="p">
                <span dangerouslySetInnerHTML={{__html: t('coffee.content2')}} />
                {' '}
                <Link href="https://petalaquinto.com.br" target="_blank" rel="noreferrer" underline="hover">
                    https://petalaquinto.com.br
                </Link>{t('others.inPortuguese')}
                {', '}
                <Link href="https://open.spotify.com/artist/4GFANHG6Hljpi1JHKde9hJ?si=rXaj6zFfSnS-SVAHfpozgA" target="_blank" rel="noreferrer" underline="hover">
                    Spotify
                </Link>
                {' ' + t('others.or') + ' '}
                <Link href="https://www.youtube.com/channel/UCMBGcJA16AGJM-OMk0QYekw" target="_blank" rel="noreferrer" underline="hover">
                    YouTube
                </Link>
                {' ' + t('coffee.content3') + ' '}
                <Link href="https://www.instagram.com/petalaquinto/" target="_blank" rel="noreferrer" underline="hover">
                    Instagram
                </Link>.
            </Typography><br/>
            <Typography variant="body1" component="p">
                {t('coffee.content4')}
            </Typography><br/>
            <Typography variant="h2" component="h2">{t('coffee.volunteering')}</Typography><br/>
            <Typography variant="body1" component="p">
                {t('coffee.content5')}
            </Typography><br/>
            <Typography variant="body1" component="p">
                <span dangerouslySetInnerHTML={{__html: t('coffee.content6')}} />
                {' '}
                <Link href="https://www.instagram.com/escoladosanjos/" target="_blank" rel="noreferrer" underline="hover">
                    @escoladosanjos
                </Link>.
            </Typography><br/>
            <Typography variant="body1" component="p">
                <span dangerouslySetInnerHTML={{__html: t('coffee.content7')}} />
            </Typography>
        </>
    );
}
