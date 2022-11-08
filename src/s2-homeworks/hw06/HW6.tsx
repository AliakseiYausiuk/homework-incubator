import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import {restoreState, saveState} from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

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

})

const HW6 = () => {
    const classes = useStyles();
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('hw6-editable-span-value', value));
    }

    return (
        <Grid id={'hw6'}>
            <Typography className={classes.title}>Homework #6</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <Grid className={s.editableSpanContainer}>
                        <SuperEditableSpan
                            id={'hw6-spanable-input'}
                            value={value}
                            onChangeText={setValue}
                            spanProps={{
                                id: 'hw6-editable-span',
                                defaultText: 'enter text...',
                            }}
                        />
                    </Grid>

                    <Grid className={s.buttonsContainer}>
                        <SuperButton id={'hw6-save'} onClick={save}>
                            Save to ls
                        </SuperButton>
                        <SuperButton
                            id={'hw6-restore'}
                            onClick={restore}
                            xType={'secondary'}
                        >
                            Get from ls
                        </SuperButton>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW6
