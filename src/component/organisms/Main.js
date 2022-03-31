import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Main() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

    return (
      <>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Memory</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Memory"
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={"AH"}>AH</MenuItem>
          <MenuItem value={"AL"}>AL</MenuItem>
        </Select>
        </FormControl>
      </>
    );
  }
  
  export default Main;