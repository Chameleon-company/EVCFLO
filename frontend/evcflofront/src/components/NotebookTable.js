import React from 'react';
import JsonData from '../data/notebook.json';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Link } from '@mui/material';

function JsonDataDisplay() {
  return (
    <Box mt={3} mb={6}>
      <Typography variant="h5" align="center" paragraph>
        This page showcases research results and applications from our notebooks.
      </Typography>

      <Box display="flex" justifyContent="center">
        <Paper style={{ width: '80%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Research Topic</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Jupyter Notebook</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {JsonData.map((notebook) => (
                <TableRow key={notebook.topic}>
                  <TableCell>{notebook.topic}</TableCell>
                  <TableCell>{notebook.detail}</TableCell>
                  <TableCell>
                    <Link target="_blank" rel="noreferrer" href={process.env.PUBLIC_URL + notebook.link}>
                      HTML Link
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
}

export default JsonDataDisplay;
