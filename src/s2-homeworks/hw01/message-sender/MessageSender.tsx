import React, {useEffect, useRef, useState} from 'react'
import {message0} from '../HW1'
import s from './MessageSender.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const useStyles = makeStyles({
    root: {
        margin: '73px 0 0 0'
    },
    bnt: {
        background: '#0066CC',
        borderRadius: '20px',
        width: '120px',
        height: '40px'
    },
    textArea: {
        width: '80%',
        height: '40px !important',
        background: '#F5F7FB',
        boxShadow: '0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1)',
        borderRadius: '20px',
        padding: '12px 0 12px 24px'
    }
})

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [text])

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }
    const classes = useStyles();
    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m}/>
            ))}

            <Grid container id={'hw1-send-message-form'} className={classes.root} justifyContent={'space-around'}>
                <TextareaAutosize
                    id={'hw1-textarea'}
                    className={classes.textArea}
                    ref={textareaRef}

                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Button
                    id={'hw1-button'}
                    className={classes.bnt}
                    variant="contained"
                    onClick={addMessage}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </Button>
            </Grid>
        </>
    )
}

export default MessageSender
