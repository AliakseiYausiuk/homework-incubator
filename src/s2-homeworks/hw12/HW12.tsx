import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, StateType} from './bll/themeReducer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {AppStoreType} from '../hw10/bll/store';

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
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

const HW12 = () => {
    const classes = useStyles();
    // взять ид темы из редакса
    const state = useSelector<AppStoreType>(state => state.theme.themeId)
    const dispatch = useDispatch();
    // const themeId = state


    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }


    useEffect(() => {
        document.documentElement.dataset.theme = state + ''
    }, [state])

    return (
        <Grid id={'hw12'}>
            <Typography id={'hw12-text'} className={classes.title}>
                Homework #12
            </Typography>

            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={s.select}
                        options={themes}
                        onChangeOption={change}
                    />
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW12
