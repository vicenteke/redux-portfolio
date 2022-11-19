import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function ResetButton() {
    return (
        <Link to="/" className='menu-link'>
            <Button variant="contained" className="nice-gradient"
                    sx={{ margin: '16px 0', textDecoration: 'none!important' }}
                    color="primary"  startIcon={<ChevronLeftIcon />}>
                Return
            </Button>
        </Link>
    );
}
