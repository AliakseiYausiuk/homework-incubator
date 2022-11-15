// import s from './Loader.module.css'
//
// export const Loader = () => <div className={s.loader}/>
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box>
    );
}
