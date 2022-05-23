import React from 'react';
import { useSelector } from 'react-redux'

import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function ItemMemory({ title }) {

    const memory = useSelector((state) => state.memory[title])

    let digit = parseInt(memory, 2) || "0";
    let oct = digit.toString(8) || "0"
    let hex = digit.toString(16).toUpperCase()

    return (
    <Box minWidth="240px" sx={{ p: 1, m: 1, border: '1px solid grey' }}>
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
                    { (title !== "" )? 
                    (
                    <>
                        <Grid item>
                            <Typography variant="subtitle1" component="h2">
                            BIN: {memory}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" component="h2">
                            hex: {hex}, dec: {digit}, oct: {oct}
                            </Typography>
                        </Grid>
                    </>
                    )
                    :
                    ( <Typography>Choose memory</Typography>)
                    }
                    
                </Grid>
            </Grid>
        </Grid>
    </Box>
    );
  }
  
  export default ItemMemory;