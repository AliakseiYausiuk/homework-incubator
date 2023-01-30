import React from 'react'
import s from './FriendMessage.module.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import {MessageType} from '../HW1';
// создать тип вместо any и отобразить приходящие данные
type FriendMessageType = {
    message: MessageType
}

const useStyles = makeStyles({
    avatar: {
        width: '48px',
        height: '48px',
    },
    userName: {},
    message: {},
    time: {
        textAlign: 'center',
    },
    item: {},
    messageBlock: {
        margin: '0 0 0 10px',
        padding: '8px 13px',

    }
})

const FriendMessage = (props: FriendMessageType) => {
    const classes = useStyles();
    return (
        <Grid
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <Grid container>
                <Grid>
                    <Avatar
                        className={s.friendImageAndText}
                        id={'hw1-friend-avatar-' + props.message.id}
                        src={props.message.user.avatar}
                        alt={'Avatar user'}
                    />
                    <Typography
                        id={'hw1-friend-time-' + props.message.id}
                        className={classes.time}
                    >
                        {props.message.message.time}
                    </Typography>
                </Grid>
                <Grid className={classes.item}>
                    <Paper elevation={3} className={classes.messageBlock}>
                        <Typography
                            id={'hw1-friend-name-' + props.message.id}
                            className={classes.userName}
                        >
                            {props.message.user.name}
                        </Typography>
                        <Typography
                            id={'hw1-friend-text-' + props.message.id}
                            className={classes.message}
                        >
                            {props.message.message.text}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FriendMessage
