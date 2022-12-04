import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export interface TalkBoxProps {
    room: number,
    active: boolean
}

export function TalkBox({ room, active }: TalkBoxProps) {
    const [t, i18n] = useTranslation('common');

    const roomNames = [
        t('rooms.reception'),
        t('rooms.meetingRoom'),
        t('rooms.bathroom'),
        t('rooms.office'),
        t('rooms.store'),
        t('rooms.contact'),
        t('rooms.coffee'),
        t('rooms.lab'),
        t('rooms.library'),
    ]

    const roomTexts = [
        t('talkbox.reception'),
        t('talkbox.meetingRoom'),
        t('talkbox.bathroom'),
        t('talkbox.office'),
        t('talkbox.store'),
        t('talkbox.contact'),
        t('talkbox.coffee'),
        t('talkbox.lab'),
        t('talkbox.library'),
    ]

    const text = <>
        <strong className="text-center">{roomNames[room]}</strong><br/><br/>
        {roomTexts[room]}
    </>

    return (
        <Box className='talkbox-box'>
            <Box className={active ? 'talkbox talkbox-active' : 'talkbox'}>
                <Typography variant="body2" component="p">{active ? text: ''}</Typography>
            </Box>
        </Box>
    );
}
