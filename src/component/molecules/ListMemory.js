import * as React from 'react';
import { useState, useEffect } from 'react';

import { setValueMemory } from '../../app-redux/features/memorySlice'
import randomBin from '../../utils/randomBin'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ItemMemory from '../atoms/ItemMemory'

import { useSelector, useDispatch } from 'react-redux'

function ListMemory() {

    const memoryAL = useSelector((state) => state.memory.AL)
    const memoryBL = useSelector((state) => state.memory.BL)
    const memoryCL = useSelector((state) => state.memory.CL)
    const memoryDL = useSelector((state) => state.memory.DL)

    const memoryAH = useSelector((state) => state.memory.AH)
    const memoryBH = useSelector((state) => state.memory.BH)
    const memoryCH = useSelector((state) => state.memory.CH)
    const memoryDH = useSelector((state) => state.memory.DH)

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setValueMemory({ title: "AL", value: randomBin() }))
        dispatch(setValueMemory({ title: "BL", value: randomBin() }))
        dispatch(setValueMemory({ title: "CL", value: randomBin() }))
        dispatch(setValueMemory({ title: "DL", value: randomBin() }))

        dispatch(setValueMemory({ title: "AH", value: randomBin() }))
        dispatch(setValueMemory({ title: "BH", value: randomBin() }))
        dispatch(setValueMemory({ title: "CH", value: randomBin() }))
        dispatch(setValueMemory({ title: "DH", value: randomBin() }))
    }

    return (
    <div>
        <Typography variant="h4" component="h1">
            Memory list
        </Typography>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Box>
                <ItemMemory title={"AL"} value={memoryAL}/>
                <ItemMemory title={"BL"} value={memoryBL}/>
                <ItemMemory title={"CL"} value={memoryCL}/>
                <ItemMemory title={"DL"} value={memoryDL}/>
            </Box>
            <Box>
                <ItemMemory title={"AH"} value={memoryAH}/>
                <ItemMemory title={"BH"} value={memoryBH}/>
                <ItemMemory title={"CH"} value={memoryCH}/>
                <ItemMemory title={"DH"} value={memoryDH}/>
            </Box>
        </Grid>
        <Button variant="contained" onClick={handleClick}>RANDOM ALL</Button>
     </div>
    );
  }
  
  export default ListMemory;