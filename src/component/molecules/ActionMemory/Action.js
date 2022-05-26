import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux'

import { movAction, addAction, subAction, xchgAction, orAction, xorAction, andAction, notAction } from '../../../app-redux/features/memorySlice'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Action() {

    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();

    const input1 = useSelector((state) => state.memory.memoryInput.input1)
    const input2 = useSelector((state) => state.memory.memoryInput.input2)

    const funAction = (name) => {
      switch(name){
        case "MOV":
          dispatch(movAction())

          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 !== input2){
            enqueueSnackbar('Action MOV was invoked.', { variant: "success" });
          }else{
            enqueueSnackbar('Action MOV was invoked but you chose the same memories.', { variant: "warning" });
          }
          
        break;
        case "ADD":
          dispatch(addAction())

          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 !== input2){
            enqueueSnackbar('Action ADD was invoked.', { variant: "success" });
          }
        break;
        case "OR":
          dispatch(orAction())
        break;
        case "AND":
          dispatch(andAction())
        break;
        case "XCHG":
          dispatch(xchgAction())
        break;
        case "SUB":
          dispatch(subAction())
        break;
        case "XOR":
          dispatch(xorAction())
        break;
        case "NOT":
          dispatch(notAction())
        break;
      }
    }

    return (
        <Box sx={{m: 2}} maxWidth={350}>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("MOV")}}>MOV</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("ADD")}}>ADD</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("OR")}}>OR</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("AND")}}>AND</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("XCHG")}}>XCHG</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("SUB")}}>SUB</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("XOR")}}>XOR</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={()=>{funAction("NOT")}}>NOT</Button>
        </Grid>
      </Grid>
    </Box>
    );
  }
  
  export default Action;