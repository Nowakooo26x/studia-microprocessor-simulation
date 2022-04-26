import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

function ItemMemory({ title, value}) {

    let digit = parseInt(value, 2) || "";
    let oct = digit.toString(8)
    let hex = digit.toString(16).toUpperCase()

    return (
    <Box maxWidth="230px" sx={{ p: 1, m: 1, border: '1px solid grey' }}>
        <Grid container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        >
            <Grid item>
            <Avatar>
                {title}
            </Avatar>
            </Grid>
            <Grid item>
                <Grid container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Typography variant="subtitle1" component="h2">
                        BIN: {value}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" component="h2">
                        hex: {hex}, dec: {digit}, oct: {oct}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    );
  }
  
  export default ItemMemory;