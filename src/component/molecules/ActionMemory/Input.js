import * as React from 'react';

import { useSelector } from 'react-redux'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import ItemMemory from '../../atoms/ItemMemory'
import SelectMemory from '../../atoms/SelectMemory'

function Input() {
    
    const input1 = useSelector((state) => state.memory.memoryInput.input1)
    const input2 = useSelector((state) => state.memory.memoryInput.input2)
  return (
    <Box sx={{ p: 2, m: 2}}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
        <SelectMemory name="input1" title="Memory 1"/>
        <ItemMemory title={input1}/>

        <SelectMemory name="input2" title="Memory 2"/>
        <ItemMemory title={input2}/>
      </Grid>
    </Box>
  );
}

export default Input;
