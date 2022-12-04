import React from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';


export default function FAQ() {
    const [t, i18n] = useTranslation('common');

    const data = [
        {
            title: t('faq.question1.title'),
            content: <>{t('faq.question1.content')}</>,
        },
        {
            title: t('faq.question2.title'),
            content: <>{t('faq.question2.content')}</>,
        },
        {
            title: t('faq.question3.title'),
            content: <>{t('faq.question3.content')}</>,
        },
        {
            title: t('faq.question4.title'),
            content: <>{t('faq.question4.content')}</>,
        },
        {
            title: t('faq.question5.title'),
            content: <>{t('faq.question5.content')}</>,
        },
        {
            title: t('faq.question6.title'),
            content: <>{t('faq.question6.content')}<Link href="https://www.linkedin.com/in/vicente-knihs-erbs-335b95209/" target="_blank" rel="noreferrer" underline="hover">LinkedIn</Link>{t('faq.question6.mailIs')}<Link href="mailto:vicenteknihs@gmail.com" target="_blank" rel="noreferrer" underline="hover">vicenteknihs@gmail.com</Link>{t('faq.question6.phone')}</>,
        },
    ]

    return (
        <>
        {data.map((accordion) => {
            return (
                <Accordion key={accordion.title}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>{accordion.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {accordion.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
        <br/>
        </>
    );
}
