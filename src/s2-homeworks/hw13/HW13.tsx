import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */
const useStyles = makeStyles({
    root: {
        borderTop: '1px solid #D9D9D9',
        borderBottom: '1px solid #D9D9D9',
        padding: '24px 0 32px 0'
    },
    title: {
        margin: '39px 0 10px 70px',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '27px'
    },

})

const HW13 = () => {
    const classes = useStyles();
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [disabled, setDisabled] = useState(false);

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setDisabled(true)

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode(res.status.toString())
                setImage(success200)
                setText(res.data.errorText)
                setDisabled(false)
            })
            .catch((e) => {
                setCode(e.code)
                setText(e.message)
                setDisabled(false);
            })
    }

    return (
        <Grid id={'hw13'}>
            <Typography className={classes.title}>Homework №13</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}  className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={disabled}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={disabled}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={disabled}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={disabled}
                    >
                        Send null
                    </SuperButton>
                </Container>

                <Grid className={s.responseContainer}>
                    <Grid className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </Grid>

                    <Grid className={s.textContainer}>
                        <Grid id={'hw13-code'} className={s.code}>
                            {code}
                        </Grid>
                        <Grid id={'hw13-text'} className={s.text}>
                            {text}
                        </Grid>
                        <Grid id={'hw13-info'} className={s.info}>
                            {info}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HW13
