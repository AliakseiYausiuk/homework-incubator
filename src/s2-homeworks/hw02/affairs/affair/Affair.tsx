import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'
import Grid from '@material-ui/core/Grid';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <Grid
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <Grid id={'hw2-name-' + props.affair._id} className={nameClass}>
                {props.affair.name}
            </Grid>
            <Grid id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </Grid>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={deleteCallback}
            >
                {/*текст кнопки могут изменить студенты*/}
                X
                {/**/}
            </button>
        </Grid>
    )
}

export default Affair
