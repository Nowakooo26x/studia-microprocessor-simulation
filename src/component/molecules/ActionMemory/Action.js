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
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(movAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "ADD":
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(addAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "OR":
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(orAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "AND":
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(andAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "XCHG":
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(xchgAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "SUB":
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(subAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "XOR":
          if(input1 === "" || input2 === ""){
            enqueueSnackbar(`You didn't choose the memorie.`, { variant: "error" });
          }else if(input1 === input2){
            enqueueSnackbar('The same memory cannot be selected twice.', { variant: "error" });
          }else{
            dispatch(xorAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
        break;
        case "NOT":
          if(input1 === ""){
            enqueueSnackbar(`You didn't choose the memories.`, { variant: "error" });
          }else if(input2 === ""){
            enqueueSnackbar('The second memory is not empty.', { variant: "error" });
          }else{
            dispatch(notAction())
            enqueueSnackbar(`Action ${name} was invoked.`, { variant: "success" });
          }
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