import React from 'react';
import SubTitle from './SubTitle';
import { TextField, Button, Grid, Box } from '@mui/material';

const NewBoundary = () => {
  return (
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        width: '100%',
        maxWidth: { xs: '100%', md: '50%' },
        margin: '0 auto',
        boxShadow: '0 50px 50px rgb(0 0 0 / 0.2)',
        borderRadius: '25px',
        background: '#2144ad1a',
        padding: '50px',
      }}
    >
      <SubTitle title="Add Boundary" />
      <form action="https://server-e657pcuziq-ts.a.run.app/api/add_bounding" method="POST">
        <Grid container spacing={3}>
          {['north', 'south', 'east', 'west'].map((direction) => (
            <Grid item xs={12} key={direction}>
              <TextField
                type="number"
                label={direction.charAt(0).toUpperCase() + direction.slice(1)}
                variant="outlined"
                fullWidth
                inputProps={{ step: '0.0001' }}
                name={direction}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Source - How points inside obtained (Google_API)"
              variant="outlined"
              fullWidth
              name="source"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="Source Date"
              variant="filled"
              fullWidth
              name="source_date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                display: 'block',
                margin: '0 auto',
              }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default NewBoundary;
