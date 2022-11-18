import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useAppDispatch } from '../app/hooks'

import { resetRooms } from '../features/rooms/roomsSlice';
import { resetCoins } from '../features/coins/coinsSlice';

export default function ResetButton() {
    const dispatch = useAppDispatch()
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
        handleClose();
    };

    return (
        <>
        <Button variant="contained" sx={{ marginLeft: '16px' }} color="error"
                onClick={handleClickOpen}>
            Reset
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to reset all your progress?
                All data will be lost, including coins and avatars.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleReset} autoFocus>
                Yes, reset my progress
            </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}
