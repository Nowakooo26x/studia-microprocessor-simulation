import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setValueMemory } from '../../app-redux/features/memorySlice'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import ItemMemory from '../atoms/ItemMemory';
import SelectMemory from '../atoms/SelectMemory'

function ActionMemory() {
    const input1 = useSelector((state) => state.memory.memoryInput.input1)
    const input2 = useSelector((state) => state.memory.memoryInput.input2)

    const value1 = useSelector((state) => state.memory[input1])
    const value2 = useSelector((state) => state.memory[input2])

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
      console.log(age)
    };

    

    const dispatch = useDispatch()

    return (
    <>
      <Typography variant="h4" component="h1">
        Memory action
      </Typography>
    
      <Box sx={{ p: 2, m: 2}}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
      <SelectMemory name="input1" title="Memory 1"/>
      <ItemMemory title={input1} value={value1}/>

      <SelectMemory name="input2" title="Memory 2"/>
      <ItemMemory title={input2} value={value2}/>
      </Grid>
    </Box>
    <Box sx={{m: 2}} maxWidth={350}>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(setValueMemory({ value: "3333", title: "AL"}))}}>MOV</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">ADD</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">OR</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">AND</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">XCHG</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">SUB</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">XOR</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">NOT</Button>
        </Grid>
      </Grid>
    </Box>
  </>
    );
  }
  
  export default ActionMemory;