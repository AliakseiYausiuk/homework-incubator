import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */


const arr = [
    {id: 1, value: 'x'},
    {id: 2, value: 'y'},
    {id: 3, value: 'z'},
]
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

const HW7 = () => {
    const [value, onChangeOption] = useState(1) // селект и радио должны работать синхронно
    const classes = useStyles();
    return (
        <Grid id={'hw7'}>
            <Typography className={classes.title}>Homework #7</Typography>

            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <SuperSelect
                        id={'hw7-super-select'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                    <SuperRadio
                        id={'hw7-super-radio'}
                        name={'hw7-radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW7
