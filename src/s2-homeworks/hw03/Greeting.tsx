import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onBlur: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
    lastUserName?: any
}

const useStyles = makeStyles({
    input: {
        padding: '0px',
        width: '372px',
    },
    btn: {
        height: '40px',
        background: '#0066CC',
        margin: '0 0 0 12px'
    }

})

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    // const inputClass = s.errorInput // need to fix with (?:)
    const classes = useStyles();
    return (
        <Grid id={'hw3-form'} className={s.greetingForm}>
            <Typography className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </Typography>

            <Grid container>
                <Grid>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={error ? s.errorInput : s.input}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <Grid id={'hw3-error'} className={s.error}>
                        {error}
                    </Grid>
                </Grid>

                <Button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={classes.btn}
                    disabled={name.length <= 1}
                    variant={'contained'}
                >
                    add
                </Button>
            </Grid>

            {lastUserName && (
                <Grid className={s.greeting}>
                    <Typography id={'hw3-last-user'}>Привет {lastUserName}!</Typography>
                </Grid>
            )}
        </Grid>
    )
}

export default Greeting
