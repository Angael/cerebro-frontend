import React from 'react';
import Layout from '../Layout';
import { Box, Container, Typography } from '@mui/material';

interface IProps {}

const Browse = (props: IProps) => {
  return (
    <Container maxWidth="md">
      <Box component="header">
        <Typography variant="h1" color="textPrimary">
          Browse
        </Typography>
        <Typography mt={-1} variant="body1" color="textSecondary">
          Videos, photos, websites, notes
        </Typography>
      </Box>
    </Container>
  );
};

export default Browse;
