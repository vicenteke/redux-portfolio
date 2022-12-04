import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popper from '@mui/material/Popper';


export default function LanguageSelect() {
    const [t, i18n] = useTranslation('common')
    const [lang, setLang] = useState('en')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [open, setOpen] = useState(false)

    const imgBasePath = '/resources/img/flags/'
    const languages = {
        'en': {
            flag: 'usa.svg',
            alt: t('language.altEn')
        },
        'es': {
            flag: 'spain.svg',
            alt: t('language.altEs')
        },
        'pt': {
            flag: 'brazil.svg',
            alt: t('language.altPt')
        },
    }
    const langObject = languages[lang as keyof typeof languages]
    const id = open ? 'language-select' : undefined;
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
        setOpen(!open)
    }

    const setLanguage = (language: string) => {
        i18n.changeLanguage(language)
        setLang(language)
        setOpen(false)
        setAnchorEl(null)
    }

    return (
        <>
        <Button aria-describedby={id} sx={{ mr: 1 }} size='large' onClick={handleClick}>
            <img alt={langObject.alt} src={imgBasePath + langObject.flag}/>
        </Button>
        <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            sx={{ zIndex: 1500, bgcolor: 'background.paper' }}
            placement='bottom-start'
        >
            <List className="flag-selector">
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setLanguage('en')}>
                    <img
                        className="flag-select"
                        src="/resources/img/flags/usa.svg"
                        alt={String(t('language.altEn'))}
                    /> English
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setLanguage('es')}>
                    <img
                        className="flag-select"
                        src="/resources/img/flags/spain.svg"
                        alt={String(t('language.altEs'))}
                    /> Español
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setLanguage('pt')}>
                    <img
                        className="flag-select"
                        src="/resources/img/flags/brazil.svg"
                        alt={String(t('language.altPt'))}
                    /> Português
                    </ListItemButton>
                </ListItem>
            </List>
        </Popper>
        </>
    );
}
