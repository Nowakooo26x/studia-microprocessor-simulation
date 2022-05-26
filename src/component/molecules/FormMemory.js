import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux'

import { setValueMemory } from '../../app-redux/features/memorySlice'

import validateBin from '../../utils/validateBin'
import randomBin from '../../utils/randomBin'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SelectMemory from '../atoms/SelectMemory'



function FormMemory() {

    const input = useSelector((state) => state.memory.memoryInput.input)
    const dispatch = useDispatch()

    const { enqueueSnackbar } = useSnackbar();
    const [validate, setValidate] = useState(false);
    const [value, setValue] = useState("");
    
    const handleChange = (event) => {
      
      setValidate(validateBin(event.target.value))
      setValue(event.target.value)
    };

    useEffect(() => {
      if(validate === true){
        enqueueSnackbar('Input only accepts a binary value (max 8 bits).', { variant: "error" });
      }
    }, [validate]);

    const handleClickSave = () => {
      let newValue = "";
      if(value.length < 9){
        let addStr = "";

        for(let i = 0; i < 8 - value.length; i++ ){
          addStr += "0";
        }
        setValue(addStr + value)
        newValue = addStr + value;
      }


      //success
      if( value!== "" && validate === false && input !== "" ){
        dispatch(setValueMemory({ value: newValue, title: input}))
        enqueueSnackbar('Value has been added to memory.', { variant: "success" });
      }
      //error
      if (validate !== false ) {
        enqueueSnackbar('Input only accepts a binary value (max 8 bits).', { variant: "error" });
      }
      if(input === ""){
        enqueueSnackbar('You did not choose the memory.', { variant: "error" });
      }
      if(value === ""){
        enqueueSnackbar('Input is empty. Enter a bin value (max 8 bits).', { variant: "error" });
      }
    }
    //randomBin
    const handleClickRandom = () => {
      setValue(randomBin())
      enqueueSnackbar('Random value was entered in the field.', { variant: "info" });
    }

    return (
    <>
      <Typography variant="h4" component="h1">
        Memory form
      </Typography>
      <Box sx={{ p: 2}}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <SelectMemory name="input" title="Memory"/>
          </Grid>
          <Grid item>
            <Box>
              <TextField onChange={handleChange} id="outlined-basic" error={validate} label="Value" variant="outlined" value={value}/>
            </Box>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Button variant="contained" onClick={handleClickRandom}>RANDOM</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClickSave}>SAVE</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      </>
    );
  }
  
  export default FormMemory;