import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ReturnButton from '../components/ReturnButton'
import { Avatar } from '../features/avatar/Avatar';

export default function ContactPage() {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">{t('rooms.contact')}</Typography><br/>
            <Typography variant="body1" component="p">
                {t('contact.content1')}
                <br/>
                {t('contact.content2')}
            </Typography><br/>
            <Typography variant="body1" component="p" className="contacts">
                <WhatsAppIcon color="success"/> {t('others.phone')}: <Link href="https://api.whatsapp.com/send?phone=5547996279577" target="_blank" rel="noreferrer" underline="hover">+55 (47) 99627-9577</Link>
                <br/>
                <MailOutlineIcon color="error"/> Email: <Link href="mailto:vicenteknihs@gmail.com" target="_blank" rel="noreferrer" underline="hover">vicenteknihs@gmail.com</Link>
                <br/>
                <LinkedInIcon color="primary"/> LinkedIn: <Link href="https://www.linkedin.com/in/vicente-knihs-erbs-335b95209/" target="_blank" rel="noreferrer" underline="hover">Vicente Knihs Erbs</Link>
                <br/>
            </Typography><br/>
            <Typography variant="body1" component="p">
                {t('contact.content3')}
            </Typography><br/>
            <Avatar talkbox={false} />
        </>
    );
}
