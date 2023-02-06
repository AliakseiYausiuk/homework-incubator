import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)

    const start = () => {
        stop()
        setDate(new Date())
        const id: number = +setInterval(() => {
            setDisabled(true);
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const stop = () => {
        clearInterval(timerId)
        setDisabled(false);
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const getDayWord = (day: number) => {
        switch (day) {
            case 0 :
                return 'Sunday'
            case 1 :
                return 'Monday'
            case 2 :
                return 'Tuesday'
            case 3 :
                return 'Wednesday'
            case 4 :
                return 'Thursday'
            case 5 :
                return 'Friday'
            case 6 :
                return 'Saturday'
        }
    }
    const getDayMonthWord = (month: number) => {
        switch (month) {
            case 0 :
                return 'January'
            case 1 :
                return 'February'
            case 2 :
                return 'March'
            case 3 :
                return 'April'
            case 4 :
                return 'May'
            case 5 :
                return 'June'
            case 6 :
                return 'July'
            case 7 :
                return 'August'
            case 8 :
                return 'September'
            case 9 :
                return 'October'
            case 10 :
                return 'November'
            case 11 :
                return 'December'
        }
    }

    const timeHours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const timeMinutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const timeSeconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();

    const month = date.getMonth() + 1

    const stringTime = `${timeHours}:${timeMinutes}:${timeSeconds}` || <br/>
    const stringDate = `${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}.${month > 9 ? month : '0' + month}.${date.getFullYear()}` ||
        <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    // console.log(stringDate)
    const stringDay = getDayWord(date.getDay()) || <br/>
    const stringMonth = getDayMonthWord(date.getMonth()) || <br/>


    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabled} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!disabled} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
