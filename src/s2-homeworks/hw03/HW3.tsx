import React, {useState} from 'react'
import {v1} from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

/*
* 1 - описать тип UserType
* 2 - указать нужный тип в useState с users
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 9 - в файле Greeting.tsx дописать типизацию пропсов
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: number
    name: string
}

export const pureAddUserCallback = (name: string, setUsers: any, users: Array<UserType>) => { // need to fix any
    const user = {
        _id: 99,
        name
    }
    setUsers([...users, user])
}
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


const HW3 = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <Grid id={'hw3'}>
            <Typography className={classes.title}>Homework №3</Typography>
            <Grid className={classes.root}>
                <Container maxWidth={'lg'}>
                    <GreetingContainer
                        users={users}
                        addUserCallback={addUserCallback}
                    />
                </Container>
            </Grid>
        </Grid>
    )
}

export default HW3
