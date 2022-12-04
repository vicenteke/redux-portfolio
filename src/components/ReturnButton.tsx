import React from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function ResetButton() {
    const [t, i18n] = useTranslation('common');
    return (
        <Link to="/" className='menu-link'>
            <Button variant="contained" className="nice-gradient"
                    sx={{ margin: '16px 0', textDecoration: 'none!important' }}
                    color="primary"  startIcon={<ChevronLeftIcon />}>
                {t('others.return')}
            </Button>
        </Link>
    );
}
