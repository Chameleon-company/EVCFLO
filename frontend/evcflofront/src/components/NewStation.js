import React from 'react';
import SubTitle from './SubTitle';
import { TextField, Button, Grid, Box } from '@mui/material';

const NewStation = () => {
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
      <SubTitle title="Add Station" />

      <form action="https://server-e657pcuziq-ts.a.run.app/api/add_station" method="POST">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Name" name="name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Address" name="address" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Longitude" name="longitude" step="0.0001" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Latitude" name="latitude" step="0.0001" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Location Category" name="location_category" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Location Subcategory" name="location_sub_category" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Description" name="description" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Open Date" name="open_date" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Parking" name="parking" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Pricing" name="pricing" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Free Use" name="free_use" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Contact Details" name="contact" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Networks (Format: [])" name="networks" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Total Plugs" name="total_plugs" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Port Level Type" name="port_level_type" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Power Output (kW, Format: [])"
              name="power_outputs_kw"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Renewable Power Supply" name="renewable_power_supply" variant="outlined" />
          </Grid>
          {/* The following are the "Number of plugs" series, note the pattern */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of plugs - CHAdeMO"
              name="Plugs_CHAdeMO"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Number of plugs - Tesla" name="Plugs_Tesla" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of plugs - CCS_SAE"
              name="Plugs_CCS_SAE"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Number of plugs - J1772" name="Plugs_J1772" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Number of plugs - Type2" name="Plugs_Type2" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of plugs - Three Phase"
              name="Plugs_Three_Phase"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of plugs - Commando"
              name="Plugs_Commando"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of plugs - Wall_AU"
              name="Plugs_Wall_AU_NZ"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of plugs - Caravan_Mains"
              name="Plugs_Caravan_Mains"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Number of plugs - Other" name="Plugs_Other" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Source of Datapoint" name="source" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              label="Source Date"
              name="source_date"
              variant="outlined"
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

export default NewStation;
