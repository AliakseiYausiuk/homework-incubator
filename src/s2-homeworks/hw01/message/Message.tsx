import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

const useStyles = makeStyles({
    avatar: {
        width: '48px',
        height: '48px'
    },
    userName: {},
    message: {},
    time: {
        textAlign: 'center',
    },
    item: {},
    messageBlock: {
        margin: '0 10px 0 0',
        background: '#0066CC',
        padding: '8px 13px',

    }
})

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    const classes = useStyles();
    return (
        <Grid id={'hw1-message-' + props.message.id}>
            <Grid container direction="row-reverse">
                <Grid>
                    <Avatar
                        alt="Name user"
                        id={'hw1-avatar-' + props.message.id}
                        src={props.message.user.avatar}
                        className={classes.avatar}
                    />
                    <Typography id={'hw1-time-' + props.message.id} className={classes.time}>
                        {props.message.message.time}
                    </Typography>
                </Grid>
                <Grid className={classes.item}>
                    <Paper elevation={3} className={classes.messageBlock}>
                        <Typography id={'hw1-name-' + props.message.id} className={classes.userName}>
                            {props.message.user.name}
                        </Typography>
                        <Typography id={'hw1-text-' + props.message.id} className={classes.message}>
                            {props.message.message.text}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Message
