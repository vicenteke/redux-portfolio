import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import ReturnButton from '../components/ReturnButton'
import { Avatar } from '../features/avatar/Avatar';
import { incrementVisited } from '../features/coins/coinsSlice';
import { setActiveRoomAsVisited, setActive } from '../features/rooms/roomsSlice';
import { useAppDispatch } from '../app/hooks';


export default function ContactPage() {
    const [t, i18n] = useTranslation('common');
    const dispatch = useAppDispatch()

    // Dispatch user accessed room even when using the nav menu
    dispatch(setActive(5))
    dispatch(setActiveRoomAsVisited())
    dispatch(incrementVisited())

    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.contact')}</Typography><br/>
            <Typography variant="body1" component="p">
                {t('contact.content1')}
                <br/>
                {t('contact.content2')} {t('contact.content3')}
            </Typography><br/>
            <Typography variant="body1" component="p" className="contacts">
                <WhatsAppIcon color="success"/> {t('others.phone')}: <Link href="https://api.whatsapp.com/send?phone=5547996279577" target="_blank" rel="noreferrer" underline="hover">+55 (47) 99627-9577</Link>
                <br/>
                <MailOutlineIcon color="error"/> Email: <Link href="mailto:vicenteknihs@gmail.com" target="_blank" rel="noreferrer" underline="hover">vicenteknihs@gmail.com</Link>
                <br/>
                <LinkedInIcon color="primary"/> LinkedIn: <Link href="https://www.linkedin.com/in/vicente-knihs-erbs-335b95209/" target="_blank" rel="noreferrer" underline="hover">Vicente Knihs Erbs</Link>
                <br/>
                <GitHubIcon /> GitHub: <Link href="https://github.com/vicenteke" target="_blank" rel="noreferrer" underline="hover">https://github.com/vicenteke</Link>
                <br/>
            </Typography><br/>
            <Avatar talkbox={false} />
        </>
    );
}
