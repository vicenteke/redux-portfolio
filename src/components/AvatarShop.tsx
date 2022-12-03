import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectAvatar, selectAvatarStatuses, changeAvatar }
    from '../features/avatar/avatarSlice';
import ShopCard from './ShopCard'

// TODO: Set all the avatars with the same height responsively

export default function AvatarShop() {
    const imgBasePath = '/resources/img/avatars/'
    const data = [
        {
            name: "Casual",
            cost: 0,
            id: 0,
            image: 'avatar_1.png',
            hidden: 'avatar_1_hidden.png',
            margin: 0
        },
        {
            name: "Formal",
            cost: 150,
            id: 1,
            image: 'avatar_2.png',
            hidden: 'avatar_2_hidden.png',
            margin: 16
        },
        {
            name: "Bassist",
            cost: 250,
            id: 2,
            image: 'avatar_8.png',
            hidden: 'avatar_8_hidden.png',
            margin: 45
        },
        {
            name: "Astronaut",
            cost: 250,
            id: 3,
            image: 'avatar_7.png',
            hidden: 'avatar_7_hidden.png',
            margin: 27
        },
    ]

    const avatar = useAppSelector(selectAvatar)
    const avatarStatuses = useAppSelector(selectAvatarStatuses)
    const dispatch = useAppDispatch()

    const setAvatar = (avatar: number): boolean => {
        if (avatar < 0 || avatar >= avatarStatuses.length) return false
        if (avatarStatuses[avatar] === 'unlocked') {
            dispatch(changeAvatar(avatar))
            return true
        }
        return false
    }

    const setNextAvatar = (avatar: number): boolean => {
        avatar += 1
        if (avatar >= avatarStatuses.length) return setNextAvatar(-1)
        if (!setAvatar(avatar)) return setNextAvatar(avatar)
        return true
    }

    const setPrevAvatar = (avatar: number): boolean => {
        avatar -= 1
        if (avatar < 0) return setPrevAvatar(avatarStatuses.length)
        if (!setAvatar(avatar)) return setPrevAvatar(avatar)
        return true
    }

    useEffect(() => {
        // Anything in here is fired on component mount.
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyName = event.key
            switch (keyName) {
                case 'ArrowUp':
                    setPrevAvatar(avatar)
                    break
                case 'ArrowDown':
                    setNextAvatar(avatar)
                    break
                case 'ArrowLeft':
                    setPrevAvatar(avatar)
                    break
                case 'ArrowRight':
                    setNextAvatar(avatar)
                    break
                case 'Enter':
                    event.preventDefault()
                    setAvatar(avatar)
                    break
                default: break
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Anything in here is fired on component unmount.
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [avatar])

    return (
        <Grid container spacing={2} alignItems="stretch">

        {data.map((d) => {
            let available = avatarStatuses[d.id] === 'unlocked'
            return (
                <Grid key={d.image} item xs={12} md={3}>
                    <ShopCard
                        margin={d.margin}
                        name={d.name} 
                        cost={d.cost}
                        id={d.id}
                        image={imgBasePath + d.image}
                        hidden={imgBasePath + d.hidden}
                        is_available={available}
                        is_active={avatar === d.id}
                        onClick={() => setAvatar(d.id)}
                    />
                </Grid>
            )
        })}
        </Grid>
    );
}
