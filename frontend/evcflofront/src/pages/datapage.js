import React, { useState } from 'react';
import SuggestedStation from '../components/SuggestStation';
import NewStation from '../components/NewStation';
import NewBoundary from '../components/NewBoundary';
import { Button, Box } from '@mui/material';

const Data = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'suggested':
        return <SuggestedStation />;
      case 'new':
        return <NewStation />;
      case 'boundary':
        return <NewBoundary />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <h2>Add or Suggest Map Data</h2>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={() => setSelectedComponent('suggested')}>
            Suggest Station
          </Button>
          <Button variant="contained" color="primary" onClick={() => setSelectedComponent('new')}>
            Add Station
          </Button>
          <Button variant="contained" color="primary" onClick={() => setSelectedComponent('boundary')}>
            Add Boundary
          </Button>
        </Box>
      </Box>
      <div>{renderComponent()}</div>
    </>
  );
};

export default Data;
