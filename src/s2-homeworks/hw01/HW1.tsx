import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: {
        avatar: any,
        name: string
    },
    message: {
        text: string,
        time: string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'AliakseiYausiuk',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid #D9D9D9',
        borderBottom: '1px solid #D9D9D9',
        padding: '24px 0 32px 0'
    },
    title: {
        padding: '107px 0 0 0',
        margin: '0 0 10px 70px',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '27px'
    },
    item: {}
})

const HW1 = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Typography className={classes.title}>Homework №1</Typography>
            <Grid id={'hw1'} className={classes.root} >

                <Container maxWidth={'lg'}>
                    <Grid className={classes.item}>
                        {/*проверка отображения (не менять)*/}
                        <Grid>
                            <Message message={message0}/>
                            <FriendMessage message={friendMessage0}/>
                        </Grid>

                        {/*для автоматической проверки дз (не менять)*/}
                        <MessageSender M={Message}/>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW1
