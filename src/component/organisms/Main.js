import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormMemory from '../molecules/FormMemory';
import ListMemory from '../molecules/ListMemory'
import ActionMemory from '../molecules/ActionMemory'

function Main() {
    return (
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <ListMemory/>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormMemory/>
            <ActionMemory/>
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default Main;