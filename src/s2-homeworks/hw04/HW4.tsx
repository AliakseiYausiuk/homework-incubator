import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
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

const HW4 = () => {
    const classes = useStyles();
    return (
        <Grid id={'hw4'}>
            <Typography className={classes.title}>Homework #4</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <Stand/>
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW4
