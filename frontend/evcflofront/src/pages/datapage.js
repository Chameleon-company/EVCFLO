import React, { useState } from 'react';
import SuggestedStation from '../components/SuggestStation';
import NewStation from '../components/NewStation';
import NewBoundary from '../components/NewBoundary';
import { Button, Box } from '@mui/material';
import Title from '../components/Title';

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
        <Box mt={4}>
          <Title
            title="EVCFLO"
            subTitle="Data"
            style={{
              paddingTop: '20px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: 'var(--heading-clr)',
            }}
            onClick={() => setSelectedComponent('suggested')}
          >
            Suggest Station
          </Button>
          <Button
            style={{
              backgroundColor: 'var(--heading-clr)',
            }}
            variant="contained"
            onClick={() => setSelectedComponent('new')}
          >
            Add Station
          </Button>
          <Button
            style={{
              backgroundColor: 'var(--heading-clr)',
            }}
            variant="contained"
            onClick={() => setSelectedComponent('boundary')}
          >
            Add Boundary
          </Button>
        </Box>
      </Box>
      <div>{renderComponent()}</div>
    </>
  );
};

export default Data;
