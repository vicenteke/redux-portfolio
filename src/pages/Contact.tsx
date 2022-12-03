import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ReturnButton from '../components/ReturnButton'
import { Avatar } from '../features/avatar/Avatar';

export default function ContactPage() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">Phone</Typography><br/>
            <Typography variant="body1" component="p">
                As you arrived here, I believe you would be interested in getting in touch, so we could chat or anything like that. Also, I've talked too much about myself. What about you?
                <br/>
                Here are a few possibilities to contact me.
            </Typography><br/>
            <Typography variant="body1" component="p" className="conacts">
                <WhatsAppIcon color="success"/> Phone: <Link href="https://api.whatsapp.com/send?phone=5547996279577" target="_blank" rel="noreferrer" underline="hover">+55 (47) 99627-9577</Link>
                <br/>
                <MailOutlineIcon color="error"/> Email: <Link href="mailto:vicenteknihs@gmail.com" target="_blank" rel="noreferrer" underline="hover">vicenteknihs@gmail.com</Link>
                <br/>
                <LinkedInIcon color="primary"/> LinkedIn: <Link href="https://www.linkedin.com/in/vicente-knihs-erbs-335b95209/" target="_blank" rel="noreferrer" underline="hover">Vicente Knihs Erbs</Link>
                <br/>
            </Typography><br/>
            <Typography variant="body1" component="p">
                Feel free to contact me anytime, I'm always open to any conversation!
            </Typography><br/>
            <Avatar talkbox={false} />
        </>
    );
}
