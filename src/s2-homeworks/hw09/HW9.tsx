import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
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


const HW9 = () => {
    const classes = useStyles();
    return (
        <Grid id={'hw9'}>
            <Typography className={classes.title}>Homework #9</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <Clock/>
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW9
