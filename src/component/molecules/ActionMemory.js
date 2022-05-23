import * as React from 'react';

import Typography from '@mui/material/Typography';

import Input from './ActionMemory/Input'
import Action from './ActionMemory/Action';

function ActionMemory() {
  return (
    <>
      <Typography variant="h4" component="h1">
        Memory action
      </Typography>
      <Input/>
      <Action/>
    </>
  );
  }
  
  export default ActionMemory;