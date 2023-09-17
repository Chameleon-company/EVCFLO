import React from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Box, Link } from '@mui/material';

const modelData = [
  {
    name: 'EVCS VIC & QLD area density clustering map',
    source:
      'https://htmlpreview.github.io/?https://github.com/Chameleon-company/EVCFLO/blob/main/frontend/notebooks/T32022/Australian_EV_charging_stations_prediction.html',
    sourceText: 'Notebook: Australian_EV_charging_stations_prediction',
    description: 'VIC and QLD EVCS locations display on the map with colours showing their density in selected area',
    items: [
      'Red Icon: EVCS concentrated location',
      'Yellow Icon: EVCS less concentrated location',
      'Green Icon: EVCS locations where is not concentrated',
    ],
    applicationLink: `${process.env.PUBLIC_URL}densityclusteringmap.html`,
  },
  {
    name: 'Future EVCS Recommendation Map',
    source:
      'https://htmlpreview.github.io/?https://github.com/Chameleon-company/EVCFLO/blob/main/notebooks/Archived/EVCS%20Interactive%20Maps/EVCS%20Interactive%20Map-melbourne%20and%20geelong.html',
    sourceText: 'Notebook: EVCS - Interactive Map Development Melbourne and Geelong Region',
    description: 'Showing colour icons of different EVCS in Melbourne and Geelong areas',
    items: [
      'Red Icon: EVCS near another EVCS within 5km radius',
      'Green Icon: EVCS has no other EVCS within 5km radius',
      'Blue Icon: Recommended future EVCS locations for carpark having over 100 parking spaces',
    ],
    applicationLink: `${process.env.PUBLIC_URL}EVCSrecommendationsmap.html`,
  },
  {
    name: 'EVCS VIC & QLD area clustering prediction model',
    source:
      'https://htmlpreview.github.io/?https://github.com/Chameleon-company/EVCFLO/blob/main/frontend/notebooks/T12023/Australian_VIC%26QLD_EVCS_clustering_T12023update.html',
    sourceText: 'Notebook: Australian_VIC&QLD_EVCS_clustering_T12023update.html',
    description: 'Applied Machine learning models to predict EVCS clustering based on the following feature data:',
    items: [
      'Postal Code',
      'Parks',
      'Restaurants',
      'Nearby EVStations',
      'Supermarkets',
      'Power',
      'Malls',
      'charging_stations',
      'Hospitals',
    ],
    applicationLink: `/densityclustering`, // Assuming you don't need `process.env.PUBLIC_URL` for this Link route
  },
];

const AImodelTable = () => {
  return (
    <Box mt={3} mb={6}>
      <Typography variant="h5" align="center" paragraph>
        This page contains all Artificial Intelligence/Machine Learning Model applications that were generated from our
        research to help promote EV adoption
      </Typography>

      <Box display="flex" justifyContent="center">
        <Paper style={{ width: '80%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Application</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {modelData.map((model) => (
                <TableRow key={model.name}>
                  <TableCell>{model.name}</TableCell>
                  <TableCell>
                    <Link target="_blank" rel="noreferrer" href={model.source}>
                      {model.sourceText}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {model.description}
                    <ul>
                      {model.items.map((item) => (
                        <li key={item}>-{item}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Link target="_blank" rel="noreferrer" href={model.applicationLink}>
                      Click me
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
};

export default AImodelTable;
