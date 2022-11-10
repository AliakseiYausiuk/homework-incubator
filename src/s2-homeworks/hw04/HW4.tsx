import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <Grid id={'hw4'}>
            <Typography className={s2.hwTitle}>Homework #4</Typography>
            {/*демонстрация возможностей компонент:*/}
            <Grid className={s2.hw}>
                <Container maxWidth={'lg'}>
                <Stand />
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW4
