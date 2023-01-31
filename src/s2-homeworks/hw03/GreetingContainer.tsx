import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (err: string) => void, setName: (name: string) => void, addUserCallback: (name:string) => void) => {
    if (name.length === 1) {
        setError('Error message');
    } else {
        addUserCallback(name)
        setName('');
        setError('');
    }

}

export const pureOnBlur = (name: string, setError: (err: string) => void) => { // если имя пустое - показать ошибку
    if (name.length > 1) {
        setError('');
    } else {
        setError('Error message');
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.keyCode === 13) {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);

        error && setError('Error message')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (name.length <= 1) {
            setError('Error message')
        } else {
            pureOnEnter(e, addUser)
            setError('')
        }

    }

    const totalUsers = users.length;
    const lastUserName = users.length >= 1 ? users.slice(-1).map(el => el.name) : '';
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
