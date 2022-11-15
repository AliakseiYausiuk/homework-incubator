import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

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

const HW10 = () => {
    const isLoading = useSelector((state:AppStoreType) => state.loading.isLoading);
    const dispatch = useDispatch();


    const setLoading = () => {
        const timeoutID = setTimeout(() => {
            dispatch(loadingAC(true))
        }, 1500)
    }


    const classes = useStyles();
    return (
        <Grid id={'hw10'}>
            <Typography className={classes.title}>Homework #10</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    { isLoading ? (
                        <div id={'hw10-loading'}>
                            <Loader/>
                        </div>
                    ) : (
                        <SuperButton
                            id={'hw10-button-start-loading'}
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    )}
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW10
