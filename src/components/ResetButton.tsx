import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../app/hooks'

import { resetRooms } from '../features/rooms/roomsSlice';
import { resetCoins } from '../features/coins/coinsSlice';
import { resetAvatar } from '../features/avatar/avatarSlice'

export default function ResetButton() {
    const [t, i18n] = useTranslation('common');
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        dispatch(resetRooms())
        dispatch(resetCoins())
        dispatch(resetAvatar())
        handleClose();
        navigate('/')
    };

    return (
        <>
        <Button
            variant="contained"
            sx={{ marginLeft: '16px', minWidth: 'auto' }}
            color="error"
            onClick={handleClickOpen}
        >
            <ReplayIcon />
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {t("others.reset.title")}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {t("others.reset.body")}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>{t("others.cancel")}</Button>
            <Button onClick={handleReset} autoFocus>
                {t("others.reset.confirm")}
            </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}
