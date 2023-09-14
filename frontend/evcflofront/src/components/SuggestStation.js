import React from 'react';
import SubTitle from './SubTitle';
import { TextField, Button, Grid, Box } from '@mui/material';

const SuggestedStation = () => {
  return (
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        width: '100%', // Ensures full width on small screens
        maxWidth: { xs: '100%', md: '50%' }, // Full width on small (xs) screens, 500px max-width on medium (md) and up
        margin: '0 auto', // Centers the content
      }}
      style={{
        boxShadow: '0 50px 50px rgb(0 0 0 / 0.2)',
        borderRadius: '25px',
        background: '#2144ad1a',
        padding: '50px',
      }}
    >
      <SubTitle title="Suggest Station" />
      <form action="https://server-e657pcuziq-ts.a.run.app/api/add_suggested" method="POST">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              type="number"
              label="Longitude"
              variant="outlined"
              fullWidth
              inputProps={{ step: '0.0001' }}
              name="longitude"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              label="Latitude"
              variant="outlined"
              fullWidth
              inputProps={{ step: '0.0001' }}
              name="latitude"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField type="number" label="Total Plugs" variant="outlined" fullWidth name="total_plugs" />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              label="Suitability Score"
              variant="outlined"
              fullWidth
              inputProps={{ step: '0.001' }}
              name="suitability_score"
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

export default SuggestedStation;
