import * as React from 'react';

import { useDispatch } from 'react-redux'
import { movAction, addAction, subAction, xchgAction, orAction, xorAction, andAction, notAction } from '../../../app-redux/features/memorySlice'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Action() {

    const dispatch = useDispatch()

    return (
        <Box sx={{m: 2}} maxWidth={350}>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(movAction())}}>MOV</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(addAction())}}>ADD</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(orAction())}}>OR</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(andAction())}}>AND</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(xchgAction())}}>XCHG</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(subAction())}}>SUB</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(xorAction())}}>XOR</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{dispatch(notAction())}}>NOT</Button>
        </Grid>
      </Grid>
    </Box>
    );
  }
  
  export default Action;