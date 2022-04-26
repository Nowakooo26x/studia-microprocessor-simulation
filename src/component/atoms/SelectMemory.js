import * as React from 'react';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux'
import { setInput } from '../../app-redux/features/memorySlice'

function SelectMemory({ name, title }) {

    const dispatch = useDispatch()

    const [myValue, setMyValue] = React.useState('');

    const handleChange = (event) => {
        dispatch(setInput({ name: name, value: event.target.value }));
        setMyValue(event.target.value);
        //console.log(myValue)
    };

    return (
    <>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel>{title}</InputLabel>
            <Select
              value={myValue}
              label={title}
              onChange={handleChange}
            >
                <MenuItem value={""}><em>none</em></MenuItem>
                <MenuItem value={"AL"}>AL</MenuItem>
                <MenuItem value={"AH"}>AH</MenuItem>
                <MenuItem value={"BL"}>BL</MenuItem>
                <MenuItem value={"BH"}>BH</MenuItem>
                <MenuItem value={"CL"}>CL</MenuItem>
                <MenuItem value={"CH"}>CH</MenuItem>
                <MenuItem value={"DL"}>DL</MenuItem>
                <MenuItem value={"DH"}>DH</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </>
    );
  }
  
  export default SelectMemory;