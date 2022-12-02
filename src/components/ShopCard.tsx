import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, selectCoins } from '../features/coins/coinsSlice'
import { unlockAvatar, changeAvatar } from '../features/avatar/avatarSlice';


export interface ShopCardProps {
    name: string,
    cost: number,
    id: number,
    image: string,
    hidden: string,         // file for image while avatar hasn't been purchased
    is_available: boolean,     // if it has been purchased or not
    is_active: boolean,
    onClick: Function
}


export default function ShopCard({ name, cost, id, image, hidden,
                                   is_available, is_active, onClick }: ShopCardProps) {

    const dispatch = useAppDispatch()
    const coins = useAppSelector(selectCoins)

    const buyAvatar = (avatar: number) => {
        if (coins >= cost) {
            dispatch(unlockAvatar(avatar))
            dispatch(decrement(cost))
            dispatch(changeAvatar(avatar))
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }} className={is_active ? "active-avatar" : ""}
              onClick={() => onClick()}>
        <CardActionArea>
            <CardMedia
            className="avatar-image"
            component="img"
            image={is_available ? image : hidden}
            alt={is_available ? name : "Hidden avatar"}
            />
            {is_available ?
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {name}
                </Typography>
            </CardContent>
                : <></>
            }
            
        </CardActionArea>
        {!is_available ?
            <CardActions sx={{ justifyContent: "center", width: "100%" }}>
            <Button variant="contained" size="large" color="success"
                onClick={() => buyAvatar(id)} disabled={cost > coins}>
                <MonetizationOnRoundedIcon />&emsp; {cost}
            </Button>
            </CardActions>
            : <></>
        }
        </Card>
    );
}
