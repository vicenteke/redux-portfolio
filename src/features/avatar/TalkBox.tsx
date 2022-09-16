import React from 'react';

import Box from '@mui/material/Box';

export interface TalkBoxProps {
    room: number,
    active: boolean
}

export function TalkBox({ room, active }: TalkBoxProps) {
    const roomTexts = [
        'Room 0: OK',
        'Room 1: Better...',
        'Room 2: Great!',
        'Room 3: Nice!',
        'Room 4: Nicer!',
        'Room 5: Wonderful!',
        'Room 6: Cool!',
        'Room 7: Cooler!',
        'Room 8: Coolest!',
    ]

    // Render actual component
    return (
        <Box className='talkbox-box'>
            <Box className={active ? 'talkbox talkbox-active' : 'talkbox'}>
                {active ? roomTexts[room]: ''}
            </Box>
        </Box>
    );
}
