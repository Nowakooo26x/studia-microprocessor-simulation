import * as React from 'react';
import { useDispatch } from 'react-redux'

import { setValueMemory } from '../../app-redux/features/memorySlice'

import randomBin from '../../utils/randomBin'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ItemMemory from '../atoms/ItemMemory'

function ListMemory() {

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
                <ItemMemory title={"AL"}/>
                <ItemMemory title={"BL"}/>
                <ItemMemory title={"CL"}/>
                <ItemMemory title={"DL"}/>
            </Box>
            <Box>
                <ItemMemory title={"AH"}/>
                <ItemMemory title={"BH"}/>
                <ItemMemory title={"CH"}/>
                <ItemMemory title={"DH"}/>
            </Box>
        </Grid>
        <Button variant="contained" onClick={handleClick}>RANDOM ALL</Button>
     </div>
    );
  }
  
  export default ListMemory;