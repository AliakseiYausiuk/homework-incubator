import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
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

function HW11() {
    const classes = useStyles();
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const handleChange = (event: any, value: any) => {
        setValue1(value[0])
        setValue2(value[1])
    };

    const change = (event: any, value: any) => {
        setValue1(value)
    }

    return (
        <Grid id={'hw11'}>
            <Typography className={classes.title}>Homework №11</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <Grid className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                        />
                    </Grid>
                    <Grid className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1,value2]}
                            onChange={handleChange}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW11
